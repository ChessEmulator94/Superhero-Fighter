# Superhero Management System

Application designed to manage superhero data, simulate superhero fights, and provide a user-friendly interface for interacting with the system.

## Overview

The application consists of three main components:

1. **Database:** Contains files related to storing and managing superhero data.
2. **Front End:** Consists of HTML, CSS, and JavaScript files responsible for creating the user interface and handling user interactions.
3. **REST Logic:** Contains server-side JavaScript files responsible for hosting a server, handling API requests and interacting with the database.

## Directory Structure

<pre>
Superhero-Management-System
│
├── Database
│   ├── HeroDB.json
│   └── MockDatabaseHandler.cjs
│
├── Front End
│   └── Index
│       └── Manage Heroes
│           ├── manage.html
│           ├── styles.css
│           ├── UIHandler.js
│           ├── UserInterfaceAPIs.js
│           └── View Heroes
│               ├── formStyles.css
│               ├── ViewHeroes.html
│               └── ViewHeroesLogic.js
│
└── REST Logic
    ├── HeroApiHandler.js
    └── index.js

</pre>

## Database

The `Database` directory contains files related to storing and managing superhero data:

- **HeroDB.json:** JSON file used as the main database for storing superhero information.
- **MockDatabaseHandler.cjs:** JavaScript file providing functionality for a mock database (`HeroDB.json`) used during development and testing.

## Front End

The `Front End` directory contains HTML, CSS, and JavaScript files responsible for creating the user interface and handling user interactions:

- **index.html:** Homepage of the application.
- **app.js:** Script for the homepage of the application.
- **formStyles.css:** CSS file containing styles for form elements.
- **manage.html:** Page for managing heroes.
- **styles.css:** Main CSS file for styling the application.
- **UIHandler.js:** Script exclusively handling the UI and events from UI actions.
- **UserInterfaceAPIs.js:** Acts as an intermediary between the UI and the server, making various queries to the server.
- **ViewHeroes.html:** Page for viewing superhero details.
- **ViewHeroesLogic.js:** Script for handling logic on the ViewHeroes.html page.

## REST Logic

The `REST Logic` directory contains server-side JavaScript files responsible for handling API requests and interacting with the database:

- **HeroApiHandler.js:** Script for fetching superhero data from superheroapi.com based on provided IDs.
- **index.js:** Main server file responsible for processing GET, POST, and DELETE requests and interacting with the database.

## Getting Started

To run the Superhero Management System:

1. Ensure you have Node.js installed on your machine.
2. Navigate to the root directory of the project in your terminal.
3. Install dependencies by running `npm install`.
4. Start the server by running `npm start`.
5. Open your web browser and go to `http://localhost:5500` to access the application.
