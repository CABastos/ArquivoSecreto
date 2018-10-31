// Variaveis globais
let questoes = [{
	pergunta: "4 + 6 / 2",
	resultado: 7
}, {
	pergunta: "1 + 2 * 4",
	resultado: 9
},{
	pergunta: "10 + 6 / 6",
	resultado: 11
}, {
	pergunta: "35 / 7",
	resultado: 5
},{
	pergunta: "4 * 6 / 2",
	resultado: 12
}, {
	pergunta: "10 - 2 * 3",
	resultado: 4
},{
	pergunta: "400 - 105",
	resultado: 295
}, {
	pergunta: "1000 + 145",
	resultado: 1145
},{
	pergunta: "15 * 4 / 2",
	resultado: 30
}, {
	pergunta: "3 + 4 - 6",
	resultado: 1
}/*,{
	pergunta: "4 + 6 / 2",
	resultado: 7
}, {
	pergunta: "1 + 2 * 3",
	resultado: 10
},{
	pergunta: "4 + 6 / 2",
	resultado: 7
}, {
	pergunta: "1 + 2 * 3",
	resultado: 10
},{
	pergunta: "4 + 6 / 2",
	resultado: 7
}, {
	pergunta: "1 + 2 * 3",
	resultado: 10
}*/];


let aleatorio = Math.floor(Math.random() * questoes.length);
let tempo = 5;
let pontos = 0;
let jogando = false;
let i=0;
let n=2;

//Variaveis DOM

let resposta = document.querySelector("#name");
let tempo_restante = document.querySelector('#segundos_restantes');
let pontos_atuais = document.querySelector('#pontuacao_atual');
let pergunta_atual = document.querySelector('#calculo_atual');
let iniciar_btt = document.querySelector('#ButRes');
let num_qts = document.querySelector('#num_questoes');

resposta.addEventListener('keyup', function(e){
	if(e.keyCode === 13){
		validador();
		pergunta_aleatoria();
		i++;
		num_qts.innerHTML = n + '/10'
		n++
		if(i==10) {
			finalizar();
		}
	}
});

function contador(){
if(jogando === true) {
	if(tempo > 0){
		tempo--;
		tempo_restante.innerHTML = tempo;
		if(tempo < 3) {
			tempo_restante.style.color = 'red';
		}
		if(tempo <4 && tempo > 2) {
			tempo_restante.style.color = 'goldenrod';
		}
	}
	else{
		pergunta_aleatoria();
		num_qts.innerHTML = n + '/10';
		n++;
		i++;
		if(i==10) {
			finalizar();
		}
	}
}
}

function pergunta_aleatoria(){
	aleatorio = Math.floor(Math.random() * questoes.length);
	pergunta_atual.innerHTML = questoes[aleatorio].pergunta;
	resposta.value = '';
	tempo = 5;
	tempo_restante.innerHTML = tempo;
	tempo_restante.style.color = '#2196f3';
}

function iniciar() {
	i = 0;
	n = 2;
	pontos = 0;
	jogando = true;
	pergunta_aleatoria();
	setInterval(contador, 1000);
	iniciar_btt.style.display = 'none';
	num_qts.style.display = 'block';
}
iniciar_btt.addEventListener('click', iniciar);

function finalizar() {
	jogando = false;
	pergunta_atual.innerHTML = 'x + y = z';
	iniciar_btt.style.display = 'block';
	pontos_atuais.innerHTML = '0';
	alert('Parabens, sua pontuacao foi de: ' + pontos + ' pontos');
	num_qts.style.display = 'none';
	n=1;
	num_qts.innerHTML = n + '/10';
}

function validador() {
	if(resposta.value == questoes[aleatorio].resultado) {
		pontos += 10;
		pontos_atuais.innerHTML = pontos;
	}
}
