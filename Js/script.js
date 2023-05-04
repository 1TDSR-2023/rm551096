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

let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

botao.addEventListener("click",function(){ 
    //console.log(this.textContent);
    //Função matemática Math
    //randon = Retorna um numero aleatorio entre 0 e 1 . Ex: 0.2282632765;
    //floor = Ela arredonda o numero para baixo.
    //ceil = Ela arredonda um numero para cima.
    //round = Ela arredonda um numero aleatoriamente.
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

