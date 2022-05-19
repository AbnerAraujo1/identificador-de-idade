var data = new Date();
var ano  = data.getFullYear();
var fano = document.getElementById('txtano');
var res  = document.getElementById('res');
var fsex = document.getElementsByName(`radsex`);
var idade = ano -(+fano.value);
var genero = '';
var img = document.createElement('img');
    img.setAttribute("id", "foto");

function verificarIdade(idadePassada){
	switch (idadePassada){
	 case (idadePassada <= 10):
		//Criança                                      
		img.setAttribute("src ","foto-bebe-m.png");
		break;
	 case (idadePassada <= 21 && idadePassada > 10):                            
		//Jovem;
		img.setAttribute("src" , "foto-jovem-m.png")
		break;
	 case (idadePassada <= 50 && idadePassada > 21):                                
		 //Adulto                                           
		img.setAttribute("src" , "foto-adulto-m.png"); 
		break;
	 default:
		//Idoso 
		//se não cair em nenhuma das de cima vem pra  cá                                                                
		img.setAttribute("src" , "foto-idoso-m.png");       
	}
}


function verificar() {
	
	if (fano.value.length == 0 || fano.value > ano) {
		window.alert ('[ERRO] verifique os dados e tente novamente!')
		return; //encerrar o código aqui.
				//não continua... para baixo..
	}
	
	if (fsex[0].checked) {
		
		genero = 'Homem';      
		verificarIdade(idade);
	}
	
	if (fsex[1].checked) {
		
		genero = 'mulher';
		verificarIdade(idade);
	}
	
	res.style.textAlign= 'center'
	res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
	res.appendChild(img);
}