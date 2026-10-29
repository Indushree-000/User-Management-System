# User Management System

## About the Project
A web-based User Management System developed using Node.js, Express.js, MySQL, and EJS. The application allows users to view user records, check the total number of users, and edit usernames with password verification.

## Features
- Display user records from a MySQL database.
- Show the total number of users.
- Edit usernames with password verification.
- Handle HTTP requests using Express.js routes.
- Render dynamic web pages using EJS templates.
- Connect the application to MySQL.

## Technologies Used
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, EJS
- **Database:** MySQL
- **Libraries:** mysql2, method-override, dotenv

## Project Structure
```text
SQLCLASS/
├── views/
│   ├── edit.ejs
│   ├── home.ejs
│   └── showusers.ejs
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── schema.sql
└── README.md
```

## Prerequisites
- Node.js and npm
- MySQL Server

## Setup and Run
1. Clone or download this repository.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create the database and tables using `schema.sql`.
4. Create a `.env` file in the project root with your local database configuration:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_NAME=app
   DB_PASSWORD=your_local_password
   ```
5. Start the application using the start command defined in `package.json`.
6. Open the local URL shown in your terminal.

## Security
Database credentials are stored in a local `.env` file and excluded from Git using `.gitignore`. Never commit passwords or private credentials.

## Learning Outcomes
- Building a backend application with Express.js.
- Performing database operations using MySQL.
- Implementing server-side rendering with EJS.
- Handling HTTP routes and form submissions.
- Managing configuration using environment variables.
