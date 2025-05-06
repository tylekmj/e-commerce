// TODO: Import mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;


// TODO: Create a user schema with the following fields:


const userSchema = new Schema({
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    email: String,
    password: String,
    address: [{ street: String, apartment: String, city: String, state: String, zipCode: String}],

  });

// - firstName (String, required)
// - lastName (String, required)
// - email (String, required, unique)
// - password (String, required)
// - address: Make this an array using the values below as objects
//   - street (String, required)
//   - apartment (String, optional)
//   - city (String, required)
//   - state (String, required)
//   - zipCode (String, required)

// TODO: Create and export the User model
const User = mongoose.model('User', userSchema);
export { User as User };