function verificarIdade(idade) {
    if(typeof idade !== 'string'){
    let mensagem = `Idade: ${idade} anos`

    console.log(mensagem)

    //if, else

    if (idade >= 60) {
        console.log('Você é idoso')
    } else if (idade >= 12 && idade <= 18) {
        console.log('Você é adolescente')
    } else if (idade < 12) {
        console.log('Você é uma criança');
    } else {
        console.log('Adulto');
    }
    } else {
        console.log('Por favor informar a idade no formato de número!');
        
    }
}

verificarIdade(60)
verificarIdade(18)
verificarIdade(12)