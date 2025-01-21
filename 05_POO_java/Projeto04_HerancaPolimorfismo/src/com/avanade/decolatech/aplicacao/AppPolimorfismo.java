package com.avanade.decolatech.aplicacao;

import javax.swing.JOptionPane;

import com.avanade.decolatech.classes.Funcionario;
import com.avanade.decolatech.classes.Pessoa;
import com.avanade.decolatech.enumecoes.Generos;

public class AppPolimorfismo {
	public static void main(String[] args) {
		Pessoa p = new Pessoa();
		p.setNome("Jose Manoel");
		p.setIdade(55);
		p.setGenero(Generos.MASCULINO);
		
		Funcionario funcionario = new Funcionario();
		funcionario.setNome("Mauricio de Souza");
		funcionario.setIdade(30);
		funcionario.setGenero(Generos.MASCULINO);
		funcionario.setCargo("Professor");
		funcionario.setSalario(2000);
		
		
		Pessoa pessoa = p;
		JOptionPane.showMessageDialog(null, pessoa.getDados());
		
		pessoa = funcionario;
		JOptionPane.showMessageDialog(null, pessoa.getDados());
		
		
	}
}
