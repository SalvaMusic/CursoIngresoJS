function Mostrar()
{
	var clave;
	
	clave = prompt("ingrese el número clave.");

	while(clave != "utn750")
	{
		alert("Clave incorrecta");
		clave = prompt("ingrese el número clave.");
	}

	alert("bienvenido");
}//FIN DE LA FUNCIÓN
