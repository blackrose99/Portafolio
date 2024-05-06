const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Cadena de conexión a tu clúster de MongoDB Atlas
    const connectionString = 'mongodb+srv://lmc:Persi14m@clustermanuel.uylutql.mongodb.net/dbPortafolio';

    await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conexión exitosa a MongoDB Atlas');
  } catch (error) {
    console.error('Error de conexión a MongoDB Atlas:', error);
  }
};

module.exports = connectDB;
