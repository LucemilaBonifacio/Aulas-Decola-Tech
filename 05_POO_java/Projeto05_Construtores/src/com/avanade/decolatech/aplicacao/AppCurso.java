package com.avanade.decolatech.aplicacao;

import com.avanade.decolatech.classes.Curso;

public class AppCurso {
	public static void main(String[] args) {
		Curso curso1 = new Curso("Inteligencia Artificial", 100, 4000);
		Curso curso2 = new Curso("Culinaria Básica", 8);
		Curso curso3 = curso1;
		
		System.out.println(curso1.getDados());
		System.out.println(curso2.getDados());
		System.out.println(curso3.getDados());
		
	}
}
