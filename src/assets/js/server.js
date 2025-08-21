const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '../../../')));

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../src/pages/home.html'));
});

app.get('/interna', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../src/pages/interna.html'));
});

app.get('/', (req, res) => {
    res.redirect('/home');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📄 Home: http://localhost:${PORT}/home`);
    console.log(`📄 Interna: http://localhost:${PORT}/interna`);
});