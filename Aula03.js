var altura =[];
var sexo = [];
var soma = 0;
var contador = 0;
var qtdmulher = 0;
var maioraltura = 0;
var menoraltura = 3.00;
var resultado = 0;

for (var i = 1; i <= 15; i++){
    altura[i]= parseFloat(prompt("Informe sua altura: EX:1.70"));    
    sexo[i]= prompt("Informe seu sexo: Ex: M, F");    
}   

for (var i = 1; i <= 15; i++){
    
    if (altura[i] > maioraltura){
        maioraltura = (altura[i]).toFixed(2);
    } else {
       if (menoraltura > altura[i]) {
            menoraltura = (altura[i]).toFixed(2);
       } 
    }

    if (sexo[i] == 'M'){
        soma = soma + altura[i];
        contador = contador + 1;

    }else {
        qtdmulher = qtdmulher + 1;
    }
}

resultado = (soma/contador).toFixed(2);

alert("A maior altura é : " + maioraltura + "m" + "\n" + "A menor altura é : " + menoraltura + "m" +
        "\n" + "A Média de altura dos homens é : " + resultado + "m" + "\n" +
        "O números de mulheres é (são) : " + qtdmulher);