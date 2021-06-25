function contador() {
  let resultado = window.document.getElementById('saida')

  let ini = window.document.querySelector('input#txtInicio')
  let fin = window.document.getElementById('txtFim')
  let pul = window.document.getElementById('txtPulo')

  let inicio = Number(ini.value)
  let final = Number(fin.value)
  let pulo = Number(pul.value)

  if (fin.value.length == 0) {
    alert('[ALERTA] O campo "Fim" não pode ser vazio!')
  }
  else {

    if (ini.value.length == 0) {
      alert('Campo "Início" vazio. Considerando "1" como valor.')
      ini.value = '1'
    }
    if (pul.value.length == 0 || pul.value == '0') {
      alert('Campo "Pulo" vazio ou com valor igual ou menor que "0". Considerando "1" como valor.')
      pulo = 1
      pul.value = '1'
    }

    resultado.style.font = 'normal 14pt verdana'
    resultado.innerHTML = 'Contando:<br>'

    if (inicio < final) {
      for (let i = inicio; i <= final; i += pulo) {
        resultado.innerText += ` ${i} \u{27A1}`
      }
    }
    else if (inicio > final) {
      for (let i = inicio; i >= final; i -= pulo) {
        resultado.innerText += ` ${i} \u{27A1}`
      }
    }
    else {
      resultado.innerHTML = `Início e Fim iguais (${inicio}).<br>Nenhum cálculo necessário.`
    }
    resultado.innerHTML += `\u{2714}`
  }
}
