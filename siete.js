function Mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var notaBaja=0;
	var VaronesApro=0;
	var acumuladorDeNotas=0;
	var promedioDeNotas;

	while(contador<100)
	{
		contador++;
		nota=prompt("Ingrese nota");
		nota=parseInt(nota);
		sexo=prompt("Ingrese sexo");
		acumuladorDeNotas=acumuladorDeNotas+nota;

		if (contador == 1)
		{
			notaBaja=nota;
		}
		else
		{
			if(nota<notaBaja)
			{
				notabaja=nota
			}
		}
		if (sexo == "f" && nota > 5)
		{
			VaronesApro=0;
		}
	}

	promedioDeNotas=acumuladorDeNotas/contador;
	alert("Promedio notas: "+promedioDeNotas+", la nota mas baja: "+notabaja+". Varones que aprovaron: "+VaronesApro)
}
