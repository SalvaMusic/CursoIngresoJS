function Mostrar()
{

	var numero;
	numero = prompt("ingrese un número entre 0 y 10.");


	while(numero < 0 || numero > 10)
	{
		numero = prompt("ingrese un número entre 0 y 10.");
	}

	alert("Muchas Gracias");


}//FIN DE LA FUNCIÓN