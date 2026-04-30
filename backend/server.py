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
    print("Requested market name is", market_name)

    return {"status": "ok"}


if __name__ == "__main__":
    app.run(debug=True)
