var texto1 = "olá IOS"
var resultado1 = texto1.charAt(6)
console.log("Qual a squinta letra do texto?");
console.log(resultado1);

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut nisl molestie elit eleifend lobortis. Suspendisse nec ornare dui, vel volutpat orci. Quisque cursus dolor eget pellentesque pulvinar."

//tamanho String
console.log("Quantos caracteres tem o texto lorem?");
console.log(lorem.length);

//Maiusculas e minusculas
console.log("Texto em maiúsculo");
console.log(texto1.toUpperCase());

console.log("Texto em minúsculo");
console.log(texto1.toLowerCase());

//Substring
console.log("Fazendo substring no lorem 01");
console.log(lorem.substring(1,3));

console.log("Fazendo substring no lorem 02");
console.log(lorem.substring(10, 36));

//Replace
console.log("Mensagem Original:");
var mensagem1 = "Venha para a Microsoft!"
console.log(mensagem1);

console.log("Mensagem com Replace:");
mensagem1 = mensagem1.replace("Microsoft", "IOS")
console.log(mensagem1);

//Remover pedaços (Trim)
console.log("Texto antes do Trim:");
var txt1 = "    Olá alunos do IOS!    "
console.log(txt1);

console.log("Texto após o Trim:");
console.log(txt1.trim());
