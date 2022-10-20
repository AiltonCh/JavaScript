function carregar (){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/nascer-do-sol.jpg'
        document.body.style.background = "#E59158"
        
    }else if (hora >=12 && hora < 18) {
        img.src = 'imagens/por-do-sol.jpg'
        document.body.style.background = "#0D4963"
    }else {
        img.src = 'imagens/anoitecer.jpg'
        document.body.style.background = "#403D70"
    }
}


