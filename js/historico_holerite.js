var janeiro = document.getElementById("Janeiro");
janeiro.innerHTML = "R$ 1800,00";

var fevereiro = document.getElementById("Fevereiro");
fevereiro.innerHTML = "R$ 1800,00";

var marco = document.getElementById("Março");
marco.innerHTML = "R$ 1800,00";

var abril = document.getElementById("Abril");
abril.innerHTML = "R$ 1800,00";

var maio = document.getElementById("Maio");
maio.innerHTML = "R$ 1800,00";

var junho = document.getElementById("Junho");
junho.innerHTML = "R$ 1800,00";

var julho = document.getElementById("Julho");
julho.innerHTML = "R$ 1800,00";

var agosto = document.getElementById("Agosto");
agosto.innerHTML = "R$ 1800,00";

var setembro = document.getElementById("Setembro");
setembro.innerHTML = "R$ 1800,00";

var outubro = document.getElementById("Outubro");
outubro.innerHTML = "R$ 1800,00";

var novembro = document.getElementById("Novembro");
novembro.innerHTML = "R$ 1800,00";

var desembro = document.getElementById("Desembro");
desembro.innerHTML = "R$ 1700,00";

function holeriteJaneiro(){
    let modal = document.getElementById("modal");
    modal.style = "display: block"

    let sair = document.getElementById("sair");
    sair.style = "display: block";

    let modalH = document.getElementById("modal_holerite")
    modalH.style = "display: flex";

}

function sair(){
    let modal = document.getElementById("modal");
    modal.style = "display: none"

    let modalHolerite = document.getElementById("modal_holerite");
    modalHolerite.style = "display: none";

}