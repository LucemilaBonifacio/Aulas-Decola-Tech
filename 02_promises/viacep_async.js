async function buscarCEP(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    const resposta = await fetch(url);
    const json = await resposta.json();

    return json;
}

// consumindo nossa função
async function executar() {
    console.log('-------ANTES------');
    let resultado = await buscarCEP('53260100');
    console.log(resultado);
    console.log('------DEPOIS-----');
}
executar();
