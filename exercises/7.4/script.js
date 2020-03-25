let divReceiveCards = document.querySelector(".receive-deck")
let initialDeck = document.querySelector(".deck")

function insertCard (){
    initialDeck.addEventListener("click", function(){
        let generateCard = document.createElement("span")
        divReceiveCards.appendChild(generateCard);
    })
}

insertCard()
