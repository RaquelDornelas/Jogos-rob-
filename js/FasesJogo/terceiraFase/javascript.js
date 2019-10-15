//Declaração da classe posicionamento
class posicionamento{
	constructor(objeto){
		this.linha = objeto.linha;
		this.coluna = objeto.coluna
	}
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Declaração da classe no
class no{
	constructor(objeto){
		this.id = ++id_increment;
		this.posicionamento = objeto.posicionamento;
		
		this.reiniciar = function(){
			
			this.f = 0;
			this.g = 0;
			this.h = 0;
			this.dentro_conjunto_fechado = false;
			this.dentro_conjunto_aberto = false;
			this.antecessor = null;
			
		};
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
//Configuração do mapa da cidade.

var ajustarMapa = new Array(linhas);

ajustarMapa[0] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
ajustarMapa[1] = [0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0];
ajustarMapa[2] = [0,1,'#',0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0];
ajustarMapa[3] = [0,1,1,0,1,1,'A',0,0,0,0,0,1,1,0,1,1,1,1,0];
ajustarMapa[4] = [0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0];
ajustarMapa[5] = [0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,'F',1,0];
ajustarMapa[6] = [0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0];
ajustarMapa[7] = [0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0];
ajustarMapa[8] = [0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0];
ajustarMapa[9] = [0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0];
ajustarMapa[10] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0];
ajustarMapa[11] = [0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0];
ajustarMapa[12] = [0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0];
ajustarMapa[13] = [0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0];
ajustarMapa[14] = [0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0];
ajustarMapa[15] = [0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0];
ajustarMapa[16] = [0,0,0,0,1,1,0,'W',1,1,0,1,1,0,1,1,0,1,'G',0];
ajustarMapa[17] = [0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0];
ajustarMapa[18] = [0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0];
ajustarMapa[19] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------			
//Partes bloqueadas do mapa

var bloqueioMapa = new Array(linhas);

bloqueioMapa[0] =  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
bloqueioMapa[1] =  [1,null,null,1,null,null,null,1,null,null,null,1,null,null,1,null,null,null,null,1];
bloqueioMapa[2] =  [1,null,1,5,null,null,null,1,null,null,null,1,null,null,1,null,null,null,null,1];
bloqueioMapa[3] =  [1,null,null,5,null,null,1,1,1,1,1,1,null,null,1,null,null,null,null,1];
bloqueioMapa[4] =  [1,null,null,5,null,null,null,1,null,null,null,1,null,null,1,1,1,1,1,1];
bloqueioMapa[5] =  [1,null,null,5,null,null,null,1,null,null,null,1,null,null,1,null,null,1,null,1];
bloqueioMapa[6] =  [1,1,1,5,1,1,1,1,1,1,1,1,null,null,1,null,null,null,null,1];
bloqueioMapa[7] =  [1,null,null,5,null,null,1,null,null,null,null,1,1,1,1,1,1,1,1,1];
bloqueioMapa[8] =  [1,null,null,5,null,null,1,null,null,null,null,1,null,null,null,null,1,null,null,1];
bloqueioMapa[9] =  [1,null,null,5,null,null,1,null,null,null,null,1,null,null,null,null,1,null,null,1];
bloqueioMapa[10] = [1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,null,null,1];
bloqueioMapa[11] = [1,null,null,5,null,null,null,null,1,null,null,1,null,null,null,null,1,null,null,1];
bloqueioMapa[12] = [1,null,null,5,null,null,null,null,1,null,null,1,null,null,null,null,1,null,null,1];
bloqueioMapa[13] = [1,null,null,5,null,null,null,null,1,null,null,1,null,null,null,null,1,1,1,1];
bloqueioMapa[14] = [1,null,null,5,1,1,1,1,1,1,1,1,1,1,1,1,1,null,null,1];
bloqueioMapa[15] = [1,null,null,5,null,null,1,null,null,null,1,null,null,1,null,null,1,null,null,1];
bloqueioMapa[16] = [1,1,1,5,null,null,1,1,null,null,1,null,null,1,null,null,1,null,1,1];
bloqueioMapa[17] = [1,null,null,5,null,null,1,null,null,null,1,null,null,1,null,null,1,null,null,1];
bloqueioMapa[18] = [1,null,null,5,null,null,1,null,null,null,1,null,null,1,null,null,1,null,null,1];
bloqueioMapa[19] = [1,1,1,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
		this.f = 0;
		this.g = 0;
		this.h = 0;
		
		this.fila_adjacencia = [];
		this.dentro_conjunto_fechado = false;
		this.dentro_conjunto_aberto = false;
		this.antecessor = null;
		this.obstaculo = false;
		this.texto = null;
		this.valor = bloqueio(bloqueioMapa[this.posicionamento.linha][this.posicionamento.coluna]);
		
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
		this.projetar = function(objeto){
			stroke(100);
			fill(objeto.cor);
			rect(this.posicionamento.coluna * largura_bloco,this.posicionamento.linha * altura_bloco,largura_bloco,altura_bloco);
			if(this.texto != null){
				fill(0);
				text(this.texto, this.posicionamento.coluna * largura_bloco + (largura_bloco / 2), this.posicionamento.linha * altura_bloco + (altura_bloco / 2));
			}
		};
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
		
		if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == 1){
			this.projetar({cor:50});
			this.obstaculo = true;	
		}
		
		else if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == 0)
			this.projetar({cor:255});
		
		else if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == 'A'){
			fileiraAmbiente.push(this);
			this.texto = "A";
			this.projetar({cor:color(255,255,0)});
		}
		
		else if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == 'F'){
			fileiraAmbiente.push(this);
			this.texto = "F";
			this.projetar({cor:color(247,150,70)});
		}
		
		else if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == 'G'){
			fileiraAmbiente.push(this);
			this.texto = "G";
			this.projetar({cor:color(0,176,80)});
		}
		
		else if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == 'W'){
			fileiraAmbiente.push(this);
			this.texto = "W";
			this.projetar({cor:color(0,112,192)});
		}
		
		else if(ajustarMapa[this.posicionamento.linha][this.posicionamento.coluna] == '#'){
			casa = this;
			this.texto = "🏠";
			this.projetar({cor:color(0,176,240)});
		}
		
		if( ! this.obstaculo){
			
			if(this.posicionamento.linha > 0)
				this.fila_adjacencia.push(new posicionamento({linha: this.posicionamento.linha - 1,coluna: this.posicionamento.coluna}));
			
			if(this.posicionamento.coluna < (colunas - 1))
				this.fila_adjacencia.push(new posicionamento({linha: this.posicionamento.linha,coluna: this.posicionamento.coluna + 1}));
			
			if(this.posicionamento.linha < (linhas - 1))
				this.fila_adjacencia.push(new posicionamento({linha: this.posicionamento.linha + 1,coluna: this.posicionamento.coluna}));

			if(this.posicionamento.coluna > 0)
				this.fila_adjacencia.push(new posicionamento({linha: this.posicionamento.linha,coluna: this.posicionamento.coluna - 1}));
		}
	}
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
var linhas = 20;
var colunas = 20;
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------

var mapa = [];
var conjunto_aberto = [];
var conjunto_fechado = [];
var id_increment = 0;
var rota = [];
var casa = null;
var fileiraAmbiente = [];

//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function bloqueio(ponto){
	
	var valor = null;
	
	if(ponto == 1)
		valor = 3;
	
	else if(ponto == 2)
		valor = 8;
	
	else if(ponto == 3)
		valor = 14;
	
	else if(ponto == 4)
		valor = 20;
	
	else if(ponto == 5)
		valor = 30;
	
	return valor;
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function reiniciarVariaveis(){
	
	for(var i = 0; i < conjunto_aberto.length; i++){
		conjunto_aberto[i].reiniciar();
	}
	conjunto_aberto = [];
	
	for(var i = 0; i < conjunto_fechado.length; i++){
		conjunto_fechado[i].reiniciar();
	}
	
	conjunto_fechado = [];
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function setup(){
	
	var canv = createCanvas(600,600);
	
	canv.parent("container-mapa");
	background(50);
	altura_bloco = height / linhas;
	largura_bloco = width / colunas;
	
	for(var i = 0; i < linhas; i++){
		mapa[i] = [];
		
		for(var j = 0; j < colunas; j++){
			mapa[i][j] = new no({
				posicionamento: new posicionamento({
					linha: i,
					coluna: j
				})
			});
		}
	}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------	
	var aux = [];
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------	
	var proximoCasa = 0;
	
	for(var i = 0; i < fileiraAmbiente.length; i++){
		if(manhattan(casa, fileiraAmbiente[i]) < manhattan(casa, fileiraAmbiente[proximoCasa]))
			proximoCasa = i;
	}
	aux.push(fileiraAmbiente[proximoCasa]);
	deletarItemVetor(fileiraAmbiente, fileiraAmbiente[proximoCasa]);
	
	while(fileiraAmbiente.length > 0){
		var comercio_atual = aux[aux.length - 1];
		var comercio_mais_perto = 0;
		
		for(var i = 0; i < fileiraAmbiente.length; i++){
			if(manhattan(comercio_atual, fileiraAmbiente[i]) < manhattan(comercio_atual, fileiraAmbiente[comercio_mais_perto]))
				comercio_mais_perto = i;
		}
		aux.push(fileiraAmbiente[comercio_mais_perto]);
		deletarItemVetor(fileiraAmbiente, fileiraAmbiente[comercio_mais_perto]);
	}
	
	fileiraAmbiente = aux;
	
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function buscar(){
	inicio = casa;
	meta = fileiraAmbiente[0];
	conjunto_aberto.push(inicio);
	
	if( ! busca()){
		alert("Não existe solução!");
		return false;
	}

	for(var i = 1; i < fileiraAmbiente.length; i++){
		reiniciarVariaveis();
		inicio = fileiraAmbiente[i - 1];
		meta = fileiraAmbiente[i];
		conjunto_aberto.push(inicio);
		if( ! busca()){
			alert("Não existe solução!");
			return false;
		}
	}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
async function projetarRota(){
	
	for(var i = 0; i < rota.length; i++){
		
		for(var j = rota[i].length - 1; j >= 0; j--){
			rota[i][j].projetar({cor:color(66, 217, 102)});
			console.log("F: "+rota[i][j].f);
			console.log("G: "+rota[i][j].g);
			console.log("H: "+rota[i][j].h);
			console.log("\n\n");
			await sleep(500);
		}
	}
	
	swal({
			title: "Parábens, você passou por todas as fases!",
			icon: "success",
			closeOnClickOutside: false,
			buttons: {
				confirm: {
					text: "Voltar ao menu principal",
					value: true,
					visible: true,
					closeModal: true
				}
			}
		}).then(function(value){
			window.location.href = 'Principal.html';
		});
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
	reiniciarVariaveis();
	inicio = fileiraAmbiente[fileiraAmbiente.length - 1];
	meta = casa;
	conjunto_aberto.push(inicio);
	if( ! busca()){
		alert("Não existe solução!");
		return false;
	}
	projetarRota();
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function manhattan(no1, no2){
	return abs(no1.posicionamento.coluna - no2.posicionamento.coluna) + abs(no1.posicionamento.linha - no2.posicionamento.linha);
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function deletarItemVetor(vet, el){
	
	for(var i = vet.length - 1; i >= 0; i--){
		if(vet[i] == el)
			vet.splice(i, 1);
	}
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
function gerarRota(noNovo){
	
	var aux = noNovo;
	rota.push(new Array());
	
	while(aux.antecessor){
		rota[rota.length - 1].push(aux.antecessor);
		aux = aux.antecessor;
	}
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------

function busca(){
	objetivoConcluido = false;
	
	while(conjunto_aberto.length > 0){
		var menor_f = 0;
		
		for(var i = 0; i < conjunto_aberto.length; i++){
			if(conjunto_aberto[i].f < conjunto_aberto[menor_f].f){
				menor_f = i;
			}
		}
		
		var noNovo = conjunto_aberto[menor_f];
		
		if(noNovo === meta){
			objetivoConcluido = true;
			gerarRota(noNovo);
			break;
		}

		deletarItemVetor(conjunto_aberto, noNovo);
		noNovo.dentro_conjunto_aberto = false;
		conjunto_fechado.push(noNovo);
		noNovo.dentro_conjunto_fechado = true;
	
		for(var i = 0; i < noNovo.fila_adjacencia.length; i++){
			
			var posicionamento = noNovo.fila_adjacencia[i];
			var no_vizinho = mapa[posicionamento.linha][posicionamento.coluna];
			
			if(no_vizinho.dentro_conjunto_fechado
			|| no_vizinho.obstaculo)
				continue;

			var temp_g = noNovo.g + no_vizinho.valor;
			
			if(no_vizinho.dentro_conjunto_aberto)
			{
				if(temp_g < no_vizinho.g)
					no_vizinho.g = temp_g;
			}
			
			else{
				no_vizinho.g = temp_g;
				conjunto_aberto.push(no_vizinho);
				no_vizinho.dentro_conjunto_aberto = true;
			}

			no_vizinho.h = manhattan(no_vizinho, meta);
			no_vizinho.f = no_vizinho.g + no_vizinho.h;
			no_vizinho.antecessor = noNovo;
		}
	}

	return objetivoConcluido;
}
//------------------------------------------------------------------------------------------//--------------------------------------------------------------------------------
$(document).ready(function(){
	$("#buscar").on("click", function(){
		buscar();
		$("#buscar").unbind();
	});

});