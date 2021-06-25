let res = window.document.getElementById('saida')
let numero = window.document.getElementById('txtNumero')
let lista = window.document.getElementById('selecao')
let numArray = []

function focar() {
  numero.focus()
}

function verificar(n, l) {
  if (n < 1 || n > 100) {
    return false
  }
  else if (l.indexOf(Number(n)) == -1) {
    return true
  }
  else {
    return false
  }
}

function adicionar() {
  if (verificar(numero.value, numArray)) {
    numArray.push(Number(numero.value))
    let opcao = window.document.createElement('option')
    opcao.text = `Valor ${numero.value} adicionado!`
    lista.appendChild(opcao)
    res.innerText = ''
  }
  else {
    alert('[ERRO] Valor inválido ou já existente!')
  }

  numero.value = ''
  numero.focus()
}

function finalizar() {
  if (numArray.length == 0) {
    alert('[ERRO] Adicione algum valor primeiro!')
  }
  else {
    let total = numArray.length
    let maior = numArray[0]
    let menor = numArray[0]
    let contas = [0]

    for (const i in numArray) {
      contas[0] += numArray[i]

      if (maior < numArray[i]) {
        maior = numArray[i]
      }
      if (menor > numArray[i]) {
        menor = numArray[i]
      }
    }

    contas[1] = contas[0] / total

    res.innerText = ''
    res.innerHTML = `<p>Ao todo temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${contas[0]}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${Math.floor(contas[1])}.</p>`
  }
}
