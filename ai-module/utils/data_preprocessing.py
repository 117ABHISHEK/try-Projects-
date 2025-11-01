from datetime import datetime, timedelta

def calculate_compatibility_score(blood_type_requested, donor_blood_type):
    """
    Calculate blood type compatibility score
    Perfect match = 1.0, Compatible = 0.8, Incompatible = 0.0
    """
    # Blood type compatibility matrix
    compatibility_map = {
        'O-': ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'],  # Universal donor
        'O+': ['O+', 'A+', 'B+', 'AB+'],
        'A-': ['A-', 'A+', 'AB-', 'AB+'],
        'A+': ['A+', 'AB+'],
        'B-': ['B-', 'B+', 'AB-', 'AB+'],
        'B+': ['B+', 'AB+'],
        'AB-': ['AB-', 'AB+'],
        'AB+': ['AB+']  # Universal recipient
    }

    # Check if donor can give to requested blood type
    compatible_recipients = compatibility_map.get(donor_blood_type, [])

    if blood_type_requested in compatible_recipients:
        # Perfect match if same blood type
        if blood_type_requested == donor_blood_type:
            return 1.0
        else:
            # Compatible but not exact match
            return 0.8
    else:
        # Incompatible
        return 0.0

def calculate_distance_score(city1, state1, city2, state2):
    """
    Calculate location proximity score based on city and state match
    Same city = 1.0, Same state = 0.7, Different state = 0.3
    """
    city1_lower = city1.lower().strip()
    city2_lower = city2.lower().strip()
    state1_lower = state1.lower().strip()
    state2_lower = state2.lower().strip()

    if city1_lower == city2_lower and state1_lower == state2_lower:
        return 1.0
    elif state1_lower == state2_lower:
        return 0.7
    else:
        return 0.3

def calculate_availability_score(available_for_emergency, next_eligible_date, last_donation_date):
    """
    Calculate donor availability score
    Factors: emergency availability, eligibility date
    """
    score = 0.0

    # Emergency availability factor (40%)
    if available_for_emergency:
        score += 0.4
    else:
        score += 0.1

    # Eligibility factor (60%)
    if next_eligible_date:
        try:
            # Parse date string if needed
            if isinstance(next_eligible_date, str):
                eligible_date = datetime.fromisoformat(next_eligible_date.replace('Z', '+00:00'))
            else:
                eligible_date = next_eligible_date

            today = datetime.now()

            if eligible_date <= today:
                # Eligible now
                score += 0.6
            else:
                # Not yet eligible, score decreases with days until eligible
                days_until_eligible = (eligible_date - today).days
                if days_until_eligible <= 7:
                    score += 0.5
                elif days_until_eligible <= 14:
                    score += 0.4
                elif days_until_eligible <= 28:
                    score += 0.3
                else:
                    score += 0.1
        except:
            # If date parsing fails, assume eligible
            score += 0.6
    elif not last_donation_date:
        # Never donated before, fully eligible
        score += 0.6
    else:
        # Has donated but no next eligible date, assume eligible
        score += 0.5

    return min(score, 1.0)

def calculate_donation_history_score(total_donations):
    """
    Calculate score based on donation history
    More donations = higher reliability, capped at 1.0
    """
    if total_donations == 0:
        return 0.5  # New donor, neutral score

    # Scale: 10+ donations = perfect score
    score = min(total_donations / 10.0, 1.0)
    return score
