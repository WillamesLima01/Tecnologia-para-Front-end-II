var altura =[];
var sexo = [];
var soma = 0;
var contador = 0;
var qtdmulher = 0;
var maioraltura = 0;
var menoraltura = 3.00;
var resultado = 0;

for (var i = 1; i <= 15; i++){
    altura[i]= prompt("Informe sua altura:");    
    sexo[i]= prompt("Informe seu sexo:");    
}   

for (var i = 1; i <= 15; i++){
    
    if (altura[i] > maioraltura){
        maioraltura = altura[i];
    } else {
       if (menoraltura > altura[i]) {
            menoraltura = altura[i]
       } 
    }

    if (sexo[i] == "M" && sexo[i] == "m"){
        soma = soma + altura[i];
        contador = contador + 1;

    }else {
        qtdmulher = qtdmulher + 1;
    }
}

resultado = soma/contador;

alert(maioraltura);
alert(menoraltura);
alert(resultado)