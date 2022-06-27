let num
let contagem = 0
botao = document.getElementById("MeuBotao")
botao.onclick = function() {
    num = document.getElementById("quantidade").value;
    while(contagem <= num) {
        console.log(contagem)
        contagem += 1
    }

    do {
        console.log(contagem)
        contagem -= 1
    } while(contagem >= 0)

}   

