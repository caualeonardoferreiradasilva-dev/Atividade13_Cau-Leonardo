let par= "";
let impar= "";
for(let i=1; i<=8; i++){
    let num= Number (prompt(`Digite o ${i}º número: `));
    if(num%2===0){
        par+=num+" ";
    }
    else{ impar+=num+" "};
}
console.log(`Os números pares são : ${par}`);
console.log(`Os números ímapres são: ${impar}`);