document.getElementById('register').addEventListener('click', function () {
    fetch('/register', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            const alertPlaceholder = document.getElementById('alert-placeholder');
            const alertDiv = document.createElement('div');
            alertDiv.className = 'alert alert-success mt-3';
            alertDiv.role = 'alert';
            alertDiv.style.width = '30%';
            alertDiv.textContent = `Usuario registrado: ${data.name} ${data.last}`;
            alertPlaceholder.innerHTML = '';
            alertPlaceholder.appendChild(alertDiv);
            // Ocultar la alerta después de unos segundos
            setTimeout(() => { alertPlaceholder.removeChild(alertDiv); }, 3000);
        })
        .catch(error => {
            console.error('Error al registrar el usuario:', error);
        });
});

document.getElementById('show-users').addEventListener('click', function () {
    fetch('/users')
        .then(response => response.json())
        .then(groupedUsers => {
            const womenList = document.getElementById('women-list');
            const menList = document.getElementById('men-list');

            // Limpiar las listas antes de mostrar los nuevos usuarios
            womenList.innerHTML = '';
            menList.innerHTML = '';

            // Agregar mujeres a la lista
            groupedUsers.female.forEach((user, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = `${index + 1}. Nombre: ${user.name} ${user.last} - ID: ${user.id} - Timestamp: ${user.timestamp}`;
                womenList.appendChild(listItem);
            });

            // Agregar hombres a la lista
            groupedUsers.male.forEach((user, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = `${index + 1}. Nombre: ${user.name} ${user.last} - ID: ${user.id} - Timestamp: ${user.timestamp}`;
                menList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error al obtener los usuarios:', error);
        });
});