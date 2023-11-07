import { viewController } from "./view/viewController.js";
import { Usuario } from "./model/usuario.model.js";


let data = [];
const submitType = { NEW: 0, UPDATE: 1 };
let submitState = submitType.NEW;
let currentId = null

const handleSubmit = (event) => {
  event.preventDefault();

  const user = new Usuario(nome.value, idade.value, login.value, senha.value);

  if (submitState == submitType.NEW) {
    addUser(user);
  } else if (submitState == submitType.UPDATE) {

    updateUser(user);
    btnSub.innerText = "NEW"


  }
  viewController.update(data, new Usuario("", null, "", ""));
};

const addUser = (newUser) => {
  data.push(newUser);
};

const updateUser = (index, userToUpdate) =>{
  data[index] = userToUpdate;
}

const deletUser = (index)=>{
  data.splice(index, 1)
}

const clickEsquerdo = (event)=>{
  const currentId=(event.target.closest('tr').id.split("")[4])

  alert(`Clicou com o botão esquerdo, e o ${data[currentId].getNome().toUpperCase()} será carregado para edição`)
  viewController.updateForm(data[currentId])
}
const clickDireito = (event)=>{
  event.preventDefault();
  currentId=(event.target.closest('tr').id.split("")[4])
  if (event.button == 2) {
    alert(`Clicou com o botão direito, e o ${data[currentId].getNome().toUpperCase()} será deletado`)
  }
}

const controller = {
  iniciar: () => {
    viewController.build();
    const form = document.getElementById("signForm");
    form.addEventListener("submit", handleSubmit);
    const userList = document.getElementById('users-result')
    userList.addEventListener('click', clickEsquerdo)
    userList.addEventListener('contextmenu', clickDireito)
  },
};

export { controller };
