from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
from routes.predict import predict_donors

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Health check endpoint
@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'online',
        'service': 'ThalAI Guardian AI Module',
        'version': '1.0.0'
    }), 200

# Donor prediction endpoint
@app.route('/predict-donor', methods=['POST'])
def predict_donor_route():
    return predict_donors(request)

# Root endpoint
@app.route('/', methods=['GET'])
def root():
    return jsonify({
        'message': 'ThalAI Guardian AI Module',
        'endpoints': {
            '/health': 'GET - Health check',
            '/predict-donor': 'POST - Predict compatible donors'
        }
    }), 200

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    debug = os.getenv('FLASK_ENV') == 'development'

    print(f"Starting ThalAI Guardian AI Module on port {port}...")
    app.run(host='0.0.0.0', port=port, debug=debug)
