//Declaração das variaveis

var roboAspirador = null;
var quadro = null;
var sujos = new Array();

var linhas = 1;
var colunas = 2;
var contador = 0;
var numeroMovimentos = 0;
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da classe posicionamento

class posicionamento{
	//constructor cria e inicia as linhas e colunas criadas pela classe posicionamento
	constructor(linha, coluna) {
		this.linha = linha;
		this.coluna = coluna;
	}
};
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da classe no
class no{
	//constructor cria e inicia os objetos criado pela classe no
	constructor(objeto) {
		this.posicionamento = new posicionamento(objeto.linha, objeto.coluna);
		this.sujo = objeto.sujo;
		this.percorrido = objeto.percorrido;
		this.listado = objeto.listado;
	}
};
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsavel por iniciar a matriz. 
function iniciar(){
	quadro = new Array(linhas);
	for(linha = 0; linha < linhas; linha++){
		quadro[linha] = new Array(colunas);
		for(coluna = 0; coluna < colunas; coluna++){
			quadro[linha][coluna] = new no({
				linha: linha,
				coluna: coluna,
				sujo: true,
				percorrido: false,
				listado: false
			});
			sujos.push(new posicionamento(linha, coluna));
		}
	}
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por criar as imagens de linhas e colunas
function criarImagem(linha, coluna, src){
	contador++;
	return '<img id="img_linha'+linha+'_coluna'+coluna+'" src="'+src+'">';
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por criar as imagens do aspirador de pó
function imagemAspirador(){
	var seletor = "#img_linha"+roboAspirador.linha+"_coluna"+roboAspirador.coluna;
	$(seletor).attr("src", "imagens/bebe/bebeSujeira.jpg");
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por atualizar o contador que determina quantos comodôs ainda estão sujos
function atualizarContador(){
	$("#contadorComodosSujos").html(sujos.length);
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por aspirar
function aspirar(){
	//aumenta o número de movimentos a medida que o comôdo e aspirado.
	numeroMovimentos++;
	quadro[roboAspirador.linha][roboAspirador.coluna].sujo = false;
	seletor = "#img_linha"+roboAspirador.linha+"_coluna"+roboAspirador.coluna;
	$(seletor).attr("src", "imagens/bebe/bebeLimpo.jpg");
	for(i = 0; i < sujos.length; i++){
		if(sujos[i].linha == roboAspirador.linha
		&& sujos[i].coluna == roboAspirador.coluna)
			sujos.splice(i, 1);
	}

	atualizarContador();
	limpezaConcluida();
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por abrir a imagem do chão sujo quando necessário. 
function abrirImagemSujo(){
	var figura = '<table style="margin:auto;">';
	for(linha = 0; linha < linhas; linha++){
		figura += '<tr>';
		for(coluna = 0; coluna < colunas; coluna++){
			figura += '<td class="text-center">'+criarImagem(linha, coluna, "imagens/bebe/sujeiraTinta.jpg")+'</td>';
		}
		figura += '</tr>';
	}
	//O id do container que ira gerar a imagem completa no inicio do jogo.
	$("#container-imagens").html(figura);
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por atualizar os movimentos trocando as imagens de acordo com o q for solicitado.
function atualizarMovimento(trocaImagem, naoTrocaImagem){
	if(quadro[roboAspirador.linha][roboAspirador.coluna].sujo === true){
		img = trocaImagem;
	}else if(quadro[roboAspirador.linha][roboAspirador.coluna].sujo === false){
		img = naoTrocaImagem;
	}
	$("#img_linha"+roboAspirador.linha+"_coluna"+roboAspirador.coluna).attr("src", img);
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por atualizar a contagem dos movimentos na medida em que forem sendo realizados.
function atualizarContagemMovimento(){
	$("#numeroMovimentos").html(numeroMovimentos);
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por retornar uma mensagem de sucesso assim que o jogador concluir a primeira fase do jogo, direcionando-o para a segunda fase.
function limpezaConcluida(){
	atualizarContagemMovimento();
	if(sujos.length == 0){
		swal({
			title: "Parábens! Todos os comôdos do laboratório estão limpos!",
			icon: "success",
			closeOnClickOutside: false,
			buttons: {
				confirm: {
					text: "Ir para 2º Fase",
					value: true,
					visible: true,
					closeModal: true
				}
			}
		}).then(function(value){
			window.location.href = 'segundaFase.html';
		});
	}
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por acionar o caminho que será percorrido de acordo com o botão selecionado pelo jogador. 
function acionar(caminho){
	
	numeroMovimentos++;
	
	switch(caminho){
		case "direita":
			var limite = colunas - 1;
			var img = "";
			var seletor = "";
			if(roboAspirador.coluna < limite){
				
				atualizarMovimento("imagens/bebe/sujeiraTinta.jpg", "imagens/bebe/LaboratorioLimpo.jpg");

				roboAspirador.coluna++;
				atualizarMovimento("imagens/bebe/bebeSujeira.jpg", "imagens/bebe/bebeLimpo.jpg");
			}
			break;
			
		case "esquerda":
			var limite = 0;
			if(roboAspirador.coluna > limite){
				
				atualizarMovimento("imagens/bebe/sujeiraTinta.jpg", "imagens/bebe/LaboratorioLimpo.jpg");

				roboAspirador.coluna--;
				atualizarMovimento("imagens/bebe/bebeSujeira.jpg", "imagens/bebe/bebeLimpo.jpg");
			}
			break;
			
		default:
			break;
	}
	limpezaConcluida();
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por inicializar o jogo chamando determinadas outras funções;
function inicializar(){
	
	roboAspirador = null;
	quadro = null;
	sujos = new Array();
	
	contador = 0;
	numeroMovimentos = 0;

	iniciar();
	abrirImagemSujo();
	roboAspirador = new posicionamento(0,0);
	imagemAspirador();
	
	atualizarContagemMovimento();
	atualizarContador();
};
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Apartir do click em cada botão determinada ação sera realizada no jogo.
$(document).ready(function(){
	inicializar();

	$("#botao-esquerda").on("click", function(){
		acionar("esquerda");
	});
	
	$("#botao-direita").on("click", function(){
		acionar("direita");
	});
	
	$("#botao-aspirar").on("click", function(){
		aspirar();
	});

	$("#botao-parado").on("click", function(){
		numeroMovimentos++;
		atualizarContagemMovimento();
	});
});
