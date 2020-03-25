let valorVerificar = 1481;
let numAteValorVerificar;
let contar = 0

for(x = 1; numAteValorVerificar <= valorVerificar; numAteValorVerificar++){
    if(valorVerificar % numAteValorVerificar == 0){
    contar++
    }    
}

if(contar > 2){
    console.log("Não é um número primo.")
    } else {
    console.log("É um número primo.")
    }