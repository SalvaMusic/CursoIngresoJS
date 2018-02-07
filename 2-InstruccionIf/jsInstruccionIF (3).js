function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	if (edad>17)
	{
		alert("usted es mayor de edad");
	}
	else
	{
		alert("usted es menor de edad");
	}

/* Esta bien pero uso el microprocesador 2 veces
	if (edad>17)
	{
		alert("usted es mayor de edad");
	}
	if (edad<18)
	{
		alert("usted es menor de edad");
	}
*/

}//FIN DE LA FUNCIÓN