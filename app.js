// Definição de Variáveis
let listaDeNumerosSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1 ;

// função que exibe texto na tela , ao receber como parametro a tag html e texto que será colocado no html
function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//função que padroniza a exibição da mensagem inicial do jogo
function exibirMensagemInicial(){
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', `Escolha um número entre 1 e 10`);
}
exibirMensagemInicial();

// função que verifica os chutes realizados pelo jogodor através das condições com IF e ELSE
function verificarChute(){
    let palpite = document.querySelector('input').value;
    if (palpite == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentaivas = `Você descobriu o número secreto! Com ${tentativas} ${palavraTentativa}`
        exibirTexto('h1', 'Acertou!');
        exibirTexto('p',mensagemTentaivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (palpite > numeroSecreto){
            exibirTexto('p','O número secreto é menor');
        } else {
            exibirTexto('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

// função para gerar um número aleátorio para o jogo
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

// função que limpa o campo onde é inserido o palpite do jogo
function limparCampo(){
    palpite = document.querySelector('input');
    palpite.value = '';
}

// função para criar um novo jogo
function novoJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}