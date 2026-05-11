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

    # Golden Cross (50MA > 200MA)
    for index, value in ticker_data.iterrows():
        # Pop Out Excess Data
        if len(list50ma) == 50:
            list50ma.pop(0)

        if len(list200ma) == 200:
            list200ma.pop(0)

        # Fill In Data
        close_value = value["Close"]

        list50ma.append(close_value)
        list200ma.append(close_value)

        # Logic Goes Here (If Average 50 > Average 200 - Record Date to Entry)
        if (
            np.mean(list50ma) > np.mean(list200ma)
            and len(list50ma) == 50
            and len(list200ma) == 200
            and current_entry == ""
        ):
            current_entry = index.strftime("%Y-%m-%d")

        # Exit Condition (MA200 > MA50)
        elif (
            np.mean(list50ma) < np.mean(list200ma)
            and len(list50ma) == 50
            and len(list200ma) == 200
            and current_entry
        ):
            current_entry = ""

        # Within Entry Period
        if current_entry:
            entry_dates.append(index.strftime("%Y-%m-%d"))

    return entry_dates
