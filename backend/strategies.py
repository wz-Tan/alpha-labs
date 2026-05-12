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
    list50ma = []
    list200ma = []

    entry_dates = []
    current_entry = ""

    print("Ticker data is ", ticker_data.head())

    # Get the Series
    close_values = ticker_data["Close"]

    # Mean of Previous Days
    ma50 = close_values.rolling(50).mean()
    ma200 = close_values.rolling(200).mean()

    # Select Valid Rows (True or False)
    matched_golden_cross = ma50 > ma200
    matched_death_cross = ma50 < ma200

    # Filter out NaNs (Date not Matched Yet)
    is_valid = ma50.notna() & ma200.notna()

    # Compare The Rows Where Both are True
    golden_cross = matched_golden_cross & is_valid

    print("Dates meeting golden cross ", golden_cross)

    # Acquire the Dates for the Entry Points (Golden_Cross series is used for true false values)
    entry_dates = ticker_data.index[golden_cross].strftime("%Y-%m-%d").tolist()
    print("Entry dates are ", entry_dates)

    return entry_dates
