const express = require('express');

const app = express();
const PORT = 3001;

// Permitir recibir JSON
app.use(express.json());

// Array en memoria
let bicicletas = [
    {
        id: 1,
        modelo: 'Bicicleta Urbana',
        color: 'Azul'
    },
    {
        id: 2,
        modelo: 'Bicicleta de Montaña',
        color: 'Rojo'
    }
];

// GET: obtener todas las bicicletas
app.get('/api/bicicletas', (req, res) => {
    res.json(bicicletas);
});

// POST: agregar una bicicleta
app.post('/api/bicicletas', (req, res) => {
    const { modelo, color } = req.body;

    const nuevaBicicleta = {
        id: bicicletas.length + 1,
        modelo,
        color
    };

    bicicletas.push(nuevaBicicleta);

    res.status(201).json(nuevaBicicleta);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`API ejecutándose en http://localhost:${PORT}`);
});