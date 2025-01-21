package com.avanade.decolatech.aplicacao;

import javax.swing.JOptionPane;

import com.avanade.decolatech.classes.Funcionario;
import com.avanade.decolatech.classes.Pessoa;
import com.avanade.decolatech.enumecoes.Generos;

public class AppPolimorfismo2 {
	public static void main(String[] args) {
		
		Pessoa pessoa = new Funcionario();
		pessoa.setNome("Anderson Costa");
		pessoa.setIdade(32);
		pessoa.setGenero(Generos.MASCULINO);
		
		//como fazemos para fornecer os dados
		// do cargo e do salário
		Funcionario func = (Funcionario)pessoa;
		func.setCargo("Estágiario");
		func.setSalario(15000);
		
		JOptionPane.showMessageDialog(null, pessoa.getDados());
		
		
//		No código acima:
//		Funcionario func = (Funcionario)pessoa;
//		Estamos dizendo que a variavel pessoa, mesmo sendo do tipo classe
//		Pessoa, está referenciando um objeto da classe funcionario.
//		Esta operação é chamada de 'typecast'
	}
}


