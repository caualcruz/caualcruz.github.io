// import { model } from "./usuario.model.js";
import { formNewUser } from "./view/form-new-user.js";
// import { construtorGrafico } from "./view.js";

const controller = {
    iniciar: ()=>{
        formNewUser.build()
    }
}

export {controller}