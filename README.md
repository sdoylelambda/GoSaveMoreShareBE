# Backend

Backend for gosavemore.com

# structure

shopping item {name, description, price, picture}
# GoSaveMoreShareBE

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

# Frontend Link
https://github.com/sdoylelambda/GoSaveMoreShareFE

# Go Save More

Go Save More is an e-commerce web application built with React and Redux on the frontend and Node.js and Express on the backend. The project includes a PostgreSQL database layer, authentication-related dependencies, and Stripe integration for payment processing.

> **Public Version:** This repository contains the public version of Go Save More. It is intended to showcase the project and its implementation. It may not include every component or configuration of the original application.

## Tech Stack

**Frontend**
- React
- Redux

**Backend**
- Node.js
- Express.js
- Knex.js for database query building
- PostgreSQL
- SQLite

**Authentication & Security**
- Passport.js
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Helmet for HTTP security headers
- CORS for cross-origin resource sharing
- dotenv for environment variable configuration

**Payments & HTTP Requests**
- Stripe
- Axios

**Testing & Development**
- Jest
- Supertest
- Nodemon

## Features & Implementation

- **E-commerce Application:** Built as a web application for an online store.
- **Frontend State Management:** React and Redux.
- **Backend API:** Node.js and Express.js.
- **Database Integration:** Knex.js with PostgreSQL and SQLite dependencies.
- **Authentication Support:** Includes dependencies for password hashing, JWT-based authentication, and Passport.js.
- **Payment Integration:** Includes the Stripe SDK.
- **Automated Testing:** Jest and Supertest for backend testing.

The features listed above reflect the technologies and dependencies included in the public project. Specific workflows and functionality may vary based on the code available in this repository.

## Getting Started

### Prerequisites

- Node.js
- npm
- A configured database appropriate to the project environment
- Environment variables required by the application

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the required environment variables in a `.env` file, based on the application's configuration.

4. Start the application:

   ```bash
   npm start
   ```

For development with automatic server restarts:

```bash
npm run server
```

**Note:** The commands above use the scripts defined in the backend's `package.json`. Running the complete application may also require setting up the frontend and database separately.

## Testing

Run the configured Jest test suite with:

```bash
npm test
```

The test script sets `DB_ENV=testing` and runs Jest in-band with watch mode enabled. The actual tests and their coverage depend on the test files included in the repository.

## Payments & Configuration

The project includes the Stripe SDK. Stripe credentials and other application secrets should be configured through environment variables rather than committed to source control.

Use appropriate test credentials and Stripe's test environment when validating payment functionality.

## Public Repository

This is the public version of Go Save More. The repository provides a view into the application's implementation and technology stack; it should not be assumed to contain all production code, secrets, deployment settings, or private configuration.

## License

This project's `package.json` specifies the ISC license. Refer to the repository's license file, if present, for the applicable licensing terms.
