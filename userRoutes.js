// TODO: Import express and your User model
import express from 'express';
import { User } from './User.js';

// TODO: Create an express router
const router = express.Router();

// TODO: Create POST route for user registration (/api/users/register)
// 1. Check if a user with the given email already exists
// 2. If not, create a new user with the request body data
// 3. Return the new user (without the password) with status 201

router.post('/users/register', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, password, email } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'This email already exists' });
    }

    // Create a new user
    const newUser = new User({
      username,
      password,
      email,
    });

    // Save the user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// TODO: Create POST route for user login (/api/users/login)
// 1. Find the user by email
// 2. Check if the password matches
// 3. If authentication successful, return user info (without password)
// 4. If authentication fails, return appropriate error message


router.post('/users/login', async (req, res) => {
  try {
    // Extract username and password from the request body
    const { email, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email' });
    }

    // Check if the password is correct
    if (password !== user.password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Return a success response
    res.status(200).json({ message: 'Logged in successfully', user: user });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});




// TODO: Export the router
export { router as userRoutes }

// curl -X POST http://localhost:3000/api/users/login \-H 'Content-Type: application/json' \-d '{"password":"1235", "email":"as@email.com"}'