const formNewUser = {
    build:(params)=>{
        const root = document.getElementById('root')
        const formTemplate = document.createElement('form')
        
        formTemplate.setAttribute("id", "signForm")
        formTemplate.className = "form-control"
        formTemplate.innerHTML = `
        
        <label for="nome" type="text" > Nome</label>
        <input class ="form-control" type="text" id="nome">

        <label for="idade" type="text" > Idade</label>
        <input class ="form-control" type="number" id="idade">
        
        <label for="login" type="text" > Login</label>
        <input class ="form-control" type="text" id="login">

        <label for="senha" type="text" > Senha</label>
        <input class ="form-control" type="password" id="senha">
        
        `
        root.appendChild(formTemplate)
    },

    reload:()=>{
        
    }
}

export {formNewUser}