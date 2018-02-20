function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var SumaTotal;
	var Promedio;

	while(contador<5)
	{
		numeroIngresado=prompt("Ingrese un nùmero");
		
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=parseInt(acumulador);

		acumulador=acumulador+numeroIngresado;
		contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN