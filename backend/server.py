import pandas as pd
from cache import get_cached_ticker, set_cached_ticker
from flask import Flask, jsonify, request
from flask_cors import CORS
from models import Alpha_Return_Type
from strategies import run_alpha
from tickers import get_all_bursa_tickers, get_ticker

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/")
def root():
    return "<p>This is the root of the server</p>"


@app.route("/get_market", methods=["POST"])
def get_market():
    try:
        body = request.get_json()
        ticker_name = body.get("tickerName")
        duration = body.get("duration")

        print("Getting ticker data for ", ticker_name)

        # Get Ticker
        ticker_data: pd.DataFrame = get_ticker(ticker_name, duration)

        set_cached_ticker(ticker_data)

        return jsonify({"ticker_data": ticker_data.to_json()})

    except Exception as e:
        return {"error": str(e)}, 500


@app.route("/get_bursa", methods=["GET"])
def get_bursa():

    # Get All Malaysian Stocks
    get_all_bursa_tickers()

    return {"status": "ok"}


# Run Given Alpha
@app.route("/run_alpha", methods=["POST"])
def handle_run_alpha():
    try:
        body = request.get_json()
        cached_ticker = get_cached_ticker()

        alpha_return_object: Alpha_Return_Type = run_alpha(cached_ticker)

        return jsonify(alpha_return_object.to_dict())

    except Exception as e:
        print("Error running alpha ", e)
        return {"error": str(e)}, 500


# Get Indicators
@app.route("/get_indicators", methods=["POST"])
def get_indicators():
    try:
        print("Getting indicators")
    except Exception as e:
        print("Error getting indicators", e)


if __name__ == "__main__":
    app.run(debug=True)
