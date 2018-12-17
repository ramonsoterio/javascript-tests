var pacientes = $$(".paciente");
var tabela = $("table");

tabela.addEventListener("dblclick", function(event) {

	if(event.target.tagName == "TH") {
		var pacientes = converteTRsParaPacientes();
		
		//--Pendente
		switch(event.target.textContent) {
			case "Nome":
				pacientes = pacientes.sort(dynamicSort("nome"));

				tabela.querySelectorAll(".paciente").forEach(function(trAtual) {
					trAtual.remove();
				});
				break;
		}

		pacientes.forEach(function(paciente) {
			adicionaPacienteNaTabela(paciente);
		});
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