const express = require('express');
const app = express();
const PORT = 3000;

const carros = [
    { id: 1, nome: "corola", marca: "toyota", ano: 2021, cor: "preto" },
    { id: 2, nome: "uno", marca: "fiat", ano: "2010", cor: "azul" },
    { id: 3, nome: "celta", marca: "chevrolet", ano: "2011", cor: "prata" },
    { id: 4, nome: "ford ka", marca: "ford", ano: "2012", cor: "preto" },
    { id: 5, nome: "ranger", marca: "ford", ano: 2014, cor: "branco" }
];

app.get('/carros', (req, res) => {
    let { marca, cor } = req.query;
    let carrosFiltrados = carros;

    if (marca) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.marca.toLowerCase() === marca.toLowerCase());
    }

    if (cor) {
        carrosFiltrados = carrosFiltrados.filter(carro => carro.cor.toLowerCase() === cor.toLowerCase());
    }

    res.json(carrosFiltrados);
});

app.get('/carros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carroEncontrado = carros.find(carro => carro.id === id);

    if (carroEncontrado) {
        res.json(carroEncontrado);
    } else {
        res.status(404).json({ error: 'Carro não encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
