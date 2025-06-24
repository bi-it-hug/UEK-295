# Task App - Token-Based Authentication

This application uses JWT (JSON Web Token) based authentication instead of server sessions.

## Authentication Flow

### Login

1. Send POST request to `/login` with Basic authentication in Authorization header
2. Server validates credentials and returns a JWT token
3. Client stores the token in localStorage

### Using the Token

- Include the token in the Authorization header for all authenticated requests
- Format: `Authorization: Bearer <token>`
- The token expires after 24 hours

### Logout

- Client removes the token from localStorage
- Server confirms logout (no server-side session to destroy)

## API Endpoints

- `POST /login` - Authenticate user and receive token
- `GET /verify` - Verify token validity
- `DELETE /logout` - Confirm logout (client-side token removal)
- `GET /tasks` - Get all tasks (requires authentication)
- `POST /tasks` - Create new task (requires authentication)
- `GET /tasks/:id` - Get specific task (requires authentication)
- `PATCH /tasks/:id` - Update task (requires authentication)
- `DELETE /tasks/:id` - Delete task (requires authentication)

## Client-Side Usage

```javascript
// Login with Basic authentication
const credentials = btoa(`${email}:${password}`);
const response = await fetch("/login", {
    method: "POST",
    headers: {
        Authorization: `Basic ${credentials}`,
    },
});
const { token } = await response.json();
localStorage.setItem("token", token);

// Authenticated request
const token = localStorage.getItem("token");
const response = await fetch("/tasks", {
    headers: { Authorization: `Bearer ${token}` },
});

// Logout
localStorage.removeItem("token");
```

## Setup

1. Install dependencies: `npm install`
2. Start MongoDB
3. Run the application: `npm start`
