let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {	
	var pacientes = document.querySelectorAll(".paciente");
	var nomeProcurar = this.value;

	if (nomeProcurar.length > 0) {

		pacientes.forEach(function(paciente) {

			var nome = paciente.querySelector(".info-nome").textContent;
			var expressao = new RegExp(nomeProcurar, "i"); //case-insensitive

			if(expressao.test(nome)) {
				paciente.classList.remove("invisivel");
			} else {
				paciente.classList.add("invisivel");
			}
		});
	} else {
		pacientes.forEach(function(paciente) {
			paciente.classList.remove("invisivel");
		});
	}
});