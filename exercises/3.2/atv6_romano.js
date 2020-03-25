let valorRomano = "IXC";
let separado = valorRomano.split("");
let array = [];
let contador = 0;
let valorExibir = 0;
let romanos = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

for (let key of separado) {
    array[contador] = romanos[key];
    contador++    
}
for (let contagem = 0; contagem < array.length; contagem++) {
    if (array[contagem] < array[contagem + 1]) {
        array[contagem + 1] = array[contagem] - array[contagem + 1];
    }else{
        valorExibir += array[contagem];
    }
}

if (valorExibir < 0){
    console.log("O Algarismo romano "+valorRomano + " é equivalente a " + valorExibir *-1 )
} else if (valorExibir > 1){
    console.log("O Algarismo romano "+valorRomano + " é equivalente a " + valorExibir)
} else {
    console.log("Digite um algarismo romano válido!")
}

console.log(array)