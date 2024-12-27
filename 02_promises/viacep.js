let cep = '53260100';
let url = `https://viacep.com.br/ws/${cep}/json/`;

// fetch(url)
//     .then(s => s.json())
//     .then(s => console.log(s));

// Se quiser trazer apenas algumas propriedades do objeto JSON
fetch(url)
    .then(s => s.json())
    .then(s => {
        console.log(s.logradouro);
        console.log(s.bairro);
        console.log(s.uf);
        console.log(s.localidade);
    });