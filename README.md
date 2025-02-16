# Full Stack Capstone Project - GiftLink Website

## Overview
GiftLink is a full-stack web application designed to facilitate seamless gift-giving experiences. The project integrates a **Node.js Express backend** with a **React-based frontend**, ensuring a smooth and interactive user experience.

## Features
- 🎁 **Gift Recommendation System**
- 🔍 **User-friendly Search Functionality**
- 🛒 **Seamless Gift Selection & Checkout**
- 💬 **Sentiment Analysis Service** (to analyze gift preferences)
- 🏗 **Containerized Deployment with Docker**
- 🌐 **RESTful API Integration**
- 🔐 **Secure User Authentication & Authorization**

## Technologies Used
### Backend:
- **Node.js** & **Express.js** - Server-side logic & APIs
- **MongoDB** - NoSQL database for storing gift data and user information
- **JWT Authentication** - Secure user login & session management
- **Docker** - Containerized deployment
- **Sentiment Analysis Service** - To enhance gift suggestions

### Frontend:
- **React.js** - Dynamic and interactive UI
- **Redux** - State management for a seamless experience
- **Bootstrap/Tailwind CSS** - Responsive design

## Setup & Installation
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://reactjs.org/)

### Steps to Run Locally
#### 1️⃣ Clone the Repository:
```bash
 git clone https://github.com/MuhammadAsad878/fullstack-capstone-project.git
 cd fullstack-capstone-project
```
#### 2️⃣ Install Dependencies:
##### Backend Setup:
```bash
 cd giftlink-backend
 npm install
```
##### Frontend Setup:
```bash
 cd ../giftlink-frontend
 npm install
```
#### 3️⃣ Start the Application:
##### Backend:
```bash
 npm start
```
##### Frontend:
```bash
 npm start
```
The app should now be running at **http://localhost:3000/** (or as configured).

## Deployment
To containerize and deploy the project using **Docker**, run:
```bash
 docker-compose up --build
```
This will set up both the backend and frontend in Docker containers.

## Future Improvements
- 🎯 **Enhance Gift Recommendation Algorithm**
- 📊 **Add AI-Powered Personalized Suggestions**
- 🏆 **Integrate Payment Gateway**
- 📱 **Mobile-Responsive Enhancements**

## License
This project is licensed under the **Apache-2.0 License**.

---
🚀 Happy Coding! If you have any suggestions or issues, feel free to contribute! 😊

