function Mostrar()
{

	var contador=0;
	var numero;
	var positivos=0;
	var negativos=0;
	var cantidadPositivos=0;
	var cantidadNegativos=0;
	var cantidadCeros=0;
	var cantidadPares=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivosNegativos;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		if(numero<0)
		{
			cantidadNegativos++;
			negativos=negativos+numero;
		}
		else
		{
			if(numero>0)
			{
				cantidadPositivos++;
				positivos=positivos+numero;
			}
			else
			{
				cantidadCeros++;
			}
		}
		if(numero%2==0)
		{
			cantidadPares++;
		}

		respuesta=prompt("No ingrese 'no' para continuar")
	}
	promedioPositivos=positivos/cantidadPositivos;
	promedioNegativos=negativos/cantidadNegativos;
	diferenciaPositivosNegativos=positivos-negativos;

	document.write("<br>Suma de los positivos: "+positivos);
	document.write("<br>Suma de los negativos: "+negativos);
	document.write("<br>Cantidad de positivos: "+cantidadPositivos);
	document.write("<br>Cantidad de negativos: "+cantidadNegativos);
	document.write("<br>Cantidad de Ceros: "+cantidadCeros);
	document.write("<br>Cantidad de Numeros pares: "+cantidadPares);
	document.write("<br>Promedio de positivos: "+promedioPositivos);
	document.write("<br>Promedio de negativos: "+promedioNegativos);
	document.write("<br>Diferencia entre positivos y negativos: "+diferenciaPositivosNegativos);




}//FIN DE LA FUNCIÓN