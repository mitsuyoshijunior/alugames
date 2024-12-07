let jogosAlugados = 0

function exibirQtdDeJogosAlugados() {
    alert(`Você já alugou ${parseInt(jogosAlugados)} jogos!`)
}

function alterarStatus(id) {

    let gameClicado = document.querySelector(`#game-${id}`)
    let botao = gameClicado.querySelector('.dashboard__item__button')
    let imagem = gameClicado.querySelector('.dashboard__item__img')
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');


    if (botao.classList.contains('dashboard__item__button--return') || imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            botao.classList.remove('dashboard__item__button--return')
            botao.textContent = 'Alugar'
            imagem.classList.remove('dashboard__item__img--rented')
            jogosAlugados--
        }
    } else {
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver'
        imagem.classList.add('dashboard__item__img--rented')
        jogosAlugados++
    }

    exibirQtdDeJogosAlugados()

}