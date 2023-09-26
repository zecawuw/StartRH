function logar(){

    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;
    
    if(login == "funcionario" && senha == "admin"){
        location.href = "../html/home_funcionario.html"
    }else if(login == "rh" && senha == "admin"){
        location.href = "../html/home_rh.html"
    }else{
        alert("Usúario ou Senha incorretos")
    }



}
