function meuImc() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.result');

    form.addEventListener('submit', (evento)=> {
        evento.preventDefault();
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        const imc = Number.parseFloat(peso / (altura* altura));

        if (!peso) {
            resultado.innerHTML = 'Peso inválido';
            return;
        }
        if (!altura) {
            resultado.innerHTML = 'Altura inválida';
            return;
        }
        
        if (imc < 18.5) {
        resultado.innerHTML = `${imc.toFixed(2)} Abaixo do peso`;
        } else if(imc >= 18.5 && imc<= 24.9) {
            resultado.innerHTML = `${imc.toFixed(2)} Peso normal`;
        } else if(imc >= 25 && imc<= 29.9) {
            resultado.innerHTML = `${imc.toFixed(2)} Sobrepeso`;
        } else if(imc >= 30 && imc<= 34.9) {
            resultado.innerHTML = `${imc.toFixed(2)} Obesidade grau 1`;
        } else if(imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `${imc.toFixed(2)} Obesidade grau 2`;
        } else {
            resultado.innerHTML = `${imc.toFixed(2)} Obesidade grau 3`;
        }
});

}

meuImc();