const form = document.getElementById("form-contato");
const contatos = [];

let linhas = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNomeContato = document.getElementById("nome-contato");
    const inputNumContato = document.getElementById("num-contato");

    if(contatos.includes(inputNomeContato.value)) {
        alert(`O contato de ${inputNomeContato.value} já foi inserido.`)
    } else {
        contatos.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumContato.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeContato.value ='';
    inputNumContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
