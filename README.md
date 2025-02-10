# FutureTect: Sustainable Housing Planning Tool

---

## Overview

FutureTEct is a prototype tool designed to help users plan sustainable, eco-friendly, and cost-effective housing solutions, especially for low-income communities. By leveraging AI, the tool assists in finding the best locations for building homes and suggests methods to make the construction process more efficient, environmentally friendly, and affordable.

This project is a **single-page prototype** meant for a hackathon and demonstrates the potential of AI-powered, optimized home planning. It focuses on guiding users through a simple step-by-step form to collect basic information, like location, budget, and preferences for sustainability.

---

## Features

- **Step-by-Step Form**: Users can input basic details about their housing preferences, including location, budget, and desired features for sustainability.
- **AI Integration**: Trained on real house databases, this Machine Learning tool provides smart predictions based on user input, helping guide them toward eco-friendly and cost-efficient choices.
- **Cute Animations**: The prototype includes interactive and cute loading GIFs to keep users engaged while their data is processed.

---

## Future Improvements

- **Phase 2**: Once the team wins phase 1, the tool will expand to provide detailed building plans based on multiple location analyses, offering customized solutions tailored to different regions' needs.
- **Advanced AI Integration**: The tool will leverage more sophisticated data manipulation, using geographic and demographic datasets to generate optimized, cost-efficient, and sustainable home plans for specific areas.
- **User Login & Data Saving**: Users will be able to create accounts, save their data, and revisit their home plans later.
- **Expanded Front-End Interactivity**: A more interactive design with real-time visualizations of the building process, including energy usage, material choices, and more.

---

### To run the project:

#### 1. **Client Setup:**

Navigate to the `client` folder and run the following commands:

```bash
npm install      # Install dependencies
npm run dev      # Start the development server
```

#### 2. **Backend Setup:**

Navigate to the `backend` folder and follow these steps:

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

This project earned us **second place** in a recent hackathon! 🎉

---

