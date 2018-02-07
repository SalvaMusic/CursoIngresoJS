function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;

	if(!(edad>12 && edad<17))
	{
		alert("No es un adolecente");
	}
/* hace exactamente lo mismo y es correcto pero queda espacio en blanco
	if(edad>12 && edad<17)
	{
	
	}
	else
	{
		alert("No es un adolecente")
	}
*/

}//FIN DE LA FUNCIÓN