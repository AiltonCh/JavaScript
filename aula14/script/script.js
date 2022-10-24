function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.querySelector("div#res")
    var img = document.getElementById("img")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ("[ERROR] Verifique os dados e tente novamente!") }else {
            var fsex = document.getElementsByName ('txtsexo')
            var idade = ano - Number(fano.value)
            var gênero = ''
            
            if (fsex [0].checked){
                gênero = " um Homem"
                if(idade >= 0 && idade < 10){
                    img.src = 'imagens/idade-bebe-h.jpg'
                }else if (idade <21){
                    
                }else if (idade < 50){

                }else {

                }
            } else if (fsex[1].checked) {
                gênero = " uma Mulher"
                if(idade >= 0 && idade < 10){
                    img.src = 'imagens/idade-bebe-m.jpg'
                }else if (idade <21){

                }else if (idade < 50){

                }else {
                    
                }
            }
            res.innerHTML = `Detectamos  ${gênero} com ${idade} anos`
            img.innerHTML = img
        }

}