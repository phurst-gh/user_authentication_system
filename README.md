# User Authentication System

This project is a full-stack user authentication system that provides secure user registration and login functionality using Node.js, Express, and Passport.js for the backend, with a frontend built using Vanilla JavaScript, HTML, and CSS.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Backend](#backend)
  - [Environment Variables](#environment-variables)
  - [Available Scripts](#available-scripts)
- [Frontend](#frontend)
  - [Overview](#overview)
  - [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Backend**: Node.js, Express.js, Passport.js, MongoDB
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Authentication**: Passport.js (local strategy)

## Project Structure

```
user_authentication_system/
│── backend/          # Server-side logic
│   ├── routes/       # API endpoints
│   ├── models/       # User schema definition
│   ├── config/       # Configuration files
│   ├── app.js        # Main server entry point
│── public/           # Client-side application
│   ├── index.html    # Main UI file
│   ├── styles.css    # Styling file
│   ├── app.js        # Frontend logic
│── package.json      # Project dependencies
│── README.md         # Documentation
```

## Installation and Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/phurst-gh/user_authentication_system.git
   cd user_authentication_system
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the `backend/` directory and configure the necessary environment variables:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   SESSION_SECRET=your_secret_key
   ```

4. Start the backend server:
   ```sh
   npm start
   ```
   The server will run on `http://localhost:3000`.

5. Open `public/index.html` in your browser to access the frontend. You may want to use a live server, the easiest way to do this is through VSCode's Live Server extension

## Backend

The backend handles authentication, session management, and user database operations.

### Environment Variables

The backend requires the following environment variables:

- `PORT`: Port for the backend server (default: 3000)
- `MONGO_URI`: MongoDB connection string
- `SESSION_SECRET`: Secret key for session encryption

### Available Scripts

- `npm start`: Starts the backend server
- `npm run dev`: Starts the backend server in development mode with automatic restarts

## Frontend

### Overview

The frontend provides a simple user interface for authentication. It includes:

- A registration form
- A login form
- Protected content only accessible after authentication

### Usage

1. Open `public/index.html` in a web browser.
2. Register a new user.
3. Login using the registered credentials.
4. Access protected content upon successful authentication.

## API Endpoints

| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/register`  | Registers a new user |
| POST   | `/login`     | Authenticates a user |
| GET    | `/logout`    | Logs out the user |
| GET    | `/dashboard` | Protected route requiring authentication |

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make changes and commit (`git commit -m "Description"`)
4. Push to your fork (`git push origin feature-branch`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

