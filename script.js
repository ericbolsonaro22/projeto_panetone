function calcular() {  
    const quantidade = parseInt(document.getElementById("quantidade").value);  

    // Defina os preços dos ingredientes (preços reais e quebrados)  
    const precosIngredientes = {  
        "Ovo": 2.35,               // Preço por unidade de ovo  
        "Farinha de aveia": 0.017,   // R$ 17,00 / kg = R$ 0,017 / g  
        "Farinha de amêndoa": 0.043,   // R$ 43,00 / kg = R$ 0,043 / g  
        "Whey protein": 1.12,        // R$ 1,12 / scoop (preço médio)  
        "Leite sem lactose": 0.009   // R$ 9,00 / litro = R$ 0,009 / ml  
    };  

    // Defina as quantidades dos ingredientes (para 400g)  
    const ingredientesBase = {  
        "Ovo": 3,  
        "Farinha de aveia": 120,
        "Farinha de amêndoa": 96,
        "Whey protein": 60,
        "Leite sem lactose": 124 
    };  

    let custoIngredientes = 0;  
    for (let ingrediente in ingredientesBase) {  
        custoIngredientes += ingredientesBase[ingrediente] * precosIngredientes[ingrediente];  
    }  

    let valorPanetone = 150.00 + 0.78;

    let valorTotal = valorPanetone * quantidade;  

    document.getElementById("valor").textContent = `R$ ${valorTotal.toFixed(2)}`;  

    const listaIngredientes = document.getElementById("ingredientes");  
    listaIngredientes.innerHTML = "";

    for (let ingrediente in ingredientesBase) {  
        let quantidadeIngrediente = ingredientesBase[ingrediente] * quantidade;  

        let quantidadeFormatada;  
        let unidade;  
        if (ingrediente === "Ovo") {  
            quantidadeFormatada = quantidadeIngrediente;  
            unidade = " unidade(s)";  
        } else if (ingrediente === "Leite sem lactose") {  
            quantidadeFormatada = quantidadeIngrediente.toFixed(2);  
            unidade = " ml";  
        } else {  
            quantidadeFormatada = quantidadeIngrediente.toFixed(2);  
            unidade = " g";  
        }  
        let itemLista = document.createElement("li");  
        itemLista.textContent = `${ingrediente}: ${quantidadeFormatada}${unidade}`;  
        listaIngredientes.appendChild(itemLista);  
    }  
}  

function reiniciar() {  
    document.getElementById("quantidade").value = "1";
    document.getElementById("valor").textContent = "R$ 0,00";
    document.getElementById("ingredientes").innerHTML = "";
}  
