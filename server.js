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


function printUsers(users) {
    const women = users.filter(user => user.gender === 'female');
    const men = users.filter(user => user.gender === 'male');

    // La propiedad `name` contiene el nombre completo del usuario, no hay `name.first` o `name.last`.
    const formatUser = (user, index) => `${index + 1}. Nombre: ${user.name} - Apellido: ${user.last} - ID: ${user.id} - Timestamp: ${user.timestamp}`;

    console.log(chalk.blue.bgWhite('Mujeres:'));
    women.forEach((user, index) => {
        console.log(chalk.blue.bgWhite(formatUser(user, index)));
    });
  
    console.log(chalk.blue.bgWhite('\nHombres:'));
    men.forEach((user, index) => {
        console.log(chalk.blue.bgWhite(formatUser(user, index)));
    });
}

// Endpoint para consultar todos los usuarios
app.get('/users', (req, res) => {

    const groupedUsers = _.groupBy(users, 'gender');
    // Imprimir la lista en la consola con Chalk
    // console.log(chalk.bgWhite.blue(JSON.stringify(groupedUsers, null, 2)));
    printUsers(users);
    res.json(groupedUsers);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}/users`);
});
