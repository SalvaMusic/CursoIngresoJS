//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*nombre del animal. peso del animal. temperatura del habitat del que vive (-40 & +40)
	al final informar cantidad de temperaturas pares ingresadas.
	cantidad de temperaturas impares.
	nombre del animal mas pesado.
	nombre del animal menos pesado.
	cantidad de animales cuyo habitat tiene menos de 0 grados.
	promedio de peso de todos los animales.
	temperatura maxima y la minima ingresada */
	 
	var nombre;
	var peso;
	var temperatura;
	var pesoMinimo;
	var	animalPesado;
	var pesoMaximo;
	var	animalLiviano;
	var temperaturasPares=0;
	var temperaturasImpares=0;
	var temperaMaxima;
	var temperaturaMinima;
	var animalesFrios=0;
	var contador=0;
	var acumuladorPeso=0;
	var promedioPeso;
	var respuesta='si';

	while(respuesta =='si')
	{
		nombre=prompt("Ingrese nombre del animal");
		peso=prompt("Ingrese peso del animal");
		peso=parseInt(peso);
		while(peso<=0 || isNaN(peso))
		{
			peso=prompt("Ingrese peso del animal");
			peso=parseInt(peso);
		}
		acumuladorPeso=acumuladorPeso+peso;

		temperatura=prompt("Ingrese temperatura en la que vive");
		temperatura=parseInt(temperatura);

		while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
		{
			temperatura=prompt("Ingrese temperatura en la que vive");
			temperatura=parseInt(temperatura);
		}
		
		if(temperatura%2 == 0 && temperatura != 0)
		{
			temperaturasPares++;
		}
		else if(temperatura%2 == 1 && temperatura != 0)
		{
			temperaturasImpares++
		}//if(temperatura%2 == 0 && temperatura != 0)


		contador ++;
		if(contador == 1)
		{
			pesoMaximo=peso;
			animalPesado=nombre;
			pesoMinimo=peso;
			animalLiviano=nombre;
		}
		else 
		{
			if(peso>pesoMaximo)
			{
				pesoMaximo=peso;
				animalPesado=nombre;
			}
			if(peso<pesoMinimo)
			{
				pesoMinimo=peso;
				animalLiviano=nombre;
			}
		}//if(contador == 1)

		if(temperatura < 0)
		{
			animalesFrios++;
		}

		if (contador == 1)
		{
			temperaturaMaxima=temperatura;
			temperaturaMinima=temperatura;
		}
		else
		{
			if(temperatura>temperaturaMaxima)
			{
				temperaMaxima=temperatura;
			}
			if(temperatura<temperaturaMinima)
			{
				temperaturaMinima=temperatura;
			}
		}

		respuesta=prompt("Ingrese 'si' para agregar otro animal");
	}
		promedioPeso=acumuladorPeso/contador;

	/*document.write("Nombre del animal: "+nombre);
	document.write("<br>Peso: "+peso);
	document.write("<br>temperatura: "+temperatura);*/
	document.write("<br>Temperaturas impares: "+temperaturasImpares);
	document.write("<br>Temperaturas pares: "+temperaturasPares);
	document.write("<br>Animal mas pesado: "+animalPesado);
	document.write("<br>Animal mas liviano: "+animalLiviano);
	document.write("<br>Animales con habitat menor a 0º: "+animalesFrios);
	document.write("<br>Promedio del peso total: "+promedioPeso);
	document.write("<br>Temperatura máxima: "+temperaturaMaxima);
	document.write("<br>Temperatura mínima: "+temperaturaMinima);
}

