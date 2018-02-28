//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/* ingresar dos numeros. 
	si son iguales se concatenan.
	si el primero es ayor que el segundo se multiplican.
	si el segundo es mas grande se restan.
	si la multiplicacion da un numero par, ademas de mostrar el resultado, se muestra el mensaje "es par".
	alert("Funciona 4-if");*/

	var numeroUno=prompt("Ingrese el primer número");
	var numeroDos=prompt("Ingrese el segundo número");
	var resultadoConcatenado;
	var resultadoMultiplicado;
	var resultadoResta;
	var multiplicacionPar;

	

	if(numeroUno == numeroDos)
	{
		resultadoConcatenado=numeroUno+numeroDos;
		alert("La concatenacion es: "+resultadoConcatenado);
	}
	else
	{
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);
		if(numeroUno>numeroDos)
		{
			resultadoMultiplicado=numeroUno*numeroDos;
			if(resultadoMultiplicado%2==0)
			{
				alert("La multiplicacion es: "+resultadoMultiplicado+" es par");
			}
			else
			{
				alert("La multiplicacion es: "+resultadoMultiplicado);
			}

		}
		else
		{
			resultadoResta=numeroUno-numeroDos;
			alert("La resta es: "+resultadoResta);
		}
	}//if(numeroUno == numeroDos)
}

