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
		
	
		
		// Adicionando os cursos c1 e c2 na lista cursos
		cursos.add(new Curso("Oracle Basico", 40));
		cursos.add(new Curso("Analise de dados", 32, 1000));
		
		// criando uma instancia de classe Aluno
		Aluno aluno = new Aluno();
		aluno.setNome("Alvaro Silva");
		aluno.setIdade(42);
		aluno.setGenero(Generos.MASCULINO);
		aluno.setMatricula(1234);
		
				
		aluno.adicionarCurso(new Curso("Inteligencia Emocional", 40));
		aluno.adicionarCurso(new Curso("Analise de dados", 32, 1000));
		
		
		System.out.println(aluno.getDados());
		
	}
	
}
