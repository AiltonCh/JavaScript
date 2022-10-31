function contador (){
    var inicio = document.querySelector('input#ini')
    var fim = document.getElementById('fim')
    var salto = document.querySelector('input#pas')
    var res = document.querySelector('div#res')
    var incont = Number(inicio.value)
    var ficont = Number(fim.value)
    var sacont = Number(salto.value)
    
    if (inicio.value.length == 0 || fim.value.length == 0 || salto.value.length == 0) {
        window.alert("[ERROR] faltam dados!")
    } else {
        res.innerHTML = "Contando:"
        
        if(incont < ficont){
        for (var cont = incont; cont <=ficont; cont += sacont){
            res.innerHTML += `${cont}🪙`}
        }
    }
}







