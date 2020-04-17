let num = [5, 8, 4, 2, 7, 1, 6, 3]
console.log(`O vetor tem ${num.length} valores!`)
console.log(`O primei e o último valor são: ${num[0]} e ${num[7]}`)
console.log(`o array ordenano é: ${num.sort()}`)

let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Mostrar o vetor:

/* Antes
for (let i = 0; i < numero.length; i++)
{
	console.log(numero[i])
}
*/

// Agora
for (let i in numero)
{
	console.log(numero[i])
}

console.log(numero.indexOf(7))