# Sistema de Citas Médicas

Este proyecto es un sistema de gestión de citas médicas que permite registrar nuevos usuarios y consultar la lista de usuarios registrados, separándolos por género.

## Tecnologías Utilizadas


![Axios](https://img.shields.io/badge/style=flat&logo=AXIOS&logoColor=%23620cdc&label=AXIOS&labelColor=%23fefffe)


![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

## Funcionalidades

- **Registro de Usuarios**: Los usuarios se registran a través de una API externa y se almacenan en memoria.
- **Consulta de Usuarios**: Se pueden obtener los usuarios registrados, divididos por género.
- **Impresión Formateada**: En cada consulta, se imprime la lista de usuarios en la consola con un formato específico utilizando el paquete Chalk.

## Cómo Empezar

Para ejecutar este proyecto localmente, necesitarás Node.js y npm instalados. Sigue estos pasos:

1. Clona el repositorio a tu máquina local.
2. Ejecuta `npm install` para instalar todas las dependencias.
3. Inicia el servidor con `npm start`.

## Rutas del Servidor

- POST `/register`: Registra un nuevo usuario utilizando datos de la API Random User.
- GET `/users`: Devuelve la lista de todos los usuarios registrados, separados por género.

## Modo de Uso

Para probar las funcionalidades del sistema de citas médicas, deberás usar una herramienta para probar APIs como Postman, Thunder Client o cualquier otra de tu preferencia.

- **Registrar Usuarios**: Utiliza la ruta POST `/register` para registrar un nuevo usuario. No es necesario enviar un cuerpo de solicitud, ya que los datos del usuario se generan a través de la API Random User.
- **Ver Usuarios Registrados**: Con una solicitud GET a la ruta `/users`, puedes obtener la lista de todos los usuarios registrados. La respuesta incluirá los usuarios divididos por género.
