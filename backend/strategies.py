import pandas as pd


def run_alpha(ticker_data: pd.DataFrame):
    print("Running alpha")

    # Mark for Openings That Are Higher Than Previous Closes
    # Move Closing Values Down by 1 for comparison

    open_dates = (
        (ticker_data.index[ticker_data["Open"] > ticker_data["Close"].shift(1)])
        .strftime("%Y-%m-%d")
        .tolist()
    )

    print("Selected days where open > closing is ", open_dates)
    return open_dates
