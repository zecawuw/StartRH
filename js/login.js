function logar(){

    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "funcionario" && senha == "admin"){
        location.href = "home_funcionario.html"
    }else if(login == "rh" && senha == "admin"){
        location.href = "home_rh.html"
    }else{
        alert("Usúario ou Senha incorretos")
    }



}