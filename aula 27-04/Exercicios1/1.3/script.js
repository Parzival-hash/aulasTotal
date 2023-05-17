// Faça um algoritmo que leia uma variável e some 5
// caso seja par ou some 8 caso seja ímpar, imprimir o
// resultado desta operação.

let numero = parseInt(prompt("Favor insira um numero inteiro"))

if(numero%2 == 0){
    let par = numero + 5

    alert("Por ser par somamos mais 5, resultando no valor " + par + ".")
}else{
    let impar = numero + 8

    alert("Por ser impar somamos mais 8, resultando no valor " + impar + ".")

}