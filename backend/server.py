from datasets import get_all_bursa_tickers, get_ticker
from flask import Flask, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/")
def root():
    return "<p>This is the root of the server</p>"


@app.route("/get_market", methods=["POST"])
def get_market():
    try:
        body = request.get_json()
        market_name = body.get("marketName")
        duration = body.get("duration")

        print("Getting ticker data for ", market_name)

        # Get Ticker
        ticker_data = get_ticker(market_name, duration)
        print("Ticker data is ", ticker_data)

        return {"ticker_data": ticker_data}

    except Exception as e:
        return {"error": e}


@app.route("/get_bursa", methods=["GET"])
def get_bursa():

    # Get All Malaysian Stocks
    get_all_bursa_tickers()

    return {"status": "ok"}


if __name__ == "__main__":
    app.run(debug=True)
