let num1 = Math.floor(Math.random()*10+1);
let num2 = Math.floor(Math.random()*10+1);

document.getElementById("numText1").value = num1;
document.getElementById("numText2").value = num2;

let result= num1 * num2;

function Game(){
    var user= document.getElementById("answer").value;

    if( user == result){
    document.getElementById("ans").innerHTML = "Parabéns! Você acertou 🥳. Resolva a próxima conta acima!";
    } else{
        document.getElementById("ans").innerHTML = "Resposta errada, o resultado correto de " + num1 + " x " + num2 + " era " + result + ". Continue tentando e resolva a próxima operação 😊";
    }

    var user= document.getElementById("answer").value = "";

num1 = Math.floor(Math.random()*10+1);
num2 = Math.floor(Math.random()*10+1);

document.getElementById("numText1").value = num1;
document.getElementById("numText2").value = num2;

result = num1 * num2;
}