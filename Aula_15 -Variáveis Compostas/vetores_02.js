let array = []

for (let i = 0; i < 10; i++) {
  array[i] = Math.floor(Math.random() * 100 + 1)
}

console.log(`Array sem ordenar: ${array}`)

console.log(`Array ordenado: ${array.sort()}`)

array.push(10)
console.log(`Array sem ordenar: ${array}`)

console.log(array.indexOf(10))
