salario = 10000
aliq8 = 0.08
aliq9 = 0.09
aliq11 = 0.11
aliqMax = 570.88
inssAliq8 = (salario - (salario * 0.08))
inssAliq9 = (salario - (salario * 0.09))
inssAliq11 = (salario - (salario * 0.11))
inssAliqMax = (salario - 570.88)
irrf0 = salario
irrf7 = (salario - (salario * 0.075) + 142.8)
irrf15 = (salario - (salario * 0.15) + 354.8)
irrf225 = (salario - (salario * 0.225) + 636.13)
irrf275 = (salario - (salario * 0.275) + 869.36)

// Cálculo valor desconto INSS.
if (salario < 1556.94){
    salarioINSS = inssAliq8
} else if (salario >= 1566.95 && salario <= 2594.92) {
    salarioINSS = inssAliq9
} else if (salario >= 2594.93 && salario <= 5189.82) {
    salarioINSS = inssAliq11
} else if (salario > 5189.82) {
    salarioINSS = inssAliqMax
}

// Cálculo valor desconto IRRF.
if (salario <= 1903.88) {
    salarioIRRF = irrf0
} else if (salario >= 1903.89 && salario <= 2826.65) {
    salarioIRRF = irrf7
} else if (salario >= 2826.66 && salario <= 3751.05) {
    salarioIRRF = irrf15
} else if (salario >= 3751.06 && salario <= 4664.68) {
    salarioIRRF = irrf225
} else if (salario >= 4664.69) {
    salarioIRRF = irrf275
}

descontoINSS = (salario - salarioINSS)
descontoINSSarred = parseFloat(descontoINSS.toFixed(2))

descontoIRRF = (salario - salarioIRRF)
descontoIRRFarred = parseFloat(descontoIRRF.toFixed(2))

salarioLiquido = salario - descontoIRRF - descontoINSS
salarioLiquidoArredondado = parseFloat(salarioLiquido.toFixed(2))

if (salarioLiquido > 0) {
    console.log("O desconto do seu INSS foi de "+descontoINSSarred+".\n");
    console.log("O desconto do IRRF foi de "+descontoIRRFarred+".\n");
    console.log("Seu salário líquido é de "+(salarioLiquidoArredondado+".\n"))
} else {
    console.log("Digite um valor válido.")
}