// map vs forEach

const array = [1, 2, 3, 4, 5];

let newArray = [];
 array.forEach((item) => newArray.push(item * 2));
 console.log(newArray)

console.log (array.map((item)=> item * 2));

// filter

const frutas = ['maça nacional', 'maça fuji', 'laranja', 'abacaxi', 'maça verde', 'melão', 'banana'];
console.log(frutas.filter((fruta)=> fruta.includes('maça')));

// reduce
