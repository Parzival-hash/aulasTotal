// Escrever um algoritmo que leia um valor para
//         uma variável N de 1 a 10 e calcule a tabuada de
//         N. Mostre a tabuada na forma: 0 x N = 0, 1 x N =
//         1N, 2 x N = 2N, ..., 10 x N = 10N


let numero = parseInt(prompt("insira um numero"))


for( let i = 1; i < 11; i++){
    console.log(`${numero} x ${i} = ${numero*i}`)
}