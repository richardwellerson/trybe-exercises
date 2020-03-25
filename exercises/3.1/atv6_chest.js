chest = "Dama";

switch (chest) {
    case "Peão":
        console.log("O " + chest + ": Primeira jogada permite duas casas a frente, anda uma casa e captura nas diagonais.");
        break;

    case "Dama":
        console.log("A " + chest + ": Move-se e captura em qualquer direção.");
        break;

    case "Bispo":
        console.log("O " + chest + ": Move-se e captura em diagonal")
        break;

    case "Cavalo":
        console.log("O " + chest + ": Move-se em L. Três casas em linha reta, outra em lateral. Captura apenas no último movimento.")
        break;

    case "torre":
        console.log("A " + chest + ": Move-se e captura em linha reta.")
        break;

    case "rei":
        console.log("O " + chest + ": Move-se e captura em qualquer lado, mas apenas uma casa.")
        break;

    default:
        console.log(chest + " não é uma peça de Xadrez!")
}