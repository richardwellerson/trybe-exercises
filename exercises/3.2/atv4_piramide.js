let n = 5;
let listaAdicionar = [];
let x = 4
let y = 4
let listaSemCharSep;

for( i = 0; i < n; i++) {
    listaAdicionar.push(" ")
}

for ( i = 0; i < n; i) {
    listaAdicionar[x++] = "*"
    listaAdicionar[y--] = "*"
    let listaSemCharSep = listaAdicionar.join("")
    console.log(listaSemCharSep);
    i += 2
}