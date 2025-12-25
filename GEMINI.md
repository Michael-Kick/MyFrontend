# GEMINI.md

## Project Overview

This repository contains a full-stack personal portfolio website. It is structured as a monorepo with two main components: `MyFrontend` and `MyBackend`.

### Frontend (`MyFrontend`)

The frontend is a modern web application built with [Next.js](https://nextjs.org/) and [React](https://react.dev/), written in [TypeScript](https://www.typescriptlang.org/).

*   **UI & Styling**: The UI is built with React components and styled using [Tailwind CSS](https://tailwindcss.com/).
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) is used for animations.
*   **Contact Form**: The website includes a contact form that uses the [Resend](https://resend.com/) service to send emails. The corresponding API route is located at `src/app/api/send-email/route.tsx`.
*   **Structure**: The project follows the standard Next.js 13+ App Router structure. The main page is `src/app/page.tsx`, and it uses several reusable components located in `src/app/_components`.

### Backend (`MyBackend`)

The backend is a simple server built with [Express.js](https://expressjs.com/) and written in [TypeScript](https://www.typescriptlang.org/).

*   **API**: It provides a few basic API endpoints, such as `/api/hello` and `/api/user/:id`.
*   **Middleware**: It uses `cors` to handle cross-origin requests from the frontend and `helmet` to add security headers.
*   **Configuration**: It uses `dotenv` to manage environment variables.

## Building and Running

### Frontend

To run the frontend, navigate to the `MyFrontend` directory:

```bash
cd MyFrontend
```

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run in Development Mode**:
    This will start the development server on `http://localhost:3000`.
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    This will create an optimized production build in the `.next` directory.
    ```bash
    npm run build
    ```

4.  **Run in Production Mode**:
    This will start the production server.
    ```bash
    npm run start
    ```

### Backend

To run the backend, navigate to the `MyBackend` directory:

```bash
cd MyBackend
```

**TODO**: The `package.json` file for the backend is missing. Assuming a standard TypeScript setup, the following commands would be used.

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run the Server**:
    If you have `ts-node` installed, you can run the server directly:
    ```bash
    npx ts-node src/server.ts
    ```
    Alternatively, you would first compile the TypeScript to JavaScript and then run the compiled file:
    ```bash
    # Assuming you have a build script in package.json
    npm run build
    npm run start
    ```

## Development Conventions

*   **Language**: The entire project is written in TypeScript.
*   **Frontend Style**: The project uses functional React components with hooks. The code is formatted according to standard TypeScript and React conventions.
*   **API Communication**: The frontend communicates with the backend via REST API calls. The `send-email` functionality is handled by a serverless function within the Next.js application.
*   **Environment Variables**: The frontend uses `.env.local` for environment variables, including the `RESEND_API_KEY`. The backend uses a `.env` file.
