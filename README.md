# 🛡️ Deepfake Detection Model

An AI-powered web application that detects deepfake images using deep learning. This application features a modern, user-friendly interface with drag-and-drop functionality for easy image analysis.

## ✨ Features

- **Modern UI/UX**: Beautiful, intuitive interface with gradient designs
- **Drag & Drop Upload**: Easy image upload with drag-and-drop support
- **Real-time Analysis**: Fast deepfake detection using MesoNet architecture
- **Visual Feedback**: Clear results with color-coded indicators
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **User-Friendly**: Simple workflow with helpful instructions

## 🛠️ Software and Tools Requirements

1. [Github Account](https://github.com)
2. [Heroku Account](https://www.heroku.com/) (for deployment)
3. [VS Code IDE](https://code.visualstudio.com/)
4. [Git CLI](https://git-scm.com/download/gui/windows)
5. Python 3.9 or higher

## 📦 Installation

### Create a new Environment
```bash
conda create -p myenv python=3.9 -y
conda activate myenv
```

### Install Dependencies
```bash
pip install -r requirement.txt
```

### Run the Application
```bash
python app.py
```

The application will be available at `http://localhost:5000`

## 🎯 How to Use

1. **Upload an Image**: 
   - Drag and drop an image onto the upload area, or
   - Click "Browse Files" to select an image from your device
   
2. **Analyze**: 
   - Click the "Analyze Image" button to start the detection process
   
3. **View Results**: 
   - Wait for the AI analysis (usually takes a few seconds)
   - Results will display whether the image is a deepfake or authentic

## 📁 Project Structure

```
Deepfake_Detection_Model/
│
├── app.py                 # Flask application
├── requirement.txt        # Python dependencies
├── Weights/
│   └── Mesonet.h5        # Trained model weights
├── static/
│   ├── css/
│   │   └── main.css      # Styling
│   └── js/
│       └── main.js       # Frontend logic
├── templates/
│   ├── base.html         # Base template
│   └── index.html        # Main page
└── uploads/              # Temporary upload storage
```

## 🔍 Model Information

This application uses the **MesoNet** architecture, a deep learning model specifically designed for deepfake detection. The model analyzes facial features and patterns to identify manipulated images.

## 🌐 Deployment

### Deploy to Heroku
```bash
git init
git add .
git commit -m "Initial commit"
heroku create your-app-name
git push heroku master
```

## ⚠️ Note

- Supported image formats: JPG, JPEG, PNG
- Maximum file size: 10MB
- This is an AI model and may not be 100% accurate in all cases

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available for educational purposes.