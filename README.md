# Jossy Biomedical

Jossy Biomedical is a Node.js and Express-based web application for collecting and managing applicant registrations for a biomedical training or internship program. The project serves a simple web interface for users to register and for administrators to review applicants.

## Features

- Applicant registration form and submission flow
- Express server for serving the frontend and handling API requests
- MongoDB storage for applicant records using Mongoose
- Static assets for the public pages, admin dashboard, and training content

## Project Structure

- server.js — application entry point, server setup, MongoDB connection, and static file serving
- controller/registerApplicant.js — logic for saving and retrieving applicant data
- model/applicantModel.js — Mongoose schema for the applicant model
- router/applicationRoute.js — API routes for applicant-related actions
- public/ — HTML, CSS, and JavaScript files for the frontend pages

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv
- Axios

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a .env file in the project root and add your environment variables:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/jossy-biomedical
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser and visit:
   ```text
   http://localhost:3000
   ```

## API Overview

The application exposes applicant-related routes under the /app prefix, including registration and retrieval endpoints.

## License

This project is licensed under ISC.
