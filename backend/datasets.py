import pandas as pd
import requests
import yfinance as yf


# TODO: This is Faulty, Needs Rework
def get_all_bursa_tickers():
    tickers = []
    page = 1

    while page < 3:
        url = "https://www.bursamalaysia.com/api/v1/equities_prices"
        params = {
            "per_page": 50,
            "page": page,
            "sort_by": "short_name",
            "sort_order": "asc",
        }
        headers = {
            "User-Agent": "Mozilla/5.0",
            "Accept": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            "Referer": "https://www.bursamalaysia.com/market_information/equities_prices",
        }

        res = requests.get(url, params=params, headers=headers)
        data = res.json()

        stocks = data.get("data", {}).get("stock_quotes", [])
        if not stocks:
            break

        for s in stocks:
            tickers.append(
                {
                    "name": s.get("short_name"),
                    "code": s.get("stock_code"),  # e.g. "1155"
                    "yf_ticker": s.get("stock_code") + ".KL",
                }
            )

        total = data.get("data", {}).get("total_count", 0)
        if page * 50 >= total:
            break
        page += 1

    print(tickers)


def get_ticker(market_name: str, duration: str = "1mo"):
    print("Getting the ticker for ", market_name)
    ticker = yf.Ticker(market_name)

    df = ticker.history(period=duration)
    print(df.head())
