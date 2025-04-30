//2 - Crie duas função que calcule a soma de 3 números e exiba no console o resultado e a média

function soma(n1, n2, n3){
    const soma = n1+n2+n3
    return soma;
}

function media(n1, n2, n3){
  const adicao = soma(n1, n2, n3)
  const memdia = adicao/3

  return "A soma é: " + adicao + " e a média é: " + media;
}

console.log(media(234, 567, 890));