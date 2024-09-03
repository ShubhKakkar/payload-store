import express from 'express';
import path from 'path';
import payload from 'payload';
import next from 'next';

// Configuring dotenv to load environment variables
require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
})

const app = express();
const PORT = Number(process.env.PORT) || 8004;

// Initializing Next.js
const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    port: PORT,
});

// Handling Next.js requests
const NextHandler = nextApp.getRequestHandler();

const start = async () => {
    // Initializing Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET!,
        express: app,
    });

    // Prepare Next.js app
    await nextApp.prepare();

    // Redirecting routes to Next.js route handler
    app.use((req, res) => NextHandler(req, res));

    // Starting the server
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}. Next.js App URL ${process.env.NEXT_PUBLIC_SERVER_URL}`);
    });
};

start().catch((err) => {
    console.error('Error starting server:', err);
});