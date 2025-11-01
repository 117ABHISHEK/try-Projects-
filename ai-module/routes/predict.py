from flask import jsonify
from datetime import datetime, timedelta
from utils.data_preprocessing import (
    calculate_compatibility_score,
    calculate_distance_score,
    calculate_availability_score,
    calculate_donation_history_score
)

def predict_donors(request):
    """
    Predict and rank compatible donors based on multiple factors

    Request body:
    {
        "bloodType": "O+",
        "location": {"city": "Mumbai", "state": "Maharashtra"},
        "urgency": "emergency",
        "donors": [array of donor objects]
    }
    """
    try:
        data = request.get_json()

        # Validate request
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        blood_type = data.get('bloodType')
        location = data.get('location')
        urgency = data.get('urgency', 'normal')
        donors = data.get('donors', [])

        if not blood_type or not location:
            return jsonify({'error': 'Blood type and location are required'}), 400

        if not donors or len(donors) == 0:
            return jsonify({'predictions': [], 'message': 'No donors provided'}), 200

        # Calculate compatibility scores for each donor
        predictions = []

        for donor in donors:
            donor_id = donor.get('donorId')
            donor_blood_type = donor.get('bloodType')
            donor_city = donor.get('city')
            donor_state = donor.get('state')
            last_donation = donor.get('lastDonationDate')
            total_donations = donor.get('totalDonations', 0)
            available_emergency = donor.get('availableForEmergency', False)
            next_eligible = donor.get('nextEligibleDate')

            # Calculate individual factor scores
            blood_match_score = calculate_compatibility_score(blood_type, donor_blood_type)
            location_score = calculate_distance_score(
                location.get('city', ''),
                location.get('state', ''),
                donor_city or '',
                donor_state or ''
            )
            availability_score = calculate_availability_score(
                available_emergency,
                next_eligible,
                last_donation
            )
            history_score = calculate_donation_history_score(total_donations)

            # Weight factors based on urgency
            if urgency == 'emergency':
                weights = {
                    'bloodType': 0.40,
                    'location': 0.35,
                    'availability': 0.20,
                    'history': 0.05
                }
            else:
                weights = {
                    'bloodType': 0.40,
                    'location': 0.25,
                    'availability': 0.20,
                    'history': 0.15
                }

            # Calculate weighted overall score
            overall_score = (
                blood_match_score * weights['bloodType'] +
                location_score * weights['location'] +
                availability_score * weights['availability'] +
                history_score * weights['history']
            )

            predictions.append({
                'donorId': donor_id,
                'compatibilityScore': round(overall_score, 3),
                'factors': {
                    'bloodTypeMatch': round(blood_match_score, 2),
                    'locationProximity': round(location_score, 2),
                    'availability': round(availability_score, 2),
                    'donationHistory': round(history_score, 2)
                }
            })

        # Sort by compatibility score (descending)
        predictions.sort(key=lambda x: x['compatibilityScore'], reverse=True)

        # Return top 10 predictions
        top_predictions = predictions[:10]

        return jsonify({
            'predictions': top_predictions,
            'totalDonors': len(donors),
            'matchedDonors': len(predictions),
            'urgency': urgency
        }), 200

    except Exception as e:
        print(f"Error in predict_donors: {str(e)}")
        return jsonify({'error': f'Prediction error: {str(e)}'}), 500
