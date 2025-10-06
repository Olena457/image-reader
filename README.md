# AI-image classifier

**AI Photo Interpreter** is a React-based application that analyzes images using a pre-trained machine learning model and provides voice-based feedback for enhanced accessibility and user experience.

## Features

- Image interpretation using a ready-to-use AI model
- Voice output of generated descriptions via Text-to-Speech (TTS)
- Fast response time with minimal latency
- Simple and intuitive user interface

## How It Works

1. The user uploads or captures an image
2. The model processes the image and generates a textual description
3. The description is converted to speech and played back to the user
4. Both text and audio feedback are displayed in the interface

## Technologies Used

- React (frontend)
- Pre-trained image classification model: [`@tensorflow-models/mobilenet`](https://www.npmjs.com/package/@tensorflow-models/mobilenet), developed by Google
- UI styling powered by [Material UI](https://mui.com/) for a clean and responsive design
- Interface language switching (Ukrainian and English)
- Light and dark themes 
- Text-to-Speech API (Only English)
- Responsive design optimized for mobile, tablets and desktop devices.


## Purpose

This project offers a clean and user-friendly interface designed to support accessibility for users with low vision. It includes voice-based feedback. The app is built to provide a fast and intuitive way to interpret visual content, making it suitable for inclusive digital experiences.



## Expanding the ESLint configuration


If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
