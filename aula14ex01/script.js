function contador (){
    var inicio = document.querySelector('input#ini')
    var fim = document.getElementById('fim')
    var salto = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
    var incont = Number(inicio.value)
    var ficont = Number(fim.value)
    var sacont = Number(salto.value)
    
    if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        res.innerHTML = "Impossivel Contar!"
    } else {
        res.innerHTML = "Contando: <br>"
        if (sacont <= 0){
            window.alert("Passo invalido, considernado PASSO 1")
            sacont = 1
        }
        
        if(incont < ficont){
            //contagem crescente
        for (var cont = incont; cont <= ficont; cont += sacont){
            res.innerHTML += `${cont}🪙`}
        }else {
            //contagem regressiva.
            for (var cont = incont; cont >= ficont; cont -= sacont){
                res.innerHTML += `${cont}🪙`
            }
        }
    }
}







