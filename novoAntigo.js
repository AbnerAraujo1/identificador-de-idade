function verificar() {
	
	//obs1: colocar todas as variáveis do código no topo
	//obs2: se fosse menor do que 50 e menor do que 21
	        //ao mesmo tempo... ele cairia nos dois ifs
	//obs3: se a idade é menor que 10 não preciso saber que é maior que 0
	//obs4: variáveis sempre sem acentos
	//obs5: identar o código (alinhamento do código)
	//obs6: ponto e vírgula ao final das linhas...
	        //no javascript puro funciona mas em framework n vai rodar...
	//obs7: se for usar a crase use em todo o código e não em algumas partes
	        //caso não dê use apenas aspas simples em tudo.
	//obs8: adicionou ao método uma string ao invés de uma variável
	
	//exercício:
	//----------------------------------------------------------------------------------
		// na linha 15 verificar se precisa mesmo isso ou apenas (ano - (+fano.value))
		   //tentar usar o sinal de + para transformar em número.
		
		//substituir if internos por switch
		// linha 23 a 35
		// linha 38 a 46
	
	var data = new Date();
	var ano  = data.getFullYear();
	var fano = document.getElementById('txtano');
	var res  = document.getElementById('res');
	var fsex = document.getElementsByName(`radsex`);
	var idade = ano -(+fano.value);
	var genero = '';
	
	var img = document.createElement('img');
	img.setAttribute("id", "foto")
	
	if (fano.value.length == 0 || fano.value > ano) {
		window.alert ('[ERRO] verifique os dados e tente novamente!')
		return; //encerrar o código aqui.
				//não continua... para baixo..
	}
	
	//caso não caia no primeiro if vem pra cá
		 
	if (fsex[0].checked) {
		
		genero = 'Homem';                                   
		
		switch (idade <= 10){                       
			//Criança                                      
			img.setAttribute("src ","foto-bebe-m.png")
			
		 case : (idade <= 21 && idade > 10)                            
			//Jovem;
			img.setAttribute("src" , "foto-jovem-m.png") 
			break;
		 case : (idade <= 50 && idade > 21)                                
			 //Adulto                                           
			img.setAttribute("src" , "foto-adulto-m.png"); 
			break;
		 default  
			//Idoso 
			//se não cair em nenhuma das de cima vem pra  cá                                                                
			img.setAttribute("src" , "foto-idoso-m.png");       
		}
		
		 }
	
	if (fsex[1].checked) {
		
		genero = 'mulher';
		
		if (idade <= 10){
				 //Criança
		} else if (idade <= 21 && idade > 10) {
				 //Jovem
		} else if (idade <= 50 && idade > 21) {
			 //Adulto
		} else {
			 //Idoso
		}
		
	}
	
	res.style.textAlign= 'center'
	res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
	res.appendChild(img);
}