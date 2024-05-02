function perguntaidade(){
    var idade= prompt("qual a sua idade?");
    alert("A sua idade é "+ idade)
}

function mudaBackground(){
    document.getElementsByTagName("body")[0].style.
    backgroundColor="red";

    var novoelemto= document.createElement("h2");
    novoelemto.innerHTML="vermelho"
}