function validar() 
{
    var usu = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usu == "Eduardo" && clave == "un4") 
    {
        window.location.href = "sistema.html";
    } 
    else 
    {
        alert("NO SOS UN USUARIO >:|");
    }
}

function limpiar() 
{
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

function afiliar() 
{
    window.location.href = "aventura.html";
}

function cotizar() {
    var acc = document.getElementById("acción").value;
    var ti = document.getElementById("tipo").value;

    if (acc == "1" && ti == "1") 
    {
        document.getElementById("resultado4").textContent = "+100 HP";
    }

    if (acc == "1" && ti == "2") 
    {
        document.getElementById("resultado4").textContent = "+50 HP";
    }

    if (acc == "1" && ti == "3") 
    {
        document.getElementById("resultado4").textContent = "+25 HP";
    }

    if (acc == "1" && ti == "4") 
    {
        document.getElementById("resultado4").textContent = "+10 HP";
    }

    if (acc == "2") 
    {
        document.getElementById("resultado4").textContent = "1d12 Contundente";
    }

    if (acc == "3" && ti == "1") 
    {
        document.getElementById("resultado4").textContent = "-1d4 del daño";
    }

    if (acc == "3" && ti == "2") 
    {
        document.getElementById("resultado4").textContent = "-1d6 del daño";
    }

    if (acc == "3" && ti == "3") 
    {
        document.getElementById("resultado4").textContent = "-1d10 del daño";
    }

    if (acc == "3" && ti == "4") 
    {
        document.getElementById("resultado4").textContent = "-1d12 del daño";
    }
}