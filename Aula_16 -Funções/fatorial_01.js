function fatorial(num = 0)
{
	let fat = 1
	
	for (let cont = num; cont > 1; cont--)
	{
		fat *= cont
	}
	return fat
}

console.log(fatorial(5))