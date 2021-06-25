function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var fundo = window.document.getElementById('corpo')
  var mostrarH = window.document.getElementById('horas')

  var data = new Date()
  var hora = data.getHours()

  mostrarH.innerText = hora + 'h'

  if (hora == 0) {
    msg.innerText = 'Boa Virada!'
    img.src = 'fotomeianoite.png'
    fundo.style.backgroundColor = 'rgb(20, 33, 44)'
  }
  else if (hora < 6) {
    msg.innerText = 'Boa Madrugada!'
    img.src = 'fotomadrugada.png'
    fundo.style.backgroundColor = 'rgb(3, 60, 70)'
  }
  else if (hora < 12) {
    msg.innerText = 'Boa Manhã!'
    img.src = 'fotomanha.png'
    fundo.style.backgroundColor = 'rgb(0, 120, 200)'
  }
  else if (hora == 12) {
    msg.innerText = 'Bom Almoço!'
    img.src = 'fotomeiodia.png'
    fundo.style.backgroundColor = 'rgb(111, 165, 236)'
  }
  else if (hora < 18) {
    msg.innerText = 'Boa Tarde!'
    img.src = 'fototarde.png'
    fundo.style.backgroundColor = 'rgb(109, 201, 243)'
  }
  else if (hora < 24) {
    msg.innerText = 'Boa Noite!'
    img.src = 'fotonoite.png'
    fundo.style.backgroundColor = 'rgb(8, 107, 124)'
  }
  else {
    msg.innerText = 'Há algo de errado com o horário!'
    img.src = 'fotoerro.png'
    fundo.style.backgroundColor = 'rgb(150, 10, 10)'
  }
}
