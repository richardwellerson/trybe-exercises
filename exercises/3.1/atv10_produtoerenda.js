custoProduto = 15.47
porcentagemLucroProd = 0.5
valorVenda = (custoProduto+(custoProduto*porcentagemLucroProd))
quantidadeVenda = 1000
custoRealProduto = (custoProduto+(custoProduto*0.2))
custoTotalProduto = (custoRealProduto * quantidadeVenda)
vendaTotal = (valorVenda * quantidadeVenda)
lucroTotal = (vendaTotal - custoTotalProduto)

if(custoProduto > 0){
    console.log("O lucro total foi de R$ "+lucroTotal+",00.")    
} else {
    console.log("O valor não pode ser igual a zero.")
}
