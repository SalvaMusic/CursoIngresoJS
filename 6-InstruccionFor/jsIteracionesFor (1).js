function Mostrar()
{	
	var numeroRandom;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var porcen0;
	var iteraciones=100000;

	for(contador=0;contador<iteraciones;contador++)
	{
		numeroRandom=Math.floor((Math.random() * 10));
		
		switch(numeroRandom)
		{
			case 0:
				contador0++;
				break;
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
				if(contador%2==0)
				{
					contador3++;
					contador++;
				}
				contador3++;
				
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				porcen6=(contador6/(iteraciones))*100;
				//console.log(porcen6);		
				if (porcen6>7) 
				{
					contador--;
					continue;
				}
				else
				{
					contador6++;
				}
				contador6++;
				break;
			case 7:
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
		}
	}

	porcen0=(contador0/(contador+1))*100;
	porcen0=(porcen0)
	document.write("<br>0 Cantidad: "+contador0+" -- Porcentaje: "+porcen0+"%");
	porcen1=(contador1/(contador+1))*100;
	porcen1=(porcen1)
	document.write("<br>1 Cantidad: "+contador1+" -- Porcentaje: "+porcen1+"%");
	porcen2=(contador2/(contador+1))*100;
	porcen2=(porcen2)
	document.write("<br>2 Cantidad: "+contador2+" -- Porcentaje: "+porcen2+"%");
	porcen3=(contador3/(contador+1))*100;
	porcen3=(porcen3)
	document.write("<br>3 Cantidad: "+contador3+" -- Porcentaje: "+porcen3+"%");
	porcen4=(contador4/(contador+1))*100;
	porcen4=(porcen4)
	document.write("<br>4 Cantidad: "+contador4+" -- Porcentaje: "+porcen4+"%");
	porcen5=(contador5/(contador+1))*100;
	porcen5=Math.round(porcen5)
	document.write("<br>5 Cantidad: "+contador5+" -- Porcentaje: "+porcen5+"%");
	porcen6=(contador6/(contador+1))*100;
	porcen6=Math.round(porcen6)
	document.write("<br>6 Cantidad: "+contador6+" -- Porcentaje: "+porcen6+"%");
	porcen7=(contador7/(contador+1))*100;
	porcen7=Math.round(porcen7)
	document.write("<br>7 Cantidad: "+contador7+" -- Porcentaje: "+porcen7+"%");
	porcen8=(contador8/(contador+1))*100;
	porcen8=Math.round(porcen8)
	document.write("<br>8 Cantidad: "+contador8+" -- Porcentaje: "+porcen8+"%");
	porcen9=(contador9/(contador+1))*100;
	porcen9=Math.round(porcen9)
	document.write("<br>9 Cantidad: "+contador9+" -- Porcentaje: "+porcen9+"%");
	


/*	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCeros=0;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contador50=0;

	for(contador=-100;contador<100;contador++)
	{
		if(contador>0)
		{
			contadorDePositivos++;
		}
		else
		{
			if(contador<0)
			{
				contadorDeNegativos++;
			}
			else
			{
				contadorDeCeros++;
			}
		}

		if(contador%2==0 && contador!=0)
		{
			contadorDePar++;
		}
		else
		{
			if(contador!=0)
			{
				contadorDeImpar++;
			}
		}

		switch(contador)
		{
			case 50:
				contador50++;
				break;
		}
	}

	document.write("positivos "+contadorDePositivos);
	document.write("negativos "+contadorDeNegativos);
	document.write("ceros "+contadorDeCeros);
	document.write("pares "+contadorDePar);
	document.write("impares "+contadorDeImpar);
	document.write("de 50 "+contador50);
*/

//for(contador=0;contador<10;contador++);//

/*
	var contador=0;

	for(;;)
	{
		contador++
		document.write("<br>"+contador);
		if(contador==10)
		{
			document.write("<br>break"+contador);
			break;
		}
		if(contador == 5)
		{
			continue;
		}
		document.write("<br>continue"+contador);
	}
*/
}