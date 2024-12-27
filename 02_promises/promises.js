let promise = new Promise( (resolve, reject) => {

    let x = Math.random(); // gera um numero entre 0 e 1
    //simulação: valores gerados acima de 0.5 são aceitáveis (válidos).
    //Caso contrário, o valor é inaceitável (inválido)
    if(x > 0.5){
        resolve('Valor calculado:' + x);
    }else {
        reject('Valor inválido:' + x);
    }
});

console.log('-----ANTES DO PROMISE------');
promise
    .then(s => s.toUpperCase())

    .then(s => s.substring(6))

    .then(s => console.log(s))

    .catch(erro => console.error(erro))
    .finally(() => console.log('-----APÓS DO PROMISE------'));
   
//console.log('-----APÓS DO PROMISE------');  