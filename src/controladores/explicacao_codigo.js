// Importa o framework Express.js e o atribui à variável 'express'.
// const express = require('express');

// // Inicializa a aplicação Express e atribui à variável 'app'.
// const app = express() r;

// // Define a porta na qual o servidor irá escutar as requisições.
// const PORT = 3000;

// // Define um array de objetos representando diferentes carros.
// const carros = [
//     { id: 1, nome: "corola", marca: "toyota", ano: 2021, cor: "preto" },
//     { id: 2, nome: "uno", marca: "fiat", ano: "2010", cor: "azul" },
//     { id: 3, nome: "celta", marca: "chevrolet", ano: "2011", cor: "prata" },
//     { id: 4, nome: "ford ka", marca: "ford", ano: "2012", cor: "preto" },
//     { id: 5, nome: "ranger", marca: "ford", ano: 2014, cor: "branco" }
// ];

// // Define uma rota para manipular requisições GET para '/carros'.
// app.get('/carros', (req, res) => {
//     // Extrai os parâmetros de consulta 'marca' e 'cor' da requisição.
//     let { marca, cor } = req.query;
    
//     // Inicializa um array de carros filtrados com todos os carros.
//     let carrosFiltrados = carros;

//     // Se 'marca' foi especificada, filtra os carros pelo fabricante.
//     if (marca) {
//         carrosFiltrados = carrosFiltrados.filter(carro => carro.marca.toLowerCase() === marca.toLowerCase());
//     }

//     // Se 'cor' foi especificada, filtra os carros pela cor.
//     if (cor) {
//         carrosFiltrados = carrosFiltrados.filter(carro => carro.cor.toLowerCase() === cor.toLowerCase());
//     }

//     // Retorna a lista de carros filtrados em formato JSON.
//     res.json(carrosFiltrados);
// });

// // Define uma rota para manipular requisições GET para '/carros/:id'.
// app.get('/carros/:id', (req, res) => {
//     // Obtém o ID do carro da URL da requisição e converte para um número inteiro.
//     const id = parseInt(req.params.id);
    
//     // Procura o carro com o ID especificado no array de carros.
//     const carroEncontrado = carros.find(carro => carro.id === id);

//     // Se o carro foi encontrado, retorna seus detalhes em formato JSON.
//     // Caso contrário, retorna um erro 404 indicando que o carro não foi encontrado.
//     if (carroEncontrado) {
//         res.json(carroEncontrado);
//     } else {
//         res.status(404).json({ error: 'Carro não encontrado' });
//     }
// });

// // Inicia o servidor Express para escutar as requisições na porta especificada.
// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });
