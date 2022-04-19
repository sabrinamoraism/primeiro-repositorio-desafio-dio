programa
{
	
	funcao inicio()
	{
	inteiro contador, limite, tabuada, resultado
	
	contador=0
	limite=0
	tabuada=0
	escreva("Qual a tabuada a ser calculada? ")
	leia(tabuada)
	escreva("Qual o limite de cálculo? ")
	leia(limite)

	faca{
		resultado = tabuada*contador
		escreva( tabuada + " x " + contador + " = " + resultado + "\n")
		contador = contador+1
	}
	enquanto (contador<=limite)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 395; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */