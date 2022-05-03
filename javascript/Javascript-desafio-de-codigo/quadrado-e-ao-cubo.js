
const linhas = 5;
const limit = 5;

let output = []

for (let i = 1; i <= limit; i++) {
  output.push(`${i} ${i**2} ${i**3}`);

};



console.log(output.join("\n"))