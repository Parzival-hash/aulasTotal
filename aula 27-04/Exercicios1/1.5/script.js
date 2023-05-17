let b1 = parseInt(prompt("Insira a nota referente ao bimestre 1:"))
let b2 = parseInt(prompt("Insira a nota referente ao bimestre 2:"))
let b3 = parseInt(prompt("Insira a nota referente ao bimestre 3:"))
let b4 = parseInt(prompt("Insira a nota referente ao bimestre 4:"))

let media = (b1 + b2 + b3 + b4) /4

if(media >= 7){
    alert("Aluno Aprovado com média de: " +media)
}else{
    alert("Aluno Reprovado com média de: " +media)
}