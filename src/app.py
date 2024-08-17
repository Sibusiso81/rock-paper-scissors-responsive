from flask import Flask, request, jsonify
import cv2
import numpy as np
import base64
from io import BytesIO
from PIL import Image

app = Flask(__name__)

# Load pre-trained smile detector
smile_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_smile.xml')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/detect_smile', methods=['POST'])
def detect_smile():
    data = request.get_json()
    image_data = data['image']
    image_data = base64.b64decode(image_data.split(',')[1])
    image = Image.open(BytesIO(image_data))
    image = np.array(image)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    
    smiles = smile_cascade.detectMultiScale(gray, scaleFactor=1.8, minNeighbors=20)
    smiling = len(smiles) > 0

    return jsonify({'smiling': smiling})

if __name__ == '__main__':
    app.run(debug=True)
