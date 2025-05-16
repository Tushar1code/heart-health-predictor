from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# --- Load and preprocess dataset ---
df = pd.read_csv('dataset.csv')

columns_to_use = ['age', 'trestbps', 'chol', 'thalach', 'oldpeak']
columns_to_scale = columns_to_use.copy()


X = df[columns_to_use]
y = df['target']


scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=0)
model.fit(X_scaled, y)

# --- Prediction route ---
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array(data['features']).reshape(1, -1)

    if features.shape[1] != len(columns_to_use):
        return jsonify({'error': f'Expected {len(columns_to_use)} features: {columns_to_use}'}), 400

    scaled_features = scaler.transform(features)
    probability = model.predict_proba(scaled_features)[0][1]

    return jsonify({'prediction': round(probability, 4)})  


if __name__ == '__main__':
    app.run(debug=True, port=5001)
