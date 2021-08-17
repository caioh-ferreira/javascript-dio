alert("meu primeiro JavaScript");

var nome = "caio";
var frase = "Scooby é legal";

/*alert("Bem vindo, " + nome.toUpperCase());

console.log(frase.replace("Scooby","Caio"));

*/

var lista = ["maçã", "pera", "uva"];
var fruta = {nome:"maçã", cor:"vermelha"};
var frutas = {nome:"maçã", cor:"vermelha"};

/*console.log(lista.toString()); -> perde a impressão de estar em em um array, é transformado em uma string
console.log(lista.toString()[0]); -> imprime a primeira letra presente no array
console.log(lista[0]); -> imprime o primeiro item presente no array
console.log(lista.join(" | ")); -> adiciona " | " a cada intervalo nos itens presentes no array
console.log(fruta.cor);
console.log(frutas[1].nome);
*/

var idade = prompt("Qual é a sua idade?"); // abre uma caixa de perguntas

/*

if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};

*/

var count = 0;

/*
while(count <= 5){
    console.log(count);
    count = count ++;
};

for(count = 0; count <= 5; count++){
    console.log(count);
};
*/

var d = new Date();

/*
alert(d);
*/

function soma(n1, n2){
    return n1 + n2;
}

/*

alert(soma(10,10));

*/

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

/*

alert(setReplace("Vai Japão", "Japão", "Brasil"));

*/

function validaIdade(idade){

    var validar;

    if(idade >= 18){
        validar = true;
    }else{
        validar = false
    }

    return validar;
}

/*

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));

*/

function clicou(){
    //alert("Você pressionou o botão");
    //document.getElementById("agradecimento");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por confirmar a sua inscrição.</b>";
}

function redirecionar(){
    //window.open("https://wwww.google.com");
    //windows.location.href = "https://www.google.com";
}

function passouMouse(){
    alert("Passou o mouse");
    // ou document.getElementById("mouse-move").innerHTML = "O mouse foi passado aqui.";
}

function load(){
    console.log("A página foi carregada.");
}