let alturaCampo = document.getElementById('altura');

alturaCampo.addEventListener('input', () => { 

    let valor = alturaCampo.value.replace('.', '');
    if (valor.length === 3) {
        alturaCampo.value = valor[0] + '.' + valor[1] + valor[2];
    }
});

function calcularImc() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let resultadoContainer = document.getElementById('resultado');

    if (!peso || !altura) {
        alert('Insira peso e altura válidos');
    } else {
    let resultadoImc = (peso / (altura * altura)).toFixed(2);
        if (resultadoImc < 18.5) {
            exibirTexto(resultadoImc, 'Abaixo do normal');
            resultadoContainer.classList.add('estado-abaixo');
        } else if (resultadoImc > 18.5 && resultadoImc < 24.9) {
            exibirTexto(resultadoImc, 'Normal');
            resultadoContainer.classList.add('estado-normal');
        } else if (resultadoImc > 25 && resultadoImc < 29.9) {
            resultadoContainer.classList.add('estado-sobrepeso');
        } else if (resultadoImc > 30) {
            exibirTexto(resultadoImc, 'Obesidade');
            resultadoContainer.classList.add('estado-obesidade');
        } 
    }
}

function exibirTexto(valorImc, texto) {
    let valor = document.getElementById('imc-valor');
    let campo = document.getElementById('imc-texto');

    valor.innerHTML = valorImc;
    campo.innerHTML = texto;
}


