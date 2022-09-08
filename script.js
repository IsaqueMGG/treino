var ladoA = document.getElementById('a'); 
var ladoB = document.getElementById('bala');
var resultado = document.getElementById('resultado');

function pericles(){
    let a = parseInt(ladoA.value)
    let b = parseInt(ladoB.value)

    resultado.innerText = "o valor do C é igual a "+(a**2+b**2); 
}