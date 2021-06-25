function verificar() {
  let data = new Date()
  let anoAtual = data.getFullYear()

  let anoTeste = window.document.getElementById('txtano')

  if (anoTeste.value.length == 0 || anoTeste.value > anoAtual) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }
  else {
    let resp = window.document.getElementById('res')
    let sexo = window.document.getElementsByName('radSex')
    let gênero = ''

    let idade = anoAtual - Number(anoTeste.value)

    let img = window.document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sexo[0].checked) {
      gênero = 'Homem'

      if (idade < 4) {
        img.setAttribute('src', 'fotoH1.png')
      }
      else if (idade < 8) {
        img.setAttribute('src', 'fotoH2.png')
      }
      else if (idade < 13) {
        img.setAttribute('src', 'fotoH3.png')
      }
      else if (idade < 16) {
        img.setAttribute('src', 'fotoH4.png')
      }
      else if (idade < 23) {
        img.setAttribute('src', 'fotoH5.png')
      }
      else if (idade < 38) {
        img.setAttribute('src', 'fotoH6.png')
      }
      else if (idade < 50) {
        img.setAttribute('src', 'fotoH7.png')
      }
      else if (idade < 65) {
        img.setAttribute('src', 'fotoH8.png')
      }
      else if (idade < 80) {
        img.setAttribute('src', 'fotoH9.png')
      }
      else if (idade < 95) {
        img.setAttribute('src', 'fotoH10.png')
      }
      else if (idade < 131) {
        img.setAttribute('src', 'fotoH11.png')
      }
      else {
        img.setAttribute('src', 'fotoH12.png')
      }
    }
    else {
      gênero = 'Mulher'

      if (idade < 4) {
        img.setAttribute('src', 'fotoM1.png')
      }
      else if (idade < 8) {
        img.setAttribute('src', 'fotoM2.png')
      }
      else if (idade < 13) {
        img.setAttribute('src', 'fotoM3.png')
      }
      else if (idade < 17) {
        img.setAttribute('src', 'fotoM4.png')
      }
      else if (idade < 25) {
        img.setAttribute('src', 'fotoM5.png')
      }
      else if (idade < 35) {
        img.setAttribute('src', 'fotoM6.png')
      }
      else if (idade < 50) {
        img.setAttribute('src', 'fotoM7.png')
      }
      else if (idade < 65) {
        img.setAttribute('src', 'fotoM8.png')
      }
      else if (idade < 80) {
        img.setAttribute('src', 'fotoM9.png')
      }
      else if (idade < 95) {
        img.setAttribute('src', 'fotoM10.png')
      }
      else if (idade < 131) {
        img.setAttribute('src', 'fotoM11.png')
      }
      else {
        img.setAttribute('src', 'fotoM12.png')
      }
    }

    resp.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
    if (idade >= 131) {
      resp.innerHTML = `Fóssil de ${gênero.toLowerCase()} com ${idade} anos!`
    }
    resp.appendChild(img)
  }
}
