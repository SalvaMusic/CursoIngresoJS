function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var producto;
	var resta;
	var suma;

	numeroUno=prompt("Ingrese el primer numero");
	numeroDos=prompt("Ingrese el segundo numero");

	if(numeroUno==numeroDos)
	{
		producto=numeroUno*numeroDos;
		document.write("El resultado de la multiplicación es: "+producto);
	}
	else
	{
		if ( numeroUno>numeroDos)
		{
			resta=numeroUno-numeroDos;
			document.write("El resultado de la resta es: "+resta);
		}
		else
		{
			numeroUno=parseInt(numeroUno);
			numeroDos=parseInt(numeroDos);
			suma=numeroUno+numeroDos;
			document.write("El resultado de la suma es: "+suma);
		}
	}
	
}
