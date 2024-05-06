// Importa Mongoose
const mongoose = require('mongoose');

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // Puedes agregar más campos según tus necesidades
});

// Crea el modelo de usuario
const User = mongoose.model('User', userSchema);

// Exporta el modelo de usuario
module.exports = User;
