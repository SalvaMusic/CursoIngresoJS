function Mostrar()
{
	var numero;
	var respuesta='si';
	var cantidadNumerosPares=0;
	var promedio;
	var suma;
	var maximo=0;
	var minimo=0;
	var contador=0;
	var acumulador=0;

	while(respuesta == 'si')
	{
		numero=prompt("Ingrese su numero");
		numero=parseInt(numero);
		contador++;
		acumulador=acumulador+numero;

		if(numero%2==0)
		{
			cantidadNumerosPares++;
		}
		if(contador == 1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		respuesta=prompt("Ingrese (si) para seguir operando");
	}

	promedio=acumulador/contador;

	document.write("Cantidad de numeros pares: "+cantidadNumerosPares);
	document.write("<br>Promedio: "+promedio);
	document.write("<br>Suma: "+acumulador);
	document.write("<br>Maximo: "+maximo);
	document.write("<br>Minimo: "+minimo);


}