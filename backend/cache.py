import pandas as pd

# This File Serves as A Cache for the Most Recently Stored Ticker Data

current_ticker_data = pd.DataFrame()


def set_cached_ticker(ticker_data):
    global current_ticker_data
    current_ticker_data = ticker_data


def get_cached_ticker():
    return current_ticker_data
