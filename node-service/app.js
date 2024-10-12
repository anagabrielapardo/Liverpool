const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Importa cors


const app = express();
const PORT = 3000;
// Habilita CORS
app.use(cors()); // Esto habilita CORS para todas las rutas

// Middleware para parsear el cuerpo de la solicitud
app.use(bodyParser.json());

// Ruta que recibe un folio y lo env�a al microservicio de Spring Boot
app.post('/folio', async (req, res) => {
    const folio = req.body.folio; // Obtiene el folio del cuerpo de la solicitud

    try {
        // Realiza la solicitud al microservicio de Spring Boot
        const response = await axios.get(`http://localhost:8081/folio?folio=${folio}`);
        
        // Devuelve la respuesta del microservicio como JSON
        return res.json(response.data);
    } catch (error) {
        console.error('Error al invocar el microservicio:', error);
        return res.status(500).json({ error: 'Error al invocar el microservicio' });
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});
