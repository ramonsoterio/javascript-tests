var botaoBuscar = document.querySelector("#buscar-paciente");

botaoBuscar.addEventListener("click", function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

	//evento em que a requisição termina e a resposta é carregada
	xhr.addEventListener("load", function() {

		if(xhr.status == 200) {
			document.querySelector("#erro-ajax").classList.add("invisivel");

			var resposta = xhr.responseText;
			console.log(typeof resposta); //string

			var pacientes = JSON.parse(resposta);
			console.log(typeof pacientes); //object

			pacientes.forEach(function(paciente) {
				adicionaPacienteNaTabela(paciente);
			});
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);

			document.querySelector("#erro-ajax").classList.remove("invisivel");
			
		}
			
	});

		xhr.send();
			
});
