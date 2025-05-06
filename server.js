// TODO: Import required modules
// 1. Import express
// 2. Import mongoose
// 3. Import dotenv to load environment variables
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { userRoutes } from "./userRoutes.js"
// import { todoRouter } from './userRoutes.js';

// TODO: Load environment variables
dotenv.config();
// Hint: Use dotenv.config()

// TODO: Initialize Express app
const app = express()
const port = 3000
// Hint: const app = express();

// TODO: Set up middleware
// 1. Express JSON parser 
app.use(express.json())
app.use('/api', userRoutes);
// 2. Serve static files from the 'public' directory

// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection prom

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));
  // Use routes
  // app.use('/api', todoRouter);



// Make sure to handle the connection promise with .then() and .catch()

// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message
app.get('/', (req, res) => {
  res.json('Welcome to my app!');

});


// TODO: Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 

// Use the PORT from your environment variables or default to 3000
process.on("SIGINT", () => {
  console.log("Stopping server...");
  server.close(() => {
    console.log("Server stopped. Port released.");
    process.exit(0);
  });
});
