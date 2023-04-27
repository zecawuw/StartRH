function logar(){

    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        location.href = "home_funcionario.html"
    }else{
        alert("Usúario ou Senha incorretos")
    }



}