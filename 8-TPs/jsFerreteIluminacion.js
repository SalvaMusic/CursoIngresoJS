/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. mparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca
B.	Si compra 5  la el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var precioUni;
	var precioBruto;
	var precioDescuento;
	var precioFinal;
	var marca;
	var porcentajeDescuento;
	var iibb;
	
	precioUni=35;
	
	cantidad=document.getElementById('Cantidad').value;
	marca=document.getElementById('Marca').value;

	precioBruto=precioUni*cantidad;

	switch(cantidad)
	{
		case 6:
			porcentajeDescuento=0.5;
			break;

		case 5:
			porcentajeDescuento=0.3;
			break;
		case 4:
			switch (marca)
			{
				case "ArgentinaLuz":
				case "FelipeLamparas" :
					porcentajeDescuento=0.25;
					break;
				default:
					porcentajeDescuento=0.2;
			}//switch (marca)
		case 3:
			switch (marca)
			{
				case "ArgentinaLuz":
					porcentajeDescuento=0.15;
					break;
				case "FelipeLamparas":
					porcentajeDescuento=0.1;
					break;
				default:
					porcentajeDescuento=0.5;
			}//switch (marca)
		default:
			porcentajeDescuento=0;
	}//switch(cantidad)

	precioDescuento=precioBruto-(precioBruto*porcentajeDescuento);
	console.log(precioFinal);
	iibb=precioDescuento*0.1;
	preciofinal=precioDescuento;

	switch (preciofinal)
	{
		case 120:

			preciofinal=precioDescuento+ibb;

			alert("Usted pagó "+ preciofinal+" de IIBB, siendo "+ibb+" el impuesto que se pago");
			document.getElementById('precioDescuento').value=preciofinal;
			break;
		default:
			document.getElementById('precioDescuento').value=preciofinal;
	}







/*
	var cantidad;
 	var marca;
 	var preciofinal;
 	var precioUni;
 	var precioBruto;
 	var porcentajeDescuento;
 	var ibb;

 	precioUni=35;

 	cantidad=document.getElementById('Cantidad').value;
 	marca=document.getElementById('Marca').value;

 	precioBruto=cantidad*precioUni;

 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 			porcentajeDescuento=0;
 			break;
 		case 3:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					porcentajeDescuento=0.15;
 					break;
 				case "FelipeLamparas":
 					porcentajeDescuento=0.1;
 					break;
 				}
 				default:
 				{
 					porcentajeDescuento=0.05;
 					break;
 				}
 				break;
 			} 
 			break;
 		case 4:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					porcentajeDescuento=0.25;
 					break;
 				default
 					porcentajeDescuento=0.2;
 					break;	
 			}
 				break;
 		case 5:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					porcentajeDescuento=0.3;
 					break;
 			}
 			break;
 		case 6:
 			switch(marca)
 			{
 				case "ArgentinaLuz":
 					porcentajeDescuento=0.5;
 					break;
 				default
 					porcentajeDescuento=0.4;
 					break;
 			}
 				break;	
 	}
*/
/*
 	switch(cantidad)
 	{
 		case 1:
 		case 2:
 			porcentajeDescuento=0;
 			break;
 		case 3:
 			if(marca == "ArgentinaLuz")
 			{
 				porcentajeDescuento=0.15;
 			}
 			else
 			{
 				if(marca == "FelipeLamparas")
 				{
 					porcentajeDescuento=0.1
 				}
 				else
 				{
 					porcentajeDescuento=0.05;
 				}
 			}
 			break;
 		case 4:
 			if(cantidad == 4)
 			{
 				if(marca == "ArgentinaLuz" || "FelipeLamparas")
 				{
 					porcentajeDescuento=0.25;
 				}
 				else
 				{
 					porcentajeDescuento=0.2;
 				}
 			}
 			break;
 		case 5:
 			porcentajeDescuento=0.5;
 			break;
 	}
*/
/*
 	if(cantidad > 5)
 	{
 		porcentajeDescuento=0.5;
 	}
 	else
 	{
 		if(cantidad == 5)
 		{
 			if(marca == "ArgentinaLuz")
 			{
 				porcentajeDescuento=0.4;
 			}
 			else
 			{
 				porcentajeDescuento=0.3;
 			}
 		}
 		else
 		{
 			if(cantidad == 4)
 			{
 				if(marca == "ArgentinaLuz" || "FelipeLamparas")
 				{
 					porcentajeDescuento=0.25;
 				}
 				else
 				{
 					porcentajeDescuento=0.2;
 				}
 			}
 			else
 			{
 				if(cantidad == 3)
 				{
 					if(marca == "ArgentinaLuz")
 					{
 						porcentajeDescuento=0.15;
 					}
 					else
 					{
 						if(marca == "FelipeLamparas")
 						{
 							porcentajeDescuento=0.1
 						}
 						else
 						{
 							porcentajeDescuento=0.05;
 						}
 					}
 				}
 			}
 		}
 	}//if(cantidad > 5)
*//*
 	precioFinal=precioBruto - (precioBruto*porcentajeDescuento);

 	document.getElementById('precioDescuento').value=precioFinal;

 	/*if(preciofinal > 120)
 	{
 		iibb=precioFinal*0.1
 		preciofinal=preciofinal+0.1;
 		alert("Usted pago "+iibb+" de IIBB");
 	}
 	*/
}	
