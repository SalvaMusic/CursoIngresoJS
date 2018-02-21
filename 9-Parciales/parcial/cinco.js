function Mostrar()
{
	var dia;

	dia=prompt("Ingrese un dia de la semana");

	switch(dia)
	{
		case "sabado":
		case "domingo":
			alert("es fin de semana");
			break;
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			alert("a trabajar");
			break;
	}

}
