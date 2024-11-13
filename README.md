<h1 align="center">obj_and_db</h1>

<div align="center">

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Installing](#installing)
- [Project Structure](#structure)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

Welcome to the Obj_and_DB project! This is a comprehensive guide that will help you understand the structure and content of this project. Let's dive into the different parts of the project and explore the purpose and functionality of each component.

### Installing <a name = "installing"></a>

To get a copy of the project up and running on your local machine, follow these steps:

1. Clone or download the repository to your local environment.
2. Ensure you have Node.js installed on your system.
3. Navigate to the project directory and run `npm install` to install all required dependencies.
4. Create `.env` file in the root directory and configure your environment variables for the database.
5. Start the application using `npm start`. This will launch a server on [localhost:3000](localhost:3000) by default.

## 🗃️ Project Structure <a name = "structure"></a>

Here's the project structure, which clearly outlines the organizational hierarchy:

```
.
├── .env
├── package.json
├── public
│   ├── index.html
│   ├── scripts
│   │   └── script.js
│   └── styles
└── server
    ├── app.js
    ├── config
    │   └── db.js
    ├── controllers
    │   └── dataController.js
    ├── middleware (empty directory)
    └── routes
        └── dataRoute.js
```


### .env

This file is required for defining environment variables that the application needs to run properly, including database configurations and possibly API keys if needed.

### package.json

Holds metadata relevant to the project and its dependencies. This is used by npm to manage the project's scripts, dependencies, and more.

### public

The public directory is where all the front-end assets of the application live.

#### index.html

The main HTML file that serves as the entry point for the front-end of the application.

#### scripts

Contains JavaScript files that handle the interactivity of the web application on the client side.

##### script.js

Handles form submission, local storage access, and other DOM-related operations for the client-side application.

#### styles (empty directory)

This folder is intended for CSS files to style the web application. It is currently empty and can be populated with `.css` or `.scss` files as required.

### server

This is the back-end part of the project, which handles HTTP requests, database operations, and serves the public directory.

#### app.js

Sets up the Express server, middleware, routes, and starts the server.

#### config

Contains configuration files for the project.

##### db.js

Provides the configuration for the database connection pool and exports a connection handle.

#### controllers

Holds the controllers that handle incoming HTTP requests and return responses.

##### dataController.js

Defines the logic to fetch data from the database and send it back to the client.

#### middleware (empty directory)

This folder is designated for middleware functions. It is currently empty and can be populated as necessary to process requests and responses throughout the application lifecycle.

#### routes

Defines the routes that the Express server listens to.

##### dataRoute.js

This module sets up the route for `/api/data` and binds it to the appropriate controller logic.

## ⛏️ Built Using <a name = "built_using"></a>

- Node.js - The runtime environment for executing JavaScript on the server side.
- Express - Framework for building web applications on top of Node.js.
- MySQL - The database for storing data.
- Sequelize - A promise-based ORM for Node.js that supports MySQL.

## ✍️ Authors <a name = "authors"></a>

- [@Dima-McArrow](https://github.com/Dima-McArrow) - Idea & Initial work
