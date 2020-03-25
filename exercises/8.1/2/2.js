const longestWord = ("Antônio foi no banheiro e não sabemos o que aconteceu")
const arrayWords = longestWord.split(" ")
let biggerWord = ""

for(let i = 0 ; i < arrayWords.length; i++){
    if(arrayWords[i].length > biggerWord.length){
        biggerWord = arrayWords[i]
    }
}

console.log(`A maior palavra do array é ${biggerWord}, que possui ${biggerWord.length} caracteres.`)
