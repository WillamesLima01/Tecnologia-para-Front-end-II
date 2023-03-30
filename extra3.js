var array = [1,2,3,4];

if (array.length === 0){
    console.log("É obrigatorio informar valores numéricos válidos!")
}else{
    array.forEach(function(elemento){
        console.log(elemento);
    });//Percorre a lista mostrando os valores
    
    var num2 = array.map(function(elemento){
        return elemento*2;
    });//Percorre o array mutiplicando por 2 gerando um novo array
    
    num2.forEach(function(elemento){
        console.log(elemento);
    });//Percorre a lista mostrando os valores
}