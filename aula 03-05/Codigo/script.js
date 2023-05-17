

function teste(){
    let iptValor1 = parseInt(document.querySelector("#iptValor1").value)
// console.log(iptValor1)
    let iptValor2 = parseInt(document.querySelector("#iptValor2").value)
// console.log(iptValor2)

let valorMenor
let valorMaior
if(iptValor1 < iptValor2){
    valorMenor = iptValor1
    valorMaior = iptValor2
}

for(let i = valorMenor; i <= valorMaior; i++){
     console.log(i)
}
}