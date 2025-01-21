package com.avanade.decolatech.classes;

// modelo ou entidade
public class Curso {

	// atributos ou variáveis de instância
	private final int codigo; // finalized: o valor é inalterado
	private String descricao;
	private int ch;
	private double preco;
	
	
	private static int CONTADOR = 1;
	//dois construtores sobrecarregados
	public Curso(String descricao, int ch) {
		this.codigo = CONTADOR++;
		this.setDescricao(descricao);
		this.setCh(ch);
	}
	public Curso(String descricao, int ch, double preco) {
		this(descricao, ch);
		this.setPreco(preco);
	}
	
	public int getCodigo() {
		return codigo;
	}
//	public void setCodigo(int codigo) {
//		this.codigo = codigo;
//	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public int getCh() {
		return ch;
	}
	public void setCh(int ch) {
		// a carga horária deve ser maior que 0
		if(ch <= 0) {
			throw new NumberFormatException("A carga horário deve ser positiva.");
		}		
		this.ch = ch;
	}
	
	public double getPreco() {
		return preco;
	}
	public void setPreco(double preco) {
		if(preco < 0) {
			throw new NumberFormatException("O preço não pode ser negativo");
		}		
		this.preco = preco;
	}
	
	// métodos complementares
	//1. método para receber os valores de todos os atributos
	public void setDados(String descricao, int ch, double preco) {
		this.setDescricao(descricao);
		this.setCh(ch);
		this.setPreco(preco);
	}
	
	//2. método para retornar as informações do curso
	public String getDados() {
		String resposta = "Código: " + this.getCodigo() +
				"\nDescrição: " + this.getDescricao() +
				"\nCarga Horária: " + this.getCh() +
				"\nPreço: " + this.getPreco();
		return resposta;
	}
	
	
}
