# Full Stack Capstone Project ( GiftLink-Website )

## Overview
GiftLink is a full-stack web application designed to streamline gift-giving by offering an intuitive platform to explore, select, and share gift recommendations. The application features a **Node.js Express backend** and a **React-based frontend**, ensuring a seamless user experience.

## Features
- 🎁 **User Authentication**: Secure login and registration.
- 🔍 **Gift Search & Recommendation**: Users can explore curated gift suggestions.
- 🛒 **Wishlist & Favorites**: Save favorite gifts for easy access.
- 📦 **Order Management**: Track and manage gift orders.
- 📊 **Sentiment Analysis Service**: Provides insights based on user preferences and feedback.
- 🚀 **Containerized Deployment**: The entire application is Dockerized for efficient deployment.

## Tech Stack
### Frontend
- **React.js**
- **Bootstrap / Tailwind CSS**

### Backend
- **Node.js & Express.js**
- **MongoDB (Database)**

### Deployment & DevOps
- **Docker** (Containerization)
- **GitHub Actions** (CI/CD Pipeline)
- **Nginx** (Reverse Proxy)

## Project Structure
```
📂 fullstack-capstone-project
 ├── 📂 giftlink-frontend  # React frontend
 ├── 📂 giftlink-backend   # Node.js/Express backend
 ├── 📂 giftwebsite        # Main web assets
 ├── 📂 sentiment          # Sentiment Analysis Service
 ├── 📂 .github            # CI/CD Configuration
 ├── 📄 .gitignore
 ├── 📄 LICENSE
 ├── 📄 README.md
```
 
## User Stories & Issue Tracking (user stories or issues are little bit different then this)
To ensure efficient project management, **9 user stories/issues** were created and tracked:
1. **User Registration & Authentication** ✅
2. **Gift Search & Filter Feature** ✅
3. **Add to Wishlist Functionality** ✅
4. **Order Placement & Tracking** ✅
5. **Sentiment Analysis Service Integration** ✅
6. **Frontend UI Improvements** ✅
7. **API Integration for Recommendations** ✅
8. **Containerization & Deployment** ✅
9. **Bug Fixes & Performance Optimization** ✅

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- **Node.js** & **npm**
- **MongoDB**
- **Docker** (for deployment)

### Steps to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/MuhammadAsad878/fullstack-capstone-project.git
   cd fullstack-capstone-project
   ```
2. Install dependencies for backend and frontend:
   ```sh
   cd giftlink-backend && npm install
   cd ../giftlink-frontend && npm install
   ```
3. Start the backend:
   ```sh
   cd giftlink-backend
   npm start
   ```
4. Start the frontend:
   ```sh
   cd ../giftlink-frontend
   npm start
   ```

### Running with Docker
To deploy using Docker:
```sh
docker-compose up --build
```

## Deployment
The application is **containerized** and can be deployed on **AWS, Heroku, or DigitalOcean** using **GitHub Actions** for automated deployment.

## License
This project is licensed under the **Apache-2.0 License**.

---
🚀 **Developed by Muhammad Asad**

