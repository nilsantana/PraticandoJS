/**
*JavaScript - Aula12: Jokenpo
*@author Nil
*/


function jogar(){
	if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
		alert("Selecione uma op��o!");
	}else{
		//l�gica principal
		
	}
}

function resetar(){
	document.getElementById("pc").src"imagem/pc.png"
	document.getElementById("placar").innerHTML="";
}