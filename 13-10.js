function verprimo(num){
    let divi= 0;
     for(let i = 1; i <= num; i++){
        if(num % i === 0){
            divi++;
        }
    }
if (divi===2){
    return true;
}
else{
        return false;
    }
}
let num= Number (prompt("Digite um número: "))

if(verprimo(num)){
    console.log( 'é primo')}
    else{
        console.log("não é primo")
    }
