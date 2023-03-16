function validarDescricao() {
    if (desc.value.trim() === "") {
        desc.style.background = "yellow";
        alert("Preencha a descrição do produto!");
        return false;
    } else {
        desc.style.background = "write";
        return true;
    }
}

function validarQuantidade() {
    var erro = false;
    if (qtd.value.trim() === "") {
        erro = true;
    } else {

        if (Number.isNaN(qtd.valeu) === true) {
            erro = true;
        } else {
            var nQtd = parseInt(qtd.value);
            if (nQtd < 1 || nQtd > 999) {
                erro = true;
            }
        }
    }

    if (erro === true) {
        qtd.style.background = "yellow";
        alert("A quantidade deve ser um número entre 1 e 999!");
    }else {
        qtd.style.background = "write";
    }
    return (!erro);
}

function validarPreco() {
    var erro = false;
    if (unit.value.trim() === "") {
        erro = true;
    } else {
        if (isNaN(unit.value) === true) {
            erro = true;
        } else {
            var nUnit = parseFloat(unit.value);
            if (nUnit <= 0.0) {
                erro = true;
            } else {
                unit.value = nUnit.toFixed(2);
            }
        }
              
    }   
    
    if (erro === true) {
        unit.style.background = "yellow";
        alert("O preço unitário deve ser um número maior que zero!");
    } else {
        unit.style.background = "write";
    }
    return (!erro);
}


function calcular() {             
      if (validarDescricao() && validarQuantidade() && validarPreco()) {        
        var ntotal = parseFloat(unit.value) * parseInt(qtd.value);       
        total.value = ntotal.toFixed(2);
    }
}
