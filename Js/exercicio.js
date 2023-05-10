let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

botao.addEventListener("click",function(){ 


    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

} );

function adicionarContato() {

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    let novoItem = document.createElement("li");
    let spanNome = document.createElement("span");
    let spanEmail = document.createElement("span");
    spanNome.textContent = nome;
    spanEmail.textContent = email;
    novoItem.appendChild(spanNome);
    novoItem.appendChild(document.createTextNode(" - "));
    novoItem.appendChild(spanEmail);

    let lista = document.getElementById("listaContatos");
    lista.appendChild(novoItem);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
}

let btn_trocar = document.getElementById("btn-trocar");

    btn_trocar.addEventListener("click",function() {
        let img = document.querySelector("#imagem_lobo")

        if (img.getAttribute("src") == './img/img2.jpg') {
            let img = document.querySelector("#imagem_lobo")
            img.setAttribute('src', './img/img3.jpg');
        }
         else {
            let img = document.querySelector("#imagem_lobo")
            img.setAttribute('src', './img/img4.jpg');
         };
    });

function exibirMensagem() {
    let elemento = document.getElementById("exibirMensagem");
    elemento.innerHTML = "O lobo está apreciando a vista.";
    elemento.style.display = "block";
}

function ocultarElemento() {
    let paragrafo = document.getElementById("ocultarElemento");
    if (paragrafo.style.display === "none") {
        paragrafo.style.display = "block";
    } else {
        paragrafo.style.display = "none";
    }
}



