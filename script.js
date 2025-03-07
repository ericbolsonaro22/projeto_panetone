function calcularIngredientes() {  
    let raio = parseFloat(document.getElementById('raio').value);  
    let espessura = parseFloat(document.getElementById('espessura').value);  
    
    if (isNaN(raio) || isNaN(espessura) || raio <= 0 || espessura <= 0) {  
        alert("Por favor, insira valores válidos para raio e espessura.");  
        return;  
    }  

    let area = Math.PI * Math.pow(raio, 2);  
    let volume = area * espessura;

    let ingredientesBase = {  
        farinha: 189,  
        agua: 106,  
        azeite: 4,  
        sal: 3.8,  
        fermento: 3.1,  
        acucar: 2.1,  
        ovo: 56  
    };  

    let volumeBase = 353.43;
    let fatorEscala = volume / volumeBase;  

    let ingredientes = {  
        farinha: ingredientesBase.farinha * fatorEscala,  
        agua: ingredientesBase.agua * fatorEscala,  
        azeite: ingredientesBase.azeite * fatorEscala,  
        sal: ingredientesBase.sal * fatorEscala,  
        fermento: ingredientesBase.fermento * fatorEscala,  
        acucar: ingredientesBase.acucar * fatorEscala,  
        ovo: ingredientesBase.ovo * fatorEscala,
    };  

    let resultadosHTML = `<p><strong>Área do Panetone:</strong> ${area.toFixed(2)} cm²</p>`;  
    resultadosHTML += `<p><strong>Volume do Panetone:</strong> ${volume.toFixed(2)} cm³</p>`;  
    resultadosHTML += `<table><tr><th>Ingrediente</th><th>Quantidade (g/ml)</th></tr>`;  
    for (let ingrediente in ingredientes) {  
        resultadosHTML += `<tr><td>${ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}</td><td>${ingredientes[ingrediente].toFixed(2)}</td></tr>`;  
    }  
    resultadosHTML += `</table>`;  
    document.getElementById('resultados').innerHTML = resultadosHTML;  

    gerarGrafico(ingredientes);  
}  

function gerarGrafico(ingredientes) {  
    let ctx = document.getElementById('graficoIngredientes').getContext('2d');  
    let data = {  
        labels: Object.keys(ingredientes),  
        datasets: [{  
            label: 'Quantidade de Ingredientes (g/ml)',  
            data: Object.values(ingredientes),  
            backgroundColor: [  
                'rgba(255, 99, 132, 0.2)',  
                'rgba(54, 162, 235, 0.2)',  
                'rgba(255, 206, 86, 0.2)',  
                'rgba(75, 192, 192, 0.2)',  
                'rgba(153, 102, 255, 0.2)',  
                'rgba(255, 159, 64, 0.2)',  
                'rgba(255, 99, 132, 0.2)'  
            ],  
            borderColor: [  
                'rgba(255, 99, 132, 1)',  
                'rgba(54, 162, 235, 1)',  
                'rgba(255, 206, 86, 1)',  
                'rgba(75, 192, 192, 1)',  
                'rgba(153, 102, 255, 1)',  
                'rgba(255, 159, 64, 1)',  
                'rgba(255, 99, 132, 1)'  
            ],  
            borderWidth: 1  
        }]  
    };  

    if (window.meuGrafico) {  
        window.meuGrafico.destroy();  
    }  

  
    window.meuGrafico = new Chart(ctx, {  
        type: 'bar',
        data: data,  
        options: {  
            responsive: true,  
            plugins: {  
                legend: {  
                    position: 'top',  
                },  
                title: {  
                    display: true,  
                    text: 'Quantidade de Ingredientes para o Panetone'  
                }  
            }  
        }  
    });  
}  

function reiniciar() {  
    document.getElementById('raio').value = '';  
    document.getElementById('espessura').value = '';  
    document.getElementById('resultados').innerHTML = '';  
    let ctx = document.getElementById('graficoIngredientes').getContext('2d');  
    ctx.clearRect(0, 0, 400, 400);
    if (window.meuGrafico) {  
        window.meuGrafico.destroy();
    }  
}  