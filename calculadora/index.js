//agreagar al codigo (un enlace) al main.js
const rq = require('electron-require');
const main = rq.remote('./main.js');

var botonesNumero = ["btn00","btn01","btn02","btn03","btn04","btn05","btn06","btn07","btn08","btn09"];
var botonesOperador = ["btnSumar","btnRestar","btnMultiplicar","btnDividir"];

function numeros(){
	alert(this.id);
	alert(this.value);
}
function operadores(){

}
function igual(){

}
function borrar(){

}

//asignacion de eventos a los botones de número
for (var i = 0; i < botonoesNumero.length; i++) {
	document.getElementByID(botonesNumero[i]).addEventListener('click',numeros);
}

//asignacion de eventos a los botones de operador
for (var i = 0; i < botonoesOperador.length; i++) {
	document.getElementByID(botonesOperador[i]).addEventListener('click',operadores);
}

//evento click del boton igual
document.getElementByID("btnIgual").addEventListener('click',igual);

//evento click del boton CE
document.getElementByID("btnCE").addEventListener('click',borrar);

