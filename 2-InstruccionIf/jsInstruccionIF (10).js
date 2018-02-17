function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroRandom=Math.floor((Math.random() * 10) + 1);
	
	//Perfecto
	if(numeroRandom > 8)
	{
		alert("Excelente "+ numeroRandom);
	}
	else
	{
		if(numeroRandom > 3)
		{
			alert("Aprobo "+ numeroRandom);
		}
		else
		{
			alert("Next "+numeroRandom);
		}//if(numeroRandom > 3)
	}//if(numeroRandom > 8)

	/* Casi bien
	if(numeroRandom > 8)
	{
		alert("Excelente"+ numeroRandom);
	}
	if(numeroRandom < 8 && > 3)
	{
		alert("Aprobo"+ numeroRandom);
	}
	if(numeroRandom < 4)
	{
		alert("Next"+ numeroRandom);
	}
	*/

}//FIN DE LA FUNCIÓN