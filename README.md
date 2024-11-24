# MobileNet Image Recognition

A simple image recognition application using TensorFlow.js and Express.js. This application allows users to upload images and get predictions based on the MobileNet model.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)

## Features

- Upload images in JPEG, PNG, or GIF formats.
- Real-time image classification using MobileNet.
- User-friendly interface with EJS templating.
- Error handling for unsupported image formats.

## Installation

To get started with the MobileNet Image Recognition application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/amt278/Mobilenet-image-recognition.git
   ```

2. Navigate to the project directory:

    ```bash
    cd Mobilenet-image-recognition
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the application:

   ```bash
    npm start
   ```

3. Open your web browser and go to http://localhost:3000.

4. Use the interface to upload an image and get the prediction.

## API

### POST /upload
  - Description: Upload an image for classification.
  - Parameters:
    - image: The image file to be uploaded (must be in JPEG, PNG, or GIF format).
  -  Response: Renders the home page with the prediction result.
      
### GET /
  - Description: Render the home page.
  - Response: Displays the upload form.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.
