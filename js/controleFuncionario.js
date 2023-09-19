function dadosFuncionarios(){
    let modal = document.getElementById("modal");
    modal.style = "display: block";
    
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