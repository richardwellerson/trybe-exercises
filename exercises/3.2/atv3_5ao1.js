let n = 5;
let listaAdicionar = [];
let x = 4

for( i = 0; i < n; i++) {
    listaAdicionar.push(" ")
}

for ( i = 0; i < n; i++) {
    listaAdicionar[x] = "*"
    let listaSemCharSep = listaAdicionar.join("")
    console.log(listaSemCharSep);
    x-=1
}