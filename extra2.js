var valores = [];

for (var i = 1; i <= 5; i++) {
    valores = parseFloat(prompt("Informe os números desejados: "));
}

if (valores.length === 0){
    alert("É obrigatorio informar pelo menos um numero!")
} else {
    valores.map(function(vlr){
        alert(vlr*2);
    });
}