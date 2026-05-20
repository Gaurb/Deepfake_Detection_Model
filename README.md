# 🛡️ Deepfake Detection Model

## 📖 About The Project
This project is an AI-powered web application designed to detect deepfake images using deep learning techniques, built specifically to combat synthetic media threats such as **KYC (Know Your Customer) identity verification fraud**. By leveraging the MesoNet architecture, it analyzes the mesoscopic properties and artifacts of facial images to determine their authenticity, providing a fast and reliable tool to identify manipulated media in real-time pipelines.

### 🌟 Key Performance Metrics
- **Extensive Training:** The CNN model was trained on a dataset of **100,000+ images**, ensuring robust generalization across different types of deepfakes.
- **High Accuracy:** Achieved **92% accuracy** in identifying synthetic media, prioritizing a high recall rate to minimize false negatives in fraud detection scenarios.
- **Real-Time Inference:** Deployed via a Flask API with optimized inference times of **≤ 1.5 seconds**, making it highly suitable for synchronous, real-time identity verification workflows.

## 💻 Tech Stack
- **Backend:** Python, Flask, Werkzeug
- **Machine Learning / AI:** TensorFlow, Keras, OpenCV, Dlib, Scikit-learn
- **Data Processing:** NumPy, Pandas, Matplotlib
- **Frontend:** HTML, CSS, JavaScript

## 🚀 How to Run Locally

### Prerequisites
- Python 3.9 or higher
- Git

### Installation Steps

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repository-url>
   cd Deepfake_Detection_Model
   ```

2. **Create and activate a virtual environment (recommended):**
   ```bash
   conda create -p myenv python=3.9 -y
   conda activate myenv
   # Or using python venv:
   # python -m venv venv
   # source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```

3. **Install the dependencies:**
   ```bash
   pip install -r requirement.txt
   ```

4. **Run the application:**
   ```bash
   python app.py
   ```

5. **Access the web app:**
   Open your browser and navigate to `http://localhost:5000`

## 📸 Screenshots / Demo

![Deepfake Detection UI Analysis](assets/demo.png)  
*Description: The modern UI displaying the AI analysis results, indicating whether the uploaded image is a deepfake or authentic.*

## 📐 Key Design Decisions
- **MesoNet Architecture:** Chosen for its specific focus on detecting mesoscopic properties (like noise patterns and compression artifacts) often left behind by deepfake generation techniques. It provides an optimal balance between high accuracy and computational efficiency.
- **Flask Framework:** Selected for the backend due to its lightweight, flexible, and straightforward nature. It perfectly suits a prediction API and serves the web frontend with minimal overhead.
- **Stateless Prediction:** The prediction endpoint `/predict` is designed to be stateless. It accepts an image, temporarily stores it, runs the model inference, and returns the result immediately.
- **Image Preprocessing Pipeline:** Input images are strictly resized to `128x128` pixels and their pixel values are normalized to a `[0, 1]` range before inference. This ensures consistency with the MesoNet training pipeline for robust predictions.
- **Decoupled Prediction Logic:** The model prediction logic is isolated into a separate `model_predict` function in `app.py`. This separation of concerns allows for easier testing, future updates, or swapping the underlying model weights without altering the Flask routing logic.

## 📚 References
- **Research Paper:** [View the related research document](https://drive.google.com/file/d/11I_bq0j6z2xqkxDkhDVjF16uBvfrxXbZ/view?usp=sharing)