const functions = require("firebase-functions");
const express = require("express");

const app = express();
app.use(express.json());

// Ruta de ejemplo
app.get("/api/hechizos", (req, res) => {
  res.json({ message: "¡Listado de hechizos desde el backend!" });
});

// Exportar la app como función
exports.api = functions.https.onRequest(app);
