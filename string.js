let nome = 'Caique'
let sobrenome = 'Lino'

let funcao = 'Professor'

console.log(funcao+':', nome.toUpperCase(), sobrenome.toUpperCase())

let nome_usuario = nome+'.'+sobrenome

console.log(nome_usuario.toLowerCase())

//Interpolação de String
let usuario = `Nome de Usuário:${nome}.${sobrenome}`
console.log (usuario.toLowerCase())
