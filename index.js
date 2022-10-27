const express = require('express')

const app = express();

// IMPORTACAO DO ARQUIVO DE ROTAS LIVRO
const patientsController = require('./controller/PatientController');

app.use(express.json());

app.use('/', patientsController)

app.listen(3000, () => {
    console.log('Aplicação executada com sucesso em - http://localhost:3000')
});