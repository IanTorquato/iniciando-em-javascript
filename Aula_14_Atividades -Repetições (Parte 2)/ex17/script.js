function calcular() {
  let numero = window.document.getElementById('txtNumero')

  if (numero.value.length == 0) {
    alert('[ERRO] Digite algum número!')
  }
  else {
    let res = window.document.getElementById('saida')
    res.innerText = ''

    let optionTab = window.document.createElement('select')
    optionTab.setAttribute('id', 'slcTabuada')
    optionTab.setAttribute('size', '10')

    res.appendChild(optionTab)

    let selectTab = window.document.getElementById('slcTabuada')

    selectTab.innerText = ''

    for (let i = 1; i <= 10; i++) {
      let optionTab = window.document.createElement('option')
      optionTab.setAttribute('id', `valor${i}`)
      optionTab.setAttribute('value', `v${i}`)

      let resultado = Number(numero.value) * i

      if (i < 10) {
        optionTab.innerText = `${numero.value} x 0${i} = ${resultado}`
      }
      else {
        optionTab.innerText = `${numero.value} x ${i} = ${resultado}`
      }
      selectTab.appendChild(optionTab)
    }
  }
}
