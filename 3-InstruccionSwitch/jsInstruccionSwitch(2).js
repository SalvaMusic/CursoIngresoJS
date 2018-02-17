function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Julio" :
		case "Agosto" :
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre" :
		case "Octubre" :
		case "Noviembre" :
			alert("Ya pasamos el frío, ahora el calor!!!.")
			break;
		case "Diciembre" :
		case "Enero" :
		case "Febrero" :
		case "Marzo" :
		case "Abril" :
		case "Mayo" :
		case "Junio" :
			alert("Falta para el invierno.")
			break;
	}



}//FIN DE LA FUNCIÓN