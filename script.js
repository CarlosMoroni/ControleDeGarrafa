var total = 0.0;

const capturaCapacidadeGarrafa = () => {
    return document.querySelector('main section input#capacidade').value;
}

let botao = document.querySelector('main section input#beber');
botao.addEventListener('click', () => {
    let capacidade = capturaCapacidadeGarrafa();
    let valorLitros = capacidade / 1000
    total += valorLitros
    atualizaVisor();
})

const atualizaVisor = () => {
    let visor = document.querySelector('main section.acoes div p#total');
    visor.innerText = total.toString() + ' L';
}