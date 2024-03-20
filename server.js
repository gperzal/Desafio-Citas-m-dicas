const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const _ = require('lodash');
const chalk = require('chalk');
const app = express();
const port = 3000;

let users = [];

app.use(express.json());

// Endpoint para registrar un nuevo usuario
app.post('/register', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        const userData = response.data.results[0];

        const user = {
            id: uuidv4(),
            name: userData.name.first,
            last: userData.name.last,
            gender: userData.gender,
            timestamp: moment().format(),
        };

        users.push(user); // Asegúrate de que esta línea se ejecute correctamente

        console.log(users); // Agrega esto para verificar que el usuario se agregue a la lista
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar el usuario');
    }
});


// Endpoint para consultar todos los usuarios
app.get('/users', (req, res) => {

    const groupedUsers = _.groupBy(users, 'gender');
    // Imprimir la lista en la consola con Chalk
    console.log(chalk.bgWhite.blue(JSON.stringify(groupedUsers, null, 2)));
    res.json(groupedUsers);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}/users`);
});
