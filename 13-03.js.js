let soma= 0;
for(let i=1; i<=10; i++){
    let preco= Number (prompt(`Digite o preco do produto ${i}: `));
    soma= soma+preco
}
console.log(`A soma dos produtos é: ${soma}`)