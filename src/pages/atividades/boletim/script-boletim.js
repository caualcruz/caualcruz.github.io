let materia = { id: 0, nome: "", notas: [], total: 0, printInfo: "" };
let materias = [];
let user = {nome: "",instituicao:"", curso:""};
function save() {
    let inputNotas = [];
    let totalNotas = 0;
    user.nome = nomeUsuario.value;
    user.instituicao = nomeInstituicao.value;
    let resultados = `<b>BOLETIM DE: ${user.nome.toLocaleUpperCase()}</b><br><b>INSTITUIÇÃO/ESCOLA: ${user.instituicao.toLocaleUpperCase()} </b>`;

    document.querySelectorAll("div.input-group input").forEach(e => {
        inputNotas.push(parseFloat(e.value))
        totalNotas += parseFloat(e.value);
    })

    materias.push(
        {
            id: materia.id++,
            nome: nomeMateria.value.toLocaleUpperCase(),
            notas: inputNotas,
            total: totalNotas,
            info: `<hr>
                    RESULTADO DE: <b>${nomeMateria.value.toLocaleUpperCase()}</b> 
                    <ul class="list-group">
                        <li class="list-group-item"><b>1º Bimestre:</b> ${inputNotas[0]}</li>
                        <li class="list-group-item"><b>2º Bimestre:</b> ${inputNotas[1]}</li>
                        <li class="list-group-item"><b>3º Bimestre:</b> ${inputNotas[2]}</li>
                        <li class="list-group-item"><b>4º Bimestre:</b> ${inputNotas[3]}</li>
                        <li class="list-group-item">TOTAL FINAL: <b>${totalNotas}</b></li>
                        <li class="list-group-item">STATUS: <b>${isAprovadoOuReprovado(totalNotas)}</b></li>
                    </ul>
                    `
        }
    )

    console.log(materias)

    materias.forEach(e => {
        resultados += `<br>` + e.info;
    })

    resultNotas.innerHTML = resultados;
}
function isAprovadoOuReprovado(valor) {
    if (valor >= 60) {
        return "APROVADO"
    } else {
        return "REPROVADO"
    }
}