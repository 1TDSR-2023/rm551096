//console.log("Alo Mundo!!");

//var nome1 = "Petroni";
//let nome2 = "Derick";
//const nome3 = "Ruan";

//nome

//if(nome1 == "") {
//var nome1 = "Geovana";
   
//if(nome1 != ""){
    //let nome1 = "Geovana"
//}
//}

//console.log(nome1);

let botao = document.getElementById("click");
console.log(botao.textContent);

botao.addEventListener("click",function(){ 


    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

} );

//Estudar
//querySelector
//querySelectorAll
//Array
//Estrutura de repetição

