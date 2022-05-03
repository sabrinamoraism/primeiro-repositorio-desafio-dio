
const a = -7
const b = -3
console.log(a);
console.log(b);

q = parseInt(a / b);

r = a - (b * q);
console.log(r)
if (r < 0) {
  r += Math.abs(b);
  
  q = (a-r)/b;    //escreva sua lógica aqui
}
console.log(q + " " + r);


const linhas = 5;
const limit = 5;

let output = []

for (let i = 1; i <= limit; i++) {
  output.push(`${i} ${i**2} ${i**3}`);

};
