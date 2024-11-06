// Classe para representar um Usuário
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  // Array para armazenar os usuários
  let users = [];
  
  // Função para renderizar a tabela de usuários no DOM
  function renderTable() {
    const tableBody = document.getElementById("tabelausers");
    tableBody.innerHTML = ""; // Limpa as linhas existentes
  
    // Para cada usuário, cria uma nova linha na tabela
    users.forEach((user, index) => {
      const row = document.createElement("tr");
  
      // Célula do nome
      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;
      row.appendChild(nameCell);
  
      // Célula do email
      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;
      row.appendChild(emailCell);
  
      // Célula das ações (editar e deletar)
      const actionsCell = document.createElement("td");
      actionsCell.classList.add("action-buttons");
  
      // Botão de editar
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.onclick = () => editUser(index);
      actionsCell.appendChild(editButton);
  
      // Botão de deletar
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Deletar";
      deleteButton.onclick = () => deleteUser(index);
      actionsCell.appendChild(deleteButton);
  
      row.appendChild(actionsCell);
      tableBody.appendChild(row);
    });
  }
  
  // Função para cadastrar um novo usuário
  function registerUser() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    // Cria um novo usuário e adiciona ao array
    const newUser = new User(nameInput.value, emailInput.value);
    users.push(newUser);
  
    // Limpa os campos de entrada
    nameInput.value = "";
    emailInput.value = "";
  
    // Atualiza a tabela
    renderTable();
  }
  
  // Função para editar um usuário
  function editUser(index) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    // Preenche os campos de entrada com os dados do usuário selecionado
    nameInput.value = users[index].name;
    emailInput.value = users[index].email;
  
    // Atualiza o botão de cadastro para salvar alterações
    document.querySelector("button").onclick = function() {
      // Atualiza os dados do usuário no array
      users[index].name = nameInput.value;
      users[index].email = emailInput.value;
  
      // Limpa os campos e volta o botão para a função original
      nameInput.value = "";
      emailInput.value = "";
      document.querySelector("button").onclick = registerUser;
  
      // Renderiza a tabela atualizada
      renderTable();
    };
  }
  
  // Função para deletar um usuário
  function deleteUser(index) {
    // Remove o usuário do array
    users.splice(index, 1);
    renderTable(); // Atualiza a tabela
  }
  