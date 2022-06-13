function carregar(){
let msg = window.document.getElementById("msg");
let img = window.document.getElementById("imagem");

let data = new Date();
let hora = data.getHours();
let minuto = data.getMinutes();
let ano = data.getFullYear();

msg.innerHTML =`Agora são ${hora} horas e ${minuto} minutos do ano ${ano}`

    if(hora >= 0 && hora < 12){
        //bomdia
        img.src = "fotomanha.jpg"
        document.body.style.background = "rgba(59, 120, 233, 0.63)"
    }else if(hora >= 12 && hora <= 18){
        //boatarde
        img.src = "fototarde.jpg"
        document.body.style.background = "rgba(39, 58, 73, 0.979)"
    }else{
        //boanoite
        img.src = "fotonoite.jpg"
        document.body.style.background = "rgba(8, 34, 51, 0.979)"
    }//fim do if
}//fim da função carregar