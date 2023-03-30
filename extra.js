/*<h1 id="titulo">Prova 01</h1>
    
    <script src="extra.js"></script>*/

var numero = parseFloat(prompt("Informe um número inteiro: "));

function processar(numero) {
    if (numero % 2 === 0) {
        return ("é par!");
    } else {
        return ("é ímpar!");        
    }  
}

if (numero < 0) {    
    alert("Informe um valor mair que zero!")    
} else {    
    alert (processar(numero))
}