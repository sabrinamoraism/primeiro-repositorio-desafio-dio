const lista = [
    {name:'arroz', preco:3.99},
    {name:'feijao', preco:7.8},
    {name:'file de frango', preco:18.9},
    {name:'alface', preco:0.99},
    {name:'tomate', preco:3.99},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(callbackfn, saldoDisponivel);
}

function callbackfn(prev, current, index){
    console.log('rodada', index + 1);
    console.log({prev});
    console.log({current});
    return prev - current.preco;
};

console.log(calculaSaldo(saldoDisponivel,lista));