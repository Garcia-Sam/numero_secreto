function    verficaSeOChutePossuiUmValorValido(chute)    {
    const   numero  =   +chute

    if  (chuteForInvalido(numero)){
        elementoChute.innerHTML +=  '<div>Valor Inváilido</div>'
    }

    if  (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML +=  `
        <div>Valor Inválido: 
        Fale um número entre ${menorValor} e ${maiorValor}.</div>
        `
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!!</h2>
        <h3>O número secreto era ${numeroSecreto}.</h3>
        `
    }
}

function    chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero   >   maiorValor  ||  numero  <   menorValor
}