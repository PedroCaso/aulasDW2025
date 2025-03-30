var num1 = document.getElementById('num1').value;
var num2 = document.getElementById('num2').value;
var resultado2 = document.getElementById('resultado2');

var btnSomar = document.getElementById('somar');
var btnSub = document.getElementById('sub');
var btnDiv = document.getElementById('div');
var btnMult = document.getElementById('Mult');

btnSomar.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) + parseFloat(num2))
};
btnSub.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) - parseFloat(num2))
});
btnDiv.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) / parseFloat(num2))
});
btnMult.addEventListener('click', function(){
    resultado2.innerText = "Resultado: " + (parseFloat(num1.value) * parseFloat(num2))
}));


var caculo = document.getElementById('caculo');
var resultado = document.getElementById('resultado');
var limpar = document.getElementById('limpar');
var divisao = document.getElementById('divisao');
var multiplicacao = document.getElementById('multiplicacao');
var subtracao = document.getElementById('subtracao');
var soma = document.getElementById('soma');
var igual = document.getElementById('igual');
var n9 = document.getElementById('n9');
var n8 = document.getElementById('n8');
var n7 = document.getElementById('n7');
var n6 = document.getElementById('n6');
var n5 = document.getElementById('n5');
var n4 = document.getElementById('n4');
var n3 = document.getElementById('n3');
var n2 = document.getElementById('n2');
var n1 = document.getElementById('n1');
var n0 = document.getElementById('n0');

var numero1 = null;
var numero2 = null;
var operacao = null;

n0.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n0.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n0.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n1.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n1.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n1.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n2.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n2.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n2.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n3.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n3.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n3.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n4.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n4.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n4.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n5.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n5.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n5.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n6.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n6.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n6.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n7.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n7.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n7.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n8.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n8.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n8.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

n9.addEventListener('click', function(){
    if (operacao == null){
        numero1 = numero1 + n9.textContent;
        caculo.innerText = numero1;
    }else{
        numero2 = numero2 + n9.textContent;
        caculo.innerText = numero1 + " " + operacao + " " + numero2;
    }
})

divisao.addEventListener('click', function () {
    operacao = divisao.textContent;
    caculo.innerText = numero1 + " " + operacao + " " + numero2;
})

igual.addEventListener('click', function () {
    if (operacao == "/"){
        resultado.innerText = parseFloat(numero1) / parseFloat(numero2);
    }
    else{
        resultado.innerText = "** ERRO **"
    }
})