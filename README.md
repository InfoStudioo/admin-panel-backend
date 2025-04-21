
# Admin Panel Backend
This project serves as the backend for an Admin Panel application, built using Node.js, Express.js, and Sequelize. It provides RESTful APIs for user authentication, transaction management, dashboard analytics, and sales data handling. The backend is designed to integrate seamlessly with a React-based frontend, facilitating full-stack development.​

## ✨ Features
User Authentication: Secure login system with plans to implement JWT-based authentication.

Transaction Management: APIs to handle CRUD operations for financial transactions.

Dashboard Analytics: Endpoints providing data for charts and analytics on the admin dashboard.

Sales Data Handling: Manage and retrieve sales data through dedicated APIs.

CORS Support: Configured to allow cross-origin requests from the frontend application.

JSON Handling: Utilizes body-parser middleware for parsing JSON request bodies.​

## 📦 Installation
# 1. Clone the Repository:

git clone https://github.com/InfoStudioo/admin-panel-backend.git
cd admin-panel-backend

# Install Dependencies:

npm install

# 3. Configure Environment Variables: Create a .env file in the root directory and add the following variables:

PORT=5000
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name


# 4. Run the Server:


npm start


The server will start on the port specified in the .env file (default is 5000).

## API Endpoints

User Routes: /api/users

Transaction Routes: /api/transactions

Dashboard Routes: /api/dashboard

Sales Routes: /api/sales​

Each route supports standard CRUD operations and is structured to facilitate easy integration with the frontend.​

## Project Structure

├── config/             # Database configuration
├── controllers/        # Route handlers
├── middleware/         # Custom middleware functions
├── models/             # Sequelize models
├── routes/             # API route definitions
├── utils/              # Utility functions
├── .env                # Environment variables
├── package.json        # Project metadata and scripts
└── server.js           # Entry point of the application


## 🎥 YouTube Video Series
A comprehensive video series is available to guide you through the development of this project. The series covers both frontend and backend implementations in detail.​

Frontend Development
Introduction and React App Setup – Part 1 -  https://youtu.be/IyGoucFuNaY

Initial Setup and App Structure – Part 2 -  https://youtu.be/L09cAOXnt84

Sidebar and Navbar Implementation – Part 3 -  https://youtu.be/2EZfn9X5oqY

Footer Component Creation – Part 4 -  https://youtu.be/mR0Wo38jrKM

Dashboard Component Development – Part 5 - https://youtu.be/Z13Yll6urbA

Integration of Chart.js Library – Part 6 -  https://youtu.be/T70hwgsuSqU

Spend Analysis with React Chart.js 2 – Part 7 - https://youtu.be/ipaoTF5YEzM

Static Transaction List Implementation – Part 8 -  https://youtu.be/T70hwgsuSqU

User Management Component – Part 9 -  https://youtu.be/7_E1I7QgjcI

Settings Component Implementation – Part 10 - https://youtu.be/AHe4Koitv8A

Backend Development
Database Setup and Query Execution – Part 11 -  https://youtu.be/yLkMuimvNVk

Backend Project Setup – Part 12 -  https://youtu.be/rlkFqio91bE

Models and Controllers Setup – Part 13 -  https://youtu.be/BpQ7l3EqAR0

Routing and Server Configuration – Part 14 -  https://youtu.be/I2PKhP9dBhI

Postman Setup and API Testing – Part 15 -  https://youtu.be/fHKj9ldKSuw

Login and Dashboard Access API – Part 16 - https://youtu.be/gxsqzkIIxbk

Login API Implementation – Part 17 -  https://youtu.be/kkf-ygyOHxQ

Captcha Implementation and Dashboard Access – Part 18 -  https://youtu.be/Cr-FMabt4HM

API Authentication Setup – Part 19 -  https://youtu.be/7Pm4MvSr8KY

Transaction Management APIs – Part 20 -  https://youtu.be/TTjX1wPEiwQ

Session Handling and Error Management – Part 21 -  https://youtu.be/h2S-YjbMOS8

Sales Data Management API – Part 22 -  https://youtu.be/isY2pp4bQgI

GetSalesData API: Backend Implementation, React Integration & Testing – Part 23 - https://youtu.be/9k7eFu0Mxa0

Add SpendData API Creation and Testing in Postman – Part 24 -  https://youtu.be/Vd-wOHsn_tg

getSpendData API: Creation, Testing, and Integration in React App – Part 25 -  https://youtu.be/bI-9gXvXoY0

These videos provide step-by-step instructions and are highly recommended for a thorough understanding of the project.


📬 Contact
For any issues or suggestions, feel free to raise an Issue or reach out via comments on the YouTube videos.