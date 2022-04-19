// Função do Algoritmo: calcular a média aritmética
// Feito por Sabrina Morais em 15/04/2022

programa
{
	
	funcao inicio()
	{
		// Definição das variáveis
		
		real nota1,nota2,nota3,nota4,media
		cadeia aluno

		// Entrada e leitura dos dados
		
		escreva("Digite o nome do aluno:")
		leia(aluno)
		escreva("Nota 1:")
		leia(nota1)
		escreva("Nota 2:")
		leia(nota2)
		escreva("Nota 3:")
		leia(nota3)
		escreva("Nota 4:")
		leia(nota4)

		// Cálculo da média
		
		media = (nota1 + nota2 + nota3 + nota4)/4

		// Teste lógico e impressão da média
		
		se(media>=7){
			escreva("A aluna " + aluno + " obteve a média " + media + " e foi aprovada.")
		}
		senao{
			escreva("A aluna " + aluno + " obteve a média " + media + " e foi reprovada.")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 552; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */