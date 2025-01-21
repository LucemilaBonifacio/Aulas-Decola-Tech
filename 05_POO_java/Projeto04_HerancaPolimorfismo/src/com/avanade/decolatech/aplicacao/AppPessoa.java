package com.avanade.decolatech.aplicacao;

import javax.swing.JOptionPane;

import com.avanade.decolatech.classes.Endereco;
import com.avanade.decolatech.classes.Pessoa;
import com.avanade.decolatech.enumecoes.Generos;

public class AppPessoa {
	public static void main(String[] args) {
		Endereco end = new Endereco();
		end.setLogradouro("Rua da Paz");
		end.setNumero(10);
		end.setCidade("Recife");
		end.setCep("554001000");
		
		Pessoa p = new Pessoa();
		p.setNome("Jose Manoel");
		p.setIdade(55);
		p.setGenero(Generos.MASCULINO);
		//p.setEndereco(end);
		
		JOptionPane.showMessageDialog(null, p.getDados());
	}
}
