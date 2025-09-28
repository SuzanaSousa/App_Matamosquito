 var altura =  0
 var largura = 0
 var vidas = 1
 var tempo = 15

 var criaMosquitoTempo = 1500
 
 var nivel = window.location.search

 alert(nivel.replace('?', ''))

 if(nivel === '?normal'){
  //1500
    }else if(nivel  === '?dificil'){
        criaMosquitoTempo = 1000
    //1000
    }else if(nivel === '?chucknorris'){
        criaMosquitoTempo = 750
    //750
    }

function ajustaTamanhoPalcoJogo(){
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
    tempo -=1

    if( tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html?" + nivel

    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000);
// --- FUNÇÃO DE POSIÇÃO RANDOMICA ---
function posicaoRandomica() {

    //remover o mosquito anterior (caso exista)
    if( document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

         // Lógica de Vidas
        if(vidas > 3){
                window.location.href = "fim_de_jogo.html"
            }else{
              document.getElementById('v' + vidas).src = "img/coracao_vazio.png"

              vidas ++
        }

    }
         // Calcula posição com base nas dimensões globais (agora atualizadas)
        var posicaoX = Math.floor(Math.random() * largura) - 90
        var posicaoY = Math.floor(Math.random() * altura) - 90

        posicaoX = posicaoX < 0 ? 0 : posicaoX
        posicaoY = posicaoY < 0 ? 0 : posicaoY

       
          // console.log(posicaoX, posicaoY) // Útil para debug   

        //criar elemento html (o mosquito)
        var mosquito = document.createElement('img')
        mosquito.src = './img/mosquito.png' // Corrigi o caminho para 'img/mosquito.png'
        document.body.appendChild(mosquito)
        mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //valor retonado pelo chamado da função sera atribuido como a classe do html
        mosquito.style.left = posicaoX + 'px'
        mosquito.style.top = posicaoY + 'px'
        mosquito.style.position = 'absolute'
        mosquito.id = 'mosquito'

         // Adiciona a função de clique para remover o mosquito
        mosquito.onclick = function()  {
           this.remove()//this faz o proprio elemento da função
        }

        document.body.appendChild(mosquito)
       /*  tamanhoAleatorio()
         */
}
// --- FUNÇÕES AUXILIARES ---
function tamanhoAleatorio() {
    
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }

}







