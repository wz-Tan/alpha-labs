from datetime import datetime

import numpy as np
import pandas as pd
from models import Alpha_Return_Type


def run_alpha(ticker_data: pd.DataFrame, stop_loss: float = 0.05):
    print("Running alpha")

    entry_dates = golden_cross(ticker_data)

    # Mark for Openings That Are Higher Than Previous Closes
    # Move Closing Values Down by 1 for comparison
    # entry_dates = (
    #     (ticker_data.index[ticker_data["Open"] > ticker_data["Close"].shift(1)])
    #     .strftime("%Y-%m-%d")
    #     .tolist()
    # )

    alpha_return_object = Alpha_Return_Type(dates=entry_dates)

    return alpha_return_object


def golden_cross(ticker_data: pd.DataFrame):

    entry_dates = []
    print("Ticker data is ", ticker_data.head())

    # Get the Series
    close_values = ticker_data["Close"]

    # Mean of Previous Days
    ma50 = close_values.rolling(50).mean()
    ma200 = close_values.rolling(200).mean()

    # Filter out NaNs (Date not Matched Yet)
    is_valid = ma50.notna() & ma200.notna()

    # Compare The Rows Where Both are True
    matched_golden_cross = (ma50 > ma200) & is_valid
    matched_death_cross = (ma50 < ma200) & is_valid

    # Acquire CLEAN Entry and Exit Rows (Valid Today, But Was False Yesterday - Fresh Entry and Exits)
    golden_cross = matched_golden_cross & ~matched_golden_cross.shift(1).fillna(False)
    death_cross = matched_death_cross & ~matched_death_cross.shift(1).fillna(False)

    # Acquire the Dates for the Entry Points (TimeStamp Objects)
    entry_dates = ticker_data.index[golden_cross]
    exit_dates = ticker_data.index[death_cross]

    # Filter Out Dates to Hold (Keep Holding Until You Hit an Exit) - So Basically The Dates Between Entry Point and Exit Point
    print("Golden cross dates are ", entry_dates)
    print("Death cross dates are ", exit_dates)

    calculate_earnings(ticker_data, entry_dates, exit_dates)

    return entry_dates.strftime("%Y-%m-%d").tolist()


# Calculate P/L Over All Entries and Exits
def calculate_earnings(ticker_data: pd.DataFrame, entry_dates, exit_dates):
    print("Entries are ", entry_dates)
    print("Exits are ", exit_dates)

    # Calculate Price Differences Here
