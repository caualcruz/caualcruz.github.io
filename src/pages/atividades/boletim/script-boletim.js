let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let user = { nome: "", instituicao: "", curso: "" };


function userSave(){

  if (!verifVazio()) {
  
  user.nome = userNome.value;
  user.instituicao = nomeInstituicao.value;
  user.curso = nomeCurso.value
  document.querySelector("#card1").style.display = "none"
  document.querySelector("#card2").style.display = "flex"

  function verifVazio() {
    erro = false
      if (user.nome && user.instituicao && user.curso == "") {
        alert ("Existe algum campo vazio")
        return erro;
      }
      return true
      }
}

  }  
function save() {
  let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} <br><b>CURSO: ${user.curso.toLocaleUpperCase()} </b>`;
  if (!verifMat()) {
    let inputNotas = [];
    let totalNotas = 0;
    
    

    document.querySelectorAll("div.input-group input").forEach((e) => {
      inputNotas.push(parseFloat(e.value));
      totalNotas += parseFloat(e.value);
    });

    if (!validNotas()) {
      materias.push({
        id: materia.id++,
        nome: select.value,
        notas: inputNotas,
        total: totalNotas,
        info: `<hr>
                 
                    <tr>

                    <th>RESULTADO DE: <b>${select.value.toLocaleUpperCase()}</b></th> <br>
                    
                   
                        <td><b>1º Bimestre:</b>${
                          inputNotas[0]
                        }</td><br>
                        <td><b>2º Bimestre:</b>${
                          inputNotas[1]
                        }</td><br>
                        <td><b>3º Bimestre:</b>${
                          inputNotas[2]
                        }</td><br>
                        <td><b>4º Bimestre:</b>${
                          inputNotas[3]
                        }</td><br>
                    </tr> 
                        <td>TOTAL FINAL: <b>${totalNotas}</b></td>
                        <td><br>
                          STATUS: <b>${isAprovadoOuReprovado(
                            totalNotas
                          )}</b>
                        </td>
                    `,
      });
    }

    function validNotas() {
      document.querySelector("#resultNotas").style.display = "block"
      document.querySelector("#card2").style.width = "1000px"
      document.querySelector("#card2").style.marginRight = "70px"
      for (let i = 0; i < inputNotas.length; i++) {
        if (i == 0 && inputNotas[0] > 20 || inputNotas[0] < 0) {
          alert("O valor máximo do primeiro bimestre é de 20 pontos e o mínimo 0");
          return true;
        } else if (i == 0 && inputNotas[1] > 25 || inputNotas[1] < 0) {
          alert("O valor máximo do segundo bimestre é de 25 pontos e o mínimo 0");
          return true;
        } else if (i == 0 && inputNotas[2] > 25 || inputNotas[2] < 0) {
          alert("O valor máximo do terceiro bimestre é de 25 pontos e o mínimo 0");
          return true;
        } else if (i == 0 && inputNotas[3] > 30 || inputNotas[3] < 0) {
          alert("O valor máximo do quarto bimestre é de 30 pontos e o mínimo 0");
          return true;
        }
        return false;
      }
    }

    console.log(materias);

    materias.forEach((e) => {
      resultados += `<br>` + e.info;
    });

    resultNotas.innerHTML = resultados;
  }
}
function verifMat(){
  let erro = false;
  let matSel = select.value;

  materias.forEach(item => {
    item.nome === matSel ? erro = true: null
  })
  erro ? alert("Matéria já adicionada") : null
  return erro;
}


// function verifVazio(card1) {
//   let erro = false
//   let inputs = document.querySelectorAll(`.${div} input`)
//   inputs.forEach(input =>{
//     input.value == "" ? erro = true : null
//   })

//   erro ? alert("Existe algum campo vazio") : null;

//   return erro;

// }

function isAprovadoOuReprovado(valor) {
  if (valor >= 60) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}
