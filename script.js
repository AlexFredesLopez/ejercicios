

function saveUser(e){
    e.preventDefault();
    console.log("saveUser")

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if(username === "" || password === ""){
        alert("Por favor ingrese todos los campos");
        return false;
    }

    if(username === 'alex' && password === '123'){

        // pintar un mensaje en el html con el login ok
        document.getElementById("mensajeOkError").innerText = "Login OK";
        document.getElementById("mensajeOkError").style.color = "green";
    }else{

        // voy a pintar el mismo mensaje pero de error
        document.getElementById("mensajeOkError").innerText = "Error al ingresar, no sea pavito, intente de nuevo";
        document.getElementById("mensajeOkError").style.color = "red";
    }
}