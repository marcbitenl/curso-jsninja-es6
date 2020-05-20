class ListaConvidados {
    constructor(){
        this.convidados = [];
    }

    adcionar(nome, idade, cpf) { 
        this.convidados.push({nome: nome, idade: idade, cpf: cpf});
        console.log(this.convidados);
    }

    listarConvidados() {
        console.log(this.convidados);
    }
}

var listaConv = new ListaConvidados();


document.getElementById("adcionar").onclick = function() {
    var nome = document.getElementById("nome").value;
    listaConv.adcionar(nome,37,"123456789");
};
document.getElementById("listar").onclick = function() {
    listaConv.listarConvidados();
};

