let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let user = { nome: "", instituicao: "", curso: "" };


function save() {
  if (!verifMat()) {
    let inputNotas = [];
    let totalNotas = 0;
    user.nome = userNome.value;
    user.instituicao = nomeInstituicao.value;
    let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;

    document.querySelectorAll("div.input-group input").forEach((e) => {
      inputNotas.push(parseFloat(e.value));
      totalNotas += parseFloat(e.value);
    });

    if (!validNotas()) {
      materias.push({
        id: materia.id++,
        nome: select.value.toLocaleUpperCase(),
        notas: inputNotas,
        total: totalNotas,
        info: `<hr>
                    RESULTADO DE: <b>${select.value.toLocaleUpperCase()}</b> 
                    <ul class="list-group">
                        <li class="list-group-item"><b>1º Bimestre:</b> ${
                          inputNotas[0]
                        }</li>
                        <li class="list-group-item"><b>2º Bimestre:</b> ${
                          inputNotas[1]
                        }</li>
                        <li class="list-group-item"><b>3º Bimestre:</b> ${
                          inputNotas[2]
                        }</li>
                        <li class="list-group-item"><b>4º Bimestre:</b> ${
                          inputNotas[3]
                        }</li>
                        <li class="list-group-item">TOTAL FINAL: <b>${totalNotas}</b></li>
                        <li class="list-group-item">STATUS: <b>${isAprovadoOuReprovado(
                          totalNotas
                        )}</b></li>
                    </ul>
                    `,
      });
    }

    function validNotas() {
      for (let i = 0; i < inputNotas.length; i++) {
        if (i == 0 && inputNotas[0] > 20) {
          alert("O valor máximo do primeiro bimestre é de 20 pontos");
          return true;
        } else if (i == 1 && inputNotas[1] > 25) {
          alert("O valor máximo do segundo bimestre é de 25 pontos");
          return true;
        } else if (i == 2 && inputNotas[2] > 25) {
          alert("O valor máximo do terceiro bimestre é de 25 pontos");
          return true;
        } else if (i == 3 && inputNotas[3] > 30) {
          alert("O valor máximo do quarto bimestre é de 30 pontos");
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

function verifMat() {
  let select = document.querySelector('select').value;
  let erro = false;

  materias.forEach((element) => {
    if (element.nome == select) {
      alert("Matéria já adicionada");
      erro = true;
    }
  });
  return erro;
}

function isAprovadoOuReprovado(valor) {
  if (valor >= 60) {
    return "APROVADO";
  } else {
    return "REPROVADO";
  }
}
