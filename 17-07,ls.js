let numero= Number (prompt("Digite um número inteiro: "));
let termos= Number (prompt("Quantos termos você quer ver? "));
let a= 0;
let b=1;
for(let i=1; i<=termos; i++){
    console.log(a);
    let prox= a+b;
      a = b;
    b = prox;
}