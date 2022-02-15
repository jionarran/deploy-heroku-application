const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Olá jio, testando');
})

app.listen(port, () => {
    console.info('Aplicação rodando em localhost')
})