//teste de concatenação 1
var num1 = 4
var num2 = 4
var txt = "resultado da conta:"
var resultado = num1 + num2
console.log(txt, resultado);


//teste de concatenação 2
var nascimento = 1979
var ano = 2025
var let = "Sua idade:"
var total = ano - nascimento
console.log(let, total);

//testando infinity
var infi = Infinity
var um = 1
var tots = infi - um
console.log(tots);

//Template Sting
var aln1 = "João"
var aln2 = "Roberto"
var din = "R$1200.00"
console.log(`Aluno ${aln1} e Aluno ${aln2} tem um total de ${din}`);

//Operador aritmético
var valor1 = 5
var valor2 = 5
console.log(valor1 + valor2 * valor1);

//operador de comparação
console.log(5 == 5);
console.log(5 === "5");

console.log(22 < 8);
console.log(20 > 8);

console.log(10 >= 10);
console.log(4 <= 3);

console.log(15 != 15.0);
console.log("ana" == "Ana");

console.clear()

//operador lógico
let temcamisa = false
let temcracha = true
var frase = "Você entra no IOS? usando &&"
var frase1 = "Você entra no IOS? usando ||"
var frase2 = "Você entra no IOS? usando !"

console.log("Tem camiseta?", temcamisa);
console.log("Tem Crachá?", temcracha);

console.log(frase);
console.log(temcamisa== true && temcracha == true);
console.log(frase1);
console.log(temcamisa == true || temcracha == true);
console.log(frase2);
console.log (!(temcamisa == true));

//operador de atribuição
var x = 3
var y = 2
x += y 

console.log("Qual o valor de X?");
console.log(x)

y *= x
x /= y

console.log("Qual o valor de Y?");
console.log(y);

console.log("Qual o valor de X agora?");
console.log(x);

console.warn("Você não deveria estar vendo isso")
console.error("Você realmente não deveria estar vendo isso")
