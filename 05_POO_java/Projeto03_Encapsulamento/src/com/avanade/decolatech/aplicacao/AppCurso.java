package com.avanade.decolatech.aplicacao;

import com.avanade.decolatech.classes.Curso;

public class AppCurso {
	public static void main(String[] args) {
		Curso curso1 = new Curso();
		curso1.setCodigo(100);
		curso1.setDescricao("Inteligência Artificial");
		curso1.setCh(100);
		curso1.setPreco(4000);
		
		Curso curso2 = new Curso();
		curso2.setCodigo(200);
		curso2.setDescricao("Culinaria Básica");
		curso2.setCh(8);
		curso2.setPreco(-10);
		
		Curso curso3 = curso1;
		curso2 = null; // o objeto referenciado por curso 2 virou "lixo" (garbage)

		System.gc(); // solicita rioridade na limpeza da memoria heap
		
		System.out.println(curso1);
		System.out.println(curso2);
		System.out.println(curso3);
		
	}
}
