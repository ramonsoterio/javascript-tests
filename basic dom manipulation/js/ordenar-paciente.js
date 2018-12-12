var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {

	if(event.target.tagName == "TH") {
		var pacientes = converteTRsParaPacientes();
		
		//--Pendente
		switch(event.target.textContent) {
			case "Nome":

				tabela.querySelectorAll(".paciente").forEach(function(trAtual) {
					console.log(trAtual);
					trAtual.remove();
				});

				pacientes.forEach(function(paciente) {
					adicionaPacienteNaTabela(paciente);
				});
				break;
		}

		pacientes = pacientes.sort(dynamicSort("nome"));
		console.log(pacientes);

	}
});

function converteTRsParaPacientes() {
	var pacientesTR = tabela.querySelectorAll(".paciente");
	var pacientes = [];

	pacientesTR.forEach(function(paciente) {
		var paciente = {
			nome: paciente.querySelector(".info-nome").textContent,
			peso: paciente.querySelector(".info-peso").textContent,
			altura: paciente.querySelector(".info-altura").textContent,
			gordura: paciente.querySelector(".info-gordura").textContent,
			imc: paciente.querySelector(".info-imc").textContent
		};

		pacientes.push(paciente);
		
	});
	return pacientes;
}

function dynamicSort(property) {
	var sortOrder = 1;
	if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
	}
	return function (a,b) {
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
	}
}