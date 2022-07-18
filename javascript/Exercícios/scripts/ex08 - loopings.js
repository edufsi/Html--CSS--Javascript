botao = document.getElementById("MeuBotao")
botao.onclick = function() {
    num = document.getElementById("quantidade").value;
    
    /* while(condicao) {
        execute algo
        execute algo para fazer a condição ser atendida
    } 
    */
    var contagem = 0
    while(contagem <= num) {
        console.log(contagem)
        contagem += 1
    }


    /* do {
        execute algo
        execute algo para fazer a condição ser atendida
    } while(condição) {
    */
    var contagem = 0
    do {
        console.log(contagem)
        contagem += 1
    } while(contagem <= num)


    /* for(variável de inicialização;condição;passo) {
        execute algo
    }
    */
    for (i=0; i<=num; i++) {
        console.log(i)
    }



}