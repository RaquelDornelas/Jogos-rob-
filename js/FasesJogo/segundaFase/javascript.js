//Declaração de variaveis

var roboAspirador = null;
var quadro = null;
var sujos = new Array();

var linhas = 4;
var colunas = 4;
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
		this.visitado = objeto.visitado;
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
				visitado: false,
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
	$(seletor).attr("src", "imagens/adolescente/AdolescenteSujeira.jpg");
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da funçao responsável por abrir a imagem do chão sujo quando necessário. 
function abrirImagemSujo(){
	var imgs = '<table style="margin:auto;">';
	for(linha = 0; linha < linhas; linha++){
		imgs += '<tr>';
		for(coluna = 0; coluna < colunas; coluna++){
			imgs += '<td class="text-center">'+criarImagem(linha, coluna, "imagens/adolescente/SujeiraPo.jpg")+'</td>';
		}
		imgs += '</tr>';
	}
	//O id do container que ira gerar a imagem completa no inicio do jogo.
	$("#container-imgs").html(imgs);
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
//Declaração da funçao responsável por inicializar o jogo chamando determinadas outras funções.
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
	
};
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------

function desativar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Desabilitar o botão após a busca ter sido realizada
function desabilitar(){
	$(".desabilitar").unbind();
	
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Função responsavel por fazer a busca em largura
async function buscaLargura(){
	
	desabilitar();
	
	var fila = [];
	
	fila.push(roboAspirador);

	while(fila.length > 0){
		var no_atual = fila.shift();
		await desativar(500);
		
		if(no_atual.linha == 0 && no_atual.coluna == 0)
			atualizarMovimento("imagens/adolescente/AdolescenteSujeira.jpg", "imagens/adolescente/AdolescenteLimpo.jpg");
		else
			atualizarMovimento("imagens/adolescente/SujeiraPo.jpg", "imagens/adolescente/Limpo.jpg");
		roboAspirador = no_atual;
		quadro[roboAspirador.linha][roboAspirador.coluna].sujo = false;
		quadro[roboAspirador.linha][roboAspirador.coluna].visitado = true;
		quadro[roboAspirador.linha][roboAspirador.coluna].listado = true;
		await desativar(500);
		
		atualizarMovimento("imagens/adolescente/AdolescenteSujeira.jpg", "imagens/adolescente/AdolescenteLimpo.jpg");
		
		if(roboAspirador.linha > 0
		&& quadro[roboAspirador.linha - 1][roboAspirador.coluna].visitado == false
		&& quadro[roboAspirador.linha - 1][roboAspirador.coluna].listado == false){
			fila.push(new posicionamento(roboAspirador.linha - 1, roboAspirador.coluna));
			quadro[roboAspirador.linha - 1][roboAspirador.coluna].listado = true;
		}
		
		if(roboAspirador.coluna < (colunas - 1)
		&& quadro[roboAspirador.linha][roboAspirador.coluna + 1].visitado == false
		&& quadro[roboAspirador.linha][roboAspirador.coluna + 1].listado == false){
			fila.push(new posicionamento(roboAspirador.linha, roboAspirador.coluna + 1));
			quadro[roboAspirador.linha][roboAspirador.coluna + 1].listado = true;
		}
		
		if(roboAspirador.linha < (linhas - 1)
		&& quadro[roboAspirador.linha + 1][roboAspirador.coluna].visitado == false
		&& quadro[roboAspirador.linha + 1][roboAspirador.coluna].listado == false){
			fila.push(new posicionamento(roboAspirador.linha + 1, roboAspirador.coluna));
			quadro[roboAspirador.linha + 1][roboAspirador.coluna].listado = true;
		}
		
		if(roboAspirador.coluna > 0
		&& quadro[roboAspirador.linha][roboAspirador.coluna - 1].visitado == false
		&& quadro[roboAspirador.linha][roboAspirador.coluna - 1].listado == false){
			fila.push(new posicionamento(roboAspirador.linha, roboAspirador.coluna - 1));
			quadro[roboAspirador.linha][roboAspirador.coluna - 1].listado = true;
		}
	}
	
	swal({
			title: "Parábens! Todos os comôdos do laboratório estão limpos!",
			icon: "success",
			closeOnClickOutside: false,
			buttons: {
				confirm: {
					text: "Ir para 3º Fase",
					value: true,
					visible: true,
					closeModal: true
				}
			}
		}).then(function(value){
			window.location.href = 'terceiraFase.html';
		});
}

//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Função responsavel por fazer a busca em pronfundidade.
async function buscaProfundidade(){
	
	desabilitar();
	
	var pilha = [];
	var count = 0;
	
	pilha.unshift(roboAspirador);
	
	while(pilha.length > 0){
		count++;
		var no_atual = pilha.shift();
		await desativar(500);
		
		if(no_atual.linha == 0 && no_atual.coluna == 0)
			atualizarMovimento("imagens/adolescente/AdolescenteSujeira.jpg", "imagens/adolescente/AdolescenteLimpo.jpg");
		else
			atualizarMovimento("imagens/adolescente/SujeiraPo.jpg", "imagens/adolescente/Limpo.jpg");
		roboAspirador = no_atual;
		quadro[roboAspirador.linha][roboAspirador.coluna].sujo = false;
		quadro[roboAspirador.linha][roboAspirador.coluna].visitado = true;
		quadro[roboAspirador.linha][roboAspirador.coluna].listado = true;
		await desativar(500);
		
		atualizarMovimento("imagens/adolescente/AdolescenteSujeira.jpg", "imagens/adolescente/AdolescenteLimpo.jpg");
		
		if(roboAspirador.linha > 0
		&& quadro[roboAspirador.linha - 1][roboAspirador.coluna].visitado == false
		&& quadro[roboAspirador.linha - 1][roboAspirador.coluna].listado == false){
			pilha.unshift(new posicionamento(roboAspirador.linha - 1, roboAspirador.coluna));
			quadro[roboAspirador.linha - 1][roboAspirador.coluna].listado = true;
			continue;
		}
		
		if(roboAspirador.coluna < (colunas - 1)
		&& quadro[roboAspirador.linha][roboAspirador.coluna + 1].visitado == false
		&& quadro[roboAspirador.linha][roboAspirador.coluna + 1].listado == false){
			pilha.unshift(new posicionamento(roboAspirador.linha, roboAspirador.coluna + 1));
			quadro[roboAspirador.linha][roboAspirador.coluna + 1].listado = true;
			continue;
		}
		
		if(roboAspirador.linha < (linhas - 1)
		&& quadro[roboAspirador.linha + 1][roboAspirador.coluna].visitado == false
		&& quadro[roboAspirador.linha + 1][roboAspirador.coluna].listado == false){
			pilha.unshift(new posicionamento(roboAspirador.linha + 1, roboAspirador.coluna));
			quadro[roboAspirador.linha + 1][roboAspirador.coluna].listado = true;
			continue;
		}
		
		if(roboAspirador.coluna > 0
		&& quadro[roboAspirador.linha][roboAspirador.coluna - 1].listado == false){
			pilha.unshift(new posicionamento(roboAspirador.linha, roboAspirador.coluna - 1));
			quadro[roboAspirador.linha][roboAspirador.coluna - 1].listado = true;
			continue;
		}

		pilha.unshift();
	}
	
	swal({
			title: "Parábens! Todos os comôdos do laboratório estão limpos!",
			icon: "success",
			closeOnClickOutside: false,
			buttons: {
				confirm: {
					text: "Ir para 3º Fase",
					value: true,
					visible: true,
					closeModal: true
				}
			}
		}).then(function(value){
			window.location.href = 'terceiraFase.html';
		});
}

//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Apartir do click em cada botão determinada ação sera realizada no jogo.
$(document).ready(function(){
	inicializar();

	$("#botao-buscaLargura").on("click", function(){
		buscaLargura();
	});

	$("#botao-buscaProfundidade").on("click", function(){
		buscaProfundidade();
	});
});
