var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event) {
	//-- qual filho foi clicado (alvo do evento). evento no table mas clicado no filho do table.
	console.log(event.target);
	
	var alvoEvento = event.target;
	var paiDoAlvo = alvoEvento.parentNode;

	paiDoAlvo.classList.add("fadeOut");	
	//-- pausa execução por 500 milli
	setTimeout(function() {
		paiDoAlvo.remove();
	}, 500);
});

/* pacientes.forEach(function(paciente) {
	paciente.addEventListener("dblclick", function() {
		this.remove();
	});
}); */