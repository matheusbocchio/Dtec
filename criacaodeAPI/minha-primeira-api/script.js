//Criando uma constante com o endereço da API
const API_URL = "http://localhost:3000/usuarios"

//Seceleção de Elementos do HTML Inicial
const userCardsContainer = document.getElementById('user-card-container');
const addUserForm = document.getElementById('addUserForm');
const btnListUsers = document.getElementById('btnListaUsers');

//Seleção de elementos MODAL
const editModal = document.getElementById('editModal');
const editUserForm = document.getElementById('editUserForm');
const btnCancelEdit = document.getElementById('btnCancelEdit');
const editIdInput = document.getElementById('editId');
const editNameInput = document.getElementById('editName');
const editAgeInput = document.getElementById('editAge');

//CRIAÇÃO DE FUNÇÕES
function fetchAndRenderUsers() {
    //Faz uma requisição GET para a URL
    fetch(API_URL)
        .then(response => response.json())
        //renderUsers() função que vai organizar as informações na tela
        .then(users => renderUsers(users))
        .catch(error => {
            console.error("Erro ao buscar usuários", error);
            userCardsContainer.innerHTML = `<p>Erro ao carregar usuários</p>`
        })
}

//Fução para Adicionar Usuarios
function addUser(userData) {
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            addUserForm.reset();
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao adicionar usuário", error));
}

//FUNÇÃO PARA EDITAR USUARIO EXISTENTE
function editUser(userId, userData) {
    fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => response.json())
        .then(() => {
            editModal.style.display = 'none';
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao editar usuário", error));
}

function deleteUser(userId) {
    fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(() => {
            fetchAndRenderUsers();
        })
        .catch(error => console.error("Erro ao deletar usuário", error));
}

function renderUsers(users) {
    userCardsContainer.innerHTML = "";

    if (users.length === 0) {
        userCardsContainer.innerHTML = '<p>Nenhum Usuário cadastrado</p>';
        return;
    }

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <div class="user-info">
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Nome:</strong> ${user.nome}</p>
                <p><strong>Idade:</strong> ${user.idade}</p>
            </div> 
            <div class="card-buttons">
                <button class="btn-edit">Editar</button>
                <button class="btn-delete">Excluir</button>
            </div>
        `;

        const editBtn = userCard.querySelector('.btn-edit');
        const deleteBtn = userCard.querySelector('.btn-delete');

        editBtn.addEventListener('click', () => {
            editIdInput.value = user.id;
            editNameInput.value = user.nome;
            editAgeInput.value = user.idade;
            editModal.style.display = 'flex';
        });

        deleteBtn.addEventListener('click', () => {
            if (confirm(`Tem certeza que deseja excluir o usuário ${user.id}?`)) {
                deleteUser(user.id);
            }
        });
        userCardsContainer.appendChild(userCard);
    });
}

//função botão listar usuarios

btnListUsers.addEventListener('click', fetchAndRenderUsers);

addUserForm.addEventListener('submit', (e) => {
    e.preventDefault(); // impede que o submit recarregue a página

    const newUserName = document.getElementById('addName').value;
    const newUserAge = parseInt(document.getElementById('addAge').value);

    addUser({ nome: newUserName, idade: newUserAge });
});

editUserForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userId = editIdInput.value;
    const newName = editNameInput.value;
    const newAge = parseInt(editAgeInput.value);

    editUser(userId, { nome: newName, idade: newAge });
});

btnCancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === editModal) {
        editModal.style.display = 'none';
    }
});

fetchAndRenderUsers();





