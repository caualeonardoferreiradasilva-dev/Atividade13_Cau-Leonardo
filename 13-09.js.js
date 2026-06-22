let alfa = 150;
let beta = 110;
let anos = 0;

while(beta <= alfa){
    alfa += 4;
    beta += 9;
    anos++;
}

console.log(`Vai ser necessário ${anos} anos para a empresa Beta ultrapassar a Alfa.`);
console.log(`Alfa: ${alfa} funcionários`);
console.log(`Beta: ${beta} funcionários`);