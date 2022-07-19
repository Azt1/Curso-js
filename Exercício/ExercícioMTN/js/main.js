function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia
        document.body.style.background = '#FFD700'
        img.src = 'manha.jpg'
    }else if (hora >= 12 && hora <= 18){
        // Boa Tarde
        document.body.style.background = '#FF4500'
        img.src = 'tarde.jpg'
     }else {
         // Boa Noite
        document.body.style.background = '#120a8f'
        img.src = 'noite.jpg'
     }
}