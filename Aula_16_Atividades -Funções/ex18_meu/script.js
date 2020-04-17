let quantidade = 1

function focar()
{
	let numero = window.document.getElementById('txtNumero')
	numero.focus()
}

function adicionar()
{
	let numero = window.document.getElementById('txtNumero')
	
	if (validar(numero.value) == false)
	{
		alert('[ERRO] Valor inválido ou já pertencente a lista!')
	}
	else
	{
		let quantidadeNum = quantNum()
		
		if (quantidadeNum <= 5)
		{
			let opcoesArray = []
			
			// Código executado na primeira vez que o evento for disparado
			if (window.document.getElementById('selecaoNumeros') == null)
			{
				// Criar elementos Select e Button
				let selecao = window.document.createElement('select')
				let botao = window.document.createElement('button')
				
				// Definir características do Select e do Button
				selecao.setAttribute('id', 'selecaoNumeros')
				selecao.size = '6'
				
				botao.setAttribute('onclick', 'finalizar()')
				botao.innerText = 'Finalizar'
				
				// Criar elementos Option
				for (let i = 0; i <= 5; i++)
				{
					opcoesArray[i] = window.document.createElement('option')
					opcoesArray[i].setAttribute('id', `valor${i}`)
					selecao.appendChild(opcoesArray[i])
				}
				
				// Exibir Select e Button
				let reservSelect = window.document.getElementById('reservadoSelect')
				let reservButton = window.document.getElementById('reservadoButton')
				
				reservSelect.appendChild(selecao)
				reservButton.appendChild(botao)
			}
			
			for (let i = 0; i <= 5; i++)
			{
				opcoesArray[i] = window.document.getElementById(`valor${i}`)
			}
			
			for (let i = 0; i <= 5; i++)
			{
				if (opcoesArray[i].value == '')
				{
					opcoesArray[i].innerText = `Valor ${numero.value} adicionado!`
					break
				}
			}
		}
		else
		{
			alert('[ERRO] Número máximo de valores atingido!')
		}
	}
	
	numero.value = ''
	numero.focus()
}

function finalizar()
{
	let resultados = window.document.getElementById('saida')
	let valorRes = []
	let paragrafos = []
	let contas = [0]
	
	if (window.document.getElementById('par0') != null)
	{
		resultados.innerText = ''
	}
	
	for (let i = 0; i <= 5; i++)
	{
		paragrafos.push(window.document.createElement('p'))
		paragrafos[i].setAttribute('id', `par${i}`)
		resultados.appendChild(paragrafos[i])
		
		valorRes.push(Number(window.document.getElementById(`valor${i}`).value
			.replace('Valor ', '').replace(' adicionado!', '')))
	}
	
	let maior = 0
	let menor = 100
	
	for (let i = 0; i <= 5; i++)
	{
		if (valorRes[i] > maior)
		{
			maior = valorRes[i]
		}
		if (valorRes[i] < menor)
		{
			menor = valorRes[i]
		}
		
		if (valorRes[i] != 0)
		{
			contas[0] += valorRes[i]
		}
	}
	
	contas[1] = contas[0] / quantidade
	
	paragrafos[0].innerHTML = `Ao todo, temos ${quantidade} números cadastrados.`
	paragrafos[1].innerHTML = `O maior valor informado foi ${maior}.`
	paragrafos[2].innerHTML = `O menor valor informado foi ${menor}.`
	paragrafos[3].innerHTML = `Somando todos os valores, temos ${contas[0]}.`
	paragrafos[4].innerHTML = `A média dos valores digitados é ${contas[1]}.`
}

function quantNum()
{
	if (window.document.getElementById('selecaoNumeros') == null)
	{
		return 1
	}
	else
	{
		for (let i = 0; i <= 5; i++)
		{
			let quantidadeArray = []
			quantidadeArray.push(window.document.getElementById(`valor${i}`))
			
			if (quantidadeArray[i].value != '')
			{
				return quantidade++
			}
		}
	}
}

function validar(num = 0)
{
	if (num <= 0 || num > 100)
	{
		return false
	}
	else if (window.document.getElementById('selecaoNumeros') != null)
	{
		for (let i = 0; i <= 5; i++)
		{
			let validaArray = []
			validaArray[i] = window.document.getElementById(`valor${i}`)
			
			if (validaArray[i].value != '')
			{
				let ajuda = validaArray[i].value.replace('Valor ', '').replace('adicionado!', '')
				
				if (Number(ajuda) == num)
				{
					return false
				}
			}
		}
	}
	return true
}