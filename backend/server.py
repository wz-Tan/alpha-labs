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
    body = request.get_json()
    market_name = body.get("marketName")
    duration = body.get("duration")

    # Get Ticker
    get_ticker(market_name, duration)

    return {"status": "ok"}


@app.route("/get_bursa", methods=["GET"])
def get_bursa():

    # Get All Malaysian Stocks
    get_all_bursa_tickers()

    return {"status": "ok"}


if __name__ == "__main__":
    app.run(debug=True)
