package com.avanade.decolatech.aplicacao;

import java.util.ArrayList;
import java.util.List;

import com.avanade.decolatech.classes.Aluno;
import com.avanade.decolatech.classes.Curso;
import com.avanade.decolatech.enumecoes.Generos;

public class AppAluno {
	public static void main(String[] args) {
		//Criando uma lista de cursos
		List<Curso> cursos = new ArrayList<Curso>();
		
		//Curso 1
		Curso c1 = new Curso();
		c1.setCodigo(100);
		c1.setDescricao("Oracle Basico");
		c1.setCh(40);
		c1.setPreco(0);
		
		//Curso 2
		Curso c2 = new Curso();
		c2.setCodigo(200);
		c2.setDescricao("Análise de Dados");
		c2.setCh(32);
		c2.setPreco(1000);
		
		// Adicionando os cursos c1 e c2 na lista cursos
		cursos.add(c1);
		cursos.add(c2);
		
		// criando uma instancia de classe Aluno
		Aluno aluno = new Aluno();
		aluno.setNome("Alvaro Silva");
		aluno.setIdade(42);
		aluno.setGenero(Generos.MASCULINO);
		aluno.setMatricula(1234);
		
		Curso c3 = new Curso();
		c3.setCodigo(30);
		c3.setDescricao("Inteligência Emocional");
		c3.setCh(40);
		c3.setPreco(0);
		
		
		aluno.adicionarCurso(c3);
		
		
		
		System.out.println(aluno.getDados());
		
	}
	
}
