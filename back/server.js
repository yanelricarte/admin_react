const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session'); 
const dotenv = require('dotenv');

dotenv.config(); // Cargar las variables de entorno desde el archivo .env

const hechizosRoutes = require('./routes/hechizoRoutes'); // Asegúrate de que este archivo exista
const userRouter = require('./routes/userRoutes'); // Importar el router de usuarios
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la sesión
app.use(session({
  secret: process.env.SESSION_SECRET, 
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } 
}));

// Rutas
app.use('/api/hechizos', hechizosRoutes); // Asegúrate de que las rutas hechizos estén correctamente configuradas
app.use('/api/users', userRouter); // Rutas para usuarios

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
