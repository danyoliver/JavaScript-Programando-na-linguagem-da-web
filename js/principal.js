var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tbPeso = paciente.querySelector(".info-peso");
	var peso = tbPeso.textContent;
	
	var tbaltura = paciente.querySelector(".info-altura");
	var altura = tbaltura.textContent;
	
	var tbImc = paciente.querySelector(".info-imc");
	
	var pesoEhValido = true;
	var alturaEhValido = true;
	
	if(peso <= 0 || peso >= 1000){
		console.log("Peso inválido!")
		pesoEhValido = false;
		tbImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}
	
	if(altura <= 0 || altura >= 3.00){
		console.log("Altura inválida!")
		alturaEhValido = false;
		tdImc.textContent = "Altura inválida!";
		paciente.classList.add("paciente-invalido");
	}
	
	if(pesoEhValido && alturaEhValido){
		var imc = peso / (altura * altura);		
		tbImc.textContent = imc.toFixed(2);
	}

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});