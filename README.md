# FutureTect: Sustainable Housing Planning Tool

## Overview

**FutureTect** is a prototype tool designed to assist users in planning sustainable, eco-friendly, and cost-effective housing solutions, especially for low-income communities. Leveraging the power of AI, the tool helps find the best locations for home construction and suggests methods to make the building process more efficient, environmentally friendly, and affordable.

This project is a **single-page prototype** developed for a hackathon, showcasing the potential of AI-powered, optimized home planning. It guides users through a simple, step-by-step form to collect key information such as location, budget, and sustainability preferences.

---

## Features

- **Step-by-Step Form**: A user-friendly form for inputting housing preferences, including location, budget, and desired sustainable features.
- **AI Integration**: Machine learning models trained on real housing data to offer smart recommendations, helping users make eco-friendly and cost-efficient choices.
- **Cute Animations**: Interactive loading GIFs that enhance the user experience while data is processed.

---

## Future Improvements

- **Phase 2 Expansion**: The tool will provide detailed building plans based on multiple location analyses, offering customized solutions for different regions.
- **Advanced AI Features**: More sophisticated data manipulation will generate optimized, cost-efficient, and sustainable home plans tailored to specific geographic and demographic needs.
- **User Account System**: Users will be able to create accounts, save their data, and revisit their home plans later.
- **Enhanced Front-End Interactivity**: Real-time visualizations of the building process, including energy usage, material choices, and more interactive design elements.

---

## Running the Project

### 1. **Client Setup:**

Navigate to the `client` folder and run the following commands to set up the front-end:

```bash
npm install      # Install all required dependencies
npm run dev      # Start the development server
```

### 2. **Backend Setup:**

Navigate to the `backend` folder and follow these steps to set up the back-end:

- **Create and activate a virtual environment:**
  - On Windows:
    ```bash
    python -m venv venv
    venv\Scripts\activate
    ```
  - On macOS/Linux:
    ```bash
    python -m venv venv
    source venv/bin/activate
    ```

- **Install dependencies:**
  ```bash
  pip install -r requirements.txt
  ```

- **Start the backend server:**
  ```bash
  uvicorn main:app --reload --port 8000
  ```

---

## Hackathon Achievement

We’re proud to share that this project earned us **second place** in a recent hackathon! 🎉

---
