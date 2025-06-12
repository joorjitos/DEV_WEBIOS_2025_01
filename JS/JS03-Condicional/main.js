let AtividadeEntregue = true
let DiaFinal = 15
let mensagem = "Parabéns, não fez mais que sua obrigação!"

if(AtividadeEntregue == true){
    console.log(mensagem);
    if(DiaFinal <= 13){
        console.log("Entregou a atividade na data e sua nota é 10!");
    }
    else{
        console.log("Entregou a atividade fora da data e será retirado 2 pontos");
    }
}
else if(AtividadeEntregue == false){
console.log("Ta moscando ein!");
}
else{
    console.log("Me pegou de surpresa! Não sei o que quis dizer");
}