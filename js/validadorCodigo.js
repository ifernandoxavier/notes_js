function carregaCod() {
	if (bloqueiaCod() == -1) {
		alert("Código inválido!");
		document.getElementById('COD').value = '';
		document.getElementById('COD').focus();
	} else if (validaTamanhoCod() == -2) {
		alert("TAMANHO EXCEDIDO");
	} else {
		if (document.getElementById('COD').value != '') {
			alert("Código inserido");
			document.getElementById('COD').value == '';
		} else {
			alert("CAMPO CÓDIGO OBRIGATÓRIO")
			document.getElementById('COD').focus();
		}
	}
}

function bloqueiaCod() {
	let codInvalidos = ["9999", "0000"];
	for (let i = 0; i <= codInvalidos.length; i++) {
		// console.log(codInvalidos[i])
		if (codInvalidos[i] == document.getElementById('COD').value) {
			return -1;
		}
	}
}

function validaTamanhoCod() {
	let tamanhoLimite = 4;
	let cod = document.getElementById('COD').value;
	if (cod.length > tamanhoLimite) {
		return -2;
	}
}
