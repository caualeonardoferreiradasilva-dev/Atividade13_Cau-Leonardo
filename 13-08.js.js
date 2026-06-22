let num = Number(prompt("Digite um número:"));
let maior = num;
let menor = num;

while(num != 0){
if(num > maior){
        maior = num;
    }

if(num < menor){
        menor = num;
    }

    num = Number(prompt("Digite outro número:"));
}

console.log(`O maior número digitado foi ${maior}`);
console.log(`O menor número digitado foi ${menor}`);