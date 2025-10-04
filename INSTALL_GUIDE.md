# Installation Guide - Deepfake Detection Model

## ⚠️ Important: Python Environment Issue Detected

Your current Python installation (MSYS2/MinGW) is having compatibility issues with scientific packages.

## Recommended Solutions

### Option 1: Use Standard Python (RECOMMENDED)

1. **Download Python from python.org**
   - Visit: https://www.python.org/downloads/
   - Download Python 3.9 or 3.10 (avoid 3.11+ for TensorFlow compatibility)
   - During installation, CHECK "Add Python to PATH"

2. **Open a NEW PowerShell/Command Prompt**

3. **Navigate to project directory**
   ```powershell
   cd E:\Development\Deepfake_Detection_Model
   ```

4. **Create a virtual environment**
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```

5. **Install dependencies**
   ```powershell
   python -m pip install --upgrade pip
   python -m pip install -r requirement.txt
   ```

6. **Run the application**
   ```powershell
   python app.py
   ```

### Option 2: Use Anaconda/Miniconda (EASIER)

1. **Download Anaconda**
   - Visit: https://www.anaconda.com/download
   - Or Miniconda: https://docs.conda.io/en/latest/miniconda.html

2. **Open Anaconda Prompt**

3. **Create environment**
   ```bash
   conda create -n deepfake python=3.9 -y
   conda activate deepfake
   ```

4. **Navigate and install**
   ```bash
   cd E:\Development\Deepfake_Detection_Model
   pip install -r requirement.txt
   ```

5. **Run**
   ```bash
   python app.py
   ```

### Option 3: Use MSYS2 (Your Current Setup - Advanced)

If you must use MSYS2, you need to install pre-compiled packages:

1. **Install MSYS2 packages first**
   ```bash
   pacman -S mingw-w64-x86_64-python-numpy
   pacman -S mingw-w64-x86_64-python-flask
   pacman -S mingw-w64-x86_64-python-tensorflow
   pacman -S mingw-w64-x86_64-opencv
   ```

2. **Then install remaining with pip**
   ```bash
   pip install keras Werkzeug==1.0.1
   ```

## Quick Test (Without ML Model)

To test the new UI without the full ML setup:

1. **Install just Flask**
   ```powershell
   python -m pip install Flask
   ```

2. **Comment out model loading in app.py** (lines 24-28)

3. **Run the app**
   ```powershell
   python app.py
   ```

## Verify Installation

After successful installation, verify by running:

```powershell
python -c "import flask, numpy, tensorflow; print('All packages installed successfully!')"
```

## Common Issues

### SSL Certificate Errors
```powershell
python -m pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org <package>
```

### Permission Errors
- Run PowerShell as Administrator
- Or use: `python -m pip install --user <package>`

### TensorFlow Issues
- TensorFlow 2.13+ requires Python 3.9-3.11
- Use: `pip install tensorflow==2.13.0`

## Need Help?

If you're still having issues:

1. Check Python version: `python --version`
2. Check pip version: `python -m pip --version`
3. Try creating a fresh virtual environment
4. Consider using Docker for a consistent environment

## UI Improvements Made ✨

The application now features:
- Modern gradient design
- Drag & drop file upload
- Beautiful result displays
- Responsive mobile-friendly layout
- Loading animations
- Better error handling

