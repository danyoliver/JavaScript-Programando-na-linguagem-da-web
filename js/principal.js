var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

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
	tdImc.textContent = "Peso inválido!";
}

if(altura <= 0 || altura >= 3.00){
	console.log("Altura inválida!")
	alturaEhValido = false;
	tdImc.textContent = "Altura inválida!";
}

if(pesoEhValido && alturaEhValido){
	var imc = peso / (altura * altura);		
	tbimc.textContent = imc;
}