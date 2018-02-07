/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	//definir variables
	var resultado;
	var numeroUno;
	var numeroDos;
	//tomar datos
	numeroUno=document.getElementById('numeroUno').value;
	numeroDos=document.getElementById('numeroDos').value;
	//transformar, parsear
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	//operar
	resultado=numeroUno+numeroDos;
	//mostrar
	alert(resultado);
}

