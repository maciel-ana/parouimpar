let inteiro = document.getElementById('inteiro');

function parouimpar(){
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = document.getElementById("resultado");

    if(isNaN(numero)){
        resultado.innerHTML = "digite um valor inteiro.";
        return;
    }

    if(numero % 2 === 0){
        resultado.innerHTML = "o número é Par.";
    } else {
        resultado.innerHTML = "o número é Impar";
    }
}   
