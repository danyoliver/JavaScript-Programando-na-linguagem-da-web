var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    // var alvoEvento = event.target;        
    // var paiDoAlvo  = alvoEvento.parentNode; // TR = paciente = remover

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    if (event.target.tagName == 'TD') {
        event.target.parentNode.remove()
    }
    },500);
})
