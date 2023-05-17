const aluno = ["aluno 1", "aluno 2", "aluno 3"]

let containerAlunos = document.querySelector(".nomesAlunos")


aluno.forEach(alunos =>{
    containerAlunos.innerHTML += `<br> ${alunos}`
})







function adicionarAluno(){
    
    let AlunoNovo = document.querySelector("#alunoNovo").value
    
    console.log(AlunoNovo)
    // containerAlunos.innerHTML = ''
    
    containerAlunos.innerHTML += `<br> ${AlunoNovo}`
    
    aluno.push(AlunoNovo)
    
 
}



let fundoGradiente = true

function mudarCor() {
  var body = document.body;
  console.log(body)
  
  if (fundoGradiente) {
    body.style.background = '#18181b';
    fundoGradiente = false
  } else {
    body.style.background = 'linear-gradient(90deg, rgba(255,111,0,1) 0%, rgba(255,0,0,1) 100%)';
    fundoGradiente = true
  }

}



const lista = [1,2,3,4,5]

let cardapio = {
    100: { nome: "Cachorro Quente", preco: 1.20 },
    101: { nome: "Bauru Simples", preco: 1.3 }
}

console.log(cardapio[100].nome)