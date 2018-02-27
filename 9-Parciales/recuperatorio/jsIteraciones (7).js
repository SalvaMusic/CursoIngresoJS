function Mostrar()
{
/*letra - numero (-50 / +50). promedio de los positivos.
cantidad de impares. suma de todos los numeros cuya letra fue vocal.
numero maximo y la letra*/

	var cantidadPositivos=0;
	var cantidadImpares=0;
	var sumaVocal;
	var maximo=0;
	var sumaPositivos=0;
	var respuesta ='si';
	var numero;
	var promedioPositivos;

	while(respuesta =='si')
	{
		numero=prompt("Ingrese un número entre -50 y 50");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("Ingrese un número entre -50 y 50");
			numero=parseInt(numero);
		}
		letra=prompt("ingrese una letra");
		while(!isNaN(letra))
		{
			letra=prompt("vuelva a ingresar una letra");
		}
		if(numero>0)
		{
				sumaPositivos=sumaPositivos+numero;
				cantidadPositivos++;
		}
		if(numero%2==1)
		{
				cantidadImpares++;
		}
		switch(letra)
		{
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				sumaVocal=sumaVocal+numero;
				break;
		}
		if(numero>maximo)
		{
			maximo=numero;
			letraMaximo=letra;
		}
	
		respuesta = prompt("Ingrese (si) si desea continuar");
	}

	promedioPositivos=sumaPositivos/cantidadPositivos;

	document.write("Promedio de los positivos: "+promedioPositivos);
	document.write("<br>Cantidad de Impares: "+cantidadImpares);
	document.write("<br>Suma de los numeros con vocal: "+sumaVocal);
	document.write("<br>Numero máximo: "+maximo+" Letra: "+letraMaximo);


}//FIN DE LA FUNCIÓN