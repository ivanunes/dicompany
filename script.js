function botao(botao){
    let head = document.getElementsByTagName("header")[0];
    head.style.height = "280px";
    
    let menu = document.getElementById("menu");
    menu.style.display = "block";

    botao.style.display = "none";
    
    let botao2 = document.getElementById("button2");
    botao2.style.display = "block";
}

function botao2(botao2){
    console.log("oi")
    let head = document.getElementsByTagName("header")[0];
    head.style.height = "80px";

    let menu = document.getElementById("menu");
    menu.style.display = "none";

    botao2.style.display = "none";

    let botao = document.getElementById("button");
    botao.style.display = "block";
}