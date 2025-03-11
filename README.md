# Learn Express JS In 35 Minutes

This repository contains the code from the [Express JS Tutorial](https://www.youtube.com/watch?v=SccSCuHhOw0) by Web Dev Simplified.

## Description

ExpressJS is the most popular Node.js web server framework and is the basis of thousands of sites. This project demonstrates the fundamental concepts of Express.js through a simple user management application.

## Features

- Basic routing with Express
- User management system
- EJS templating
- Middleware implementation
- Form data parsing
- Query parameters handling
- Static file serving
- Advanced routing techniques

## Project Structure

```
├── routes/
│   └── users.js         # User routes handling
├── views/
│   ├── index.ejs        # Main template
│   └── users/
│       └── new.ejs      # New user form
└── server.js            # Main application file
```

## Key Concepts Covered

1. Server Setup
2. Basic Routing
3. Data Sending & Receiving
4. HTML Rendering with EJS
5. Router Implementation
6. Advanced Routing Techniques
7. Middleware Usage
8. Static Files
9. Form/JSON Data Parsing
10. Query Parameters

## Tutorial Timestamps

- 00:00 - Introduction
- 00:28 - Project Setup
- 01:57 - Server Setup
- 03:00 - Basic Routing
- 04:30 - Sending Data
- 06:40 - Rendering HTML
- 11:04 - Routers
- 16:02 - Advanced Routing
- 24:04 - Middleware
- 27:48 - Rendering Static Files
- 29:27 - Parsing Form/JSON Data
- 34:54 - Parse Query Params

## Installation

```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Start the server
npm start
```

## Dependencies

- Express.js
- EJS (Embedded JavaScript templating)

## Routes

- GET `/users` - Display users list
- GET `/users/new` - Show new user form
- POST `/users` - Create new user
- GET `/users/:id` - Get specific user
- PUT `/users/:id` - Update specific user
- DELETE `/users/:id` - Delete specific user

## Contributing

This is a learning project based on the [Express JS Tutorial](https://www.youtube.com/watch?v=SccSCuHhOw0) by Web Dev Simplified.

## License

This project is for educational purposes only.
