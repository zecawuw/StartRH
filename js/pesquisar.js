function pesquisar(){
    let input = document.getElementById('pesquisar_funcionarios').value
    let dados = document.getElementsByClassName('dados_funcionarios');
      
    for (i = 0; i < dados.length; i++) { 
        if (!dados[i].innerHTML.toLowerCase().includes(input)) {
            dados[i].style.display="none";
        }
        else {
            dados[i].style.display = "flex";                 
        } 
    }
}

