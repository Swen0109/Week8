function menukaart(aantalBier,aantalWijn,hoeveel){
var fris=(2.60);
var bier=(2.70);
var wijn=(4.25);
var bitterballen8=(6.00)
var bitterballen16=(10.00)
var totaal1=(aantalschaaltjes*bitterballen16)
var totaal2=(aantalschaaltjes*bitterballen8)
var totaal3=(wijn*aantalWijn)
var totaal4=(bier*aantalBier)	
var totaal5=(hoeveel*fris)
var vraag=prompt("Wilt u drinken of snacks bestellen?")
if(vraag=="drinken"){
	var drankjes=prompt("Wilt u fris,bier of wijn bestellen?")
	if(drankjes=="fris"){
		var hoeveel=prompt("Hoeveel fris drankjes wilt u bestellen?")
		document.write("Aantal fris drankjes: ")
		document.write(hoeveel)
		document.write("<br>")
		document.write(hoeveel*fris)
		document.write("euro")
		document.write("<br>")
		menukaart()
	}
	else if(drankjes=="bier"){
		var aantalBier=prompt("Hoeveel biertjes wilt u bestellen?")
		document.write("Aantal biertjes besteld: ")
		document.write(aantalBier)
		document.write("<br>")
		document.write(bier*aantalBier)
		document.write(" euro")
		document.write("<br>")
		menukaart()
	} 

	 else if(drankjes=="wijn"){
		var aantalWijn=prompt("Hoeveel glazen wijn wilt u bestellen")
		document.write("Aantal glazen wijn besteld: ")
		document.write(aantalWijn)
		document.write("<br>")
		document.write(wijn*aantalWijn)
		document.write(" euro")
		document.write("<br>")
		menukaart()
	}

} 	
	else if (vraag=="snacks"){
		var aantalbitterballen=prompt("Wilt u 8 of 16 bitterballen bestellen?")
   		if(aantalbitterballen=="16"){
    		var aantalschaaltjes=prompt("hoeveel schaaltjes van " + aantalbitterballen + " bitterballen wilt u bestellen?")
			document.write("schaaltjes van 16 bitterballen besteld:")
			document.write(aantalschaaltjes)
			document.write("<br>")
			document.write(aantalschaaltjes*bitterballen16)
			document.write("euro ")
			document.write("<br>")
		}
    	else if(aantalbitterballen!="8"){
     		alert("U kunt alleen kiezen tussen 8 of 16.") 
		} 	
		else if (aantalbitterballen=="8"){
			var aantalschaaltjes=prompt("hoeveel schaaltjes van " + aantalbitterballen + " bitterballen wilt u bestellen?")
			document.write("schaaltjes van 8 bitterballen besteld:")
			document.write(aantalschaaltjes)
			document.write("<br>")
			document.write(aantalschaaltjes*bitterballen8)
			document.write("euro ")
			document.write("<br>")
		}
		menukaart()
	} 

 	else if(vraag=="stop"){
		function fristekst(){
			document.write("Aantal fris drankjes: ")
			document.write(hoeveel)
			document.write("<br>")
			document.write(hoeveel*fris)
			document.write("euro")
			menukaart()
		}
		function biertekst(){
			document.write("Aantal biertjes besteld: ")
			document.write(aantalBier)
			document.write("<br>")
			document.write(bier*aantalBier)
			document.write(" euro")
			menukaart()
		}
		function wijntekst(){
			document.write("Aantal glazen wijn besteld: ")
			document.write(aantalWijn)
			document.write("<br>")
			document.write(wijn*aantalWijn)
			document.write(" euro")
			menukaart()
		}
		function bitterbal8(){
			document.write("Aantal schaaltjes van 8 bitterballen besteld:")
			document.write(aantalschaaltjes)
			document.write("<br>")
			document.write(aantalschaaltjes*bitterballen8)
			document.write(" euro")
			menukaart()
		}
		function bitterbal16(){
			document.write("Aantal schaaltjes van 16 bitterballen besteld:")
			document.write(aantalschaaltjes)
			document.write("<br>")
			document.write(aantalschaaltjes*bitterballen16)
			document.write(" euro")
			menukaart()
		}
	}

	else if(vraag !="drinken"){
		alert("U heeft een ongeldige invoer gedaan.")
	}
	else if(vraag !="snacks"){
		alert("U heeft een ongeldige invoer gedaan.")
	}

	else if(vraag !="stop"){
		alert("U heeft een ongeldige invoer gedaan.")
	}
}
menukaart()


 


