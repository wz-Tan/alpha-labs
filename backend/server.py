from cache import get_cached_ticker, set_cached_ticker
from datasets import get_all_bursa_tickers, get_ticker
from flask import Flask, jsonify, request
from flask_cors import CORS
from strategies import run_alpha

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
        ticker_data = get_ticker(ticker_name, duration)

        set_cached_ticker(ticker_data)

        return jsonify({"ticker_data": ticker_data})

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

        run_alpha(get_cached_ticker())

        return jsonify({"status": "Alpha has been run"})

    except Exception as e:
        return {"error": str(e)}, 500


if __name__ == "__main__":
    app.run(debug=True)
