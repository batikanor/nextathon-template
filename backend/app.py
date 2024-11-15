from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes and origins

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify(message="zzHello, World!"), 200

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
