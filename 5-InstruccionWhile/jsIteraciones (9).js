function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("Ingrese un número");

		if(contador == 1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero > maximo)
			{
				maximo=numero;
			}
			if(numero < minimo)
			{
				minimo=numero;
			}
		}//if(contador == 1)

		respuesta=prompt("No ingrese (no) para seguir operando");
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN