function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta == 'si')
	{
		numero=prompt("Ingrese un número");
		if(numero < 0)
		{
			negativo=negativo*numero;
		}
		else
		{
			numero=parseInt(numero);
			positivo=positivo+numero;
		}

		respuesta=prompt("Ingrese (si) para seguir operando");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN