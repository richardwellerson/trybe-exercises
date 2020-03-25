let inserirCores = document.getElementsByClassName("circle") // Recebe os dados da class
let randomValueArrayText = Math.floor(Math.random() * 6) //Calcula um número aleatório para o array ser aleatório por completo
let showText = [] // Recebe um array completo do RGB.

for(i = 0; i < inserirCores.length; i++){
    let r = Math.floor(Math.random() * 256); //Define o random de Red
    let g = Math.floor(Math.random() * 256); //Define o random de Green
    let b = Math.floor(Math.random() * 256); //Define o random de Blue
    let coresAleatorias = "rgb("+r+", "+g+", "+b+")"; // Cria uma string completa que recebe os valores de RGB.
    inserirCores[i].style.backgroundColor = coresAleatorias;
    showText.push(coresAleatorias) //Insere a string no array de acordo com o valor do índice.
}

let corDoJogo = (showText[randomValueArrayText]) //Define o valor do game.
document.getElementById("randomcolor").innerHTML = corDoJogo; //Imprime o valor do game no HTML.

tagsRecebidas = document.getElementsByTagName("span")

function verificarValor(corDoJogo,corClicada){
    if(corDoJogo == corClicada){
        document.getElementById("resultado").innerHTML = "Certin!"
    } else {
        document.getElementById("resultado").innerHTML = "Cor Incorreta!"
    }
}

for(let a = 0; a < tagsRecebidas.length; a++){
    tagsRecebidas[a].addEventListener("click", function(){
    verificarValor(corDoJogo,tagsRecebidas[a].style.backgroundColor)        
    })
}


//Codes deixados para re-análise:

// for(i of tagsRecebidas){
//     i.addEventListener("click", function(){
//     verificarValor(corDoJogo,i.style.backgroundColor)
//     })
//  }

// console.log(tagsRecebidas)
// for(i of tagsRecebidas){
//     let array = []
//     array.push (i)
//     i.addEventListener("click", function(){
//     return array.indexOf(i);
// })
// console.log(array.indexOf(i));
// }