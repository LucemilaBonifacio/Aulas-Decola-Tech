package com.avanade.decolatech.classes;

import java.util.ArrayList;
import java.util.List;

public class Aluno extends Pessoa {
	
	private int matricula;
	private List<Curso> cursos;
	
	public int getMatricula() {
		return matricula;
	}
	public void setMatricula(int matricula) {
		this.matricula = matricula;
	}
	public List<Curso> getCursos() {
		return cursos;
	}
//	public void setCursos(List<Curso> cursos) {
//		this.cursos = cursos;
//	}
	
	// método que retorna a lista de cursos, se existirem
	private String listaCursos() {
		
		StringBuilder builder = new StringBuilder();
		int posicao = 1;
		for(Curso c : this.getCursos()) {
			builder.append("\nCurso").append(posicao++)
			.append("\ncódigo: ").append(c.getCodigo())
			.append("\ndescrição: ").append(c.getDescricao())
			.append("\n\n");
		}
		return builder.toString();
		
	}
	@Override
	public String getDados() {
		StringBuilder builder = new StringBuilder();
		builder.append(super.getDados())
		.append("\n")
		.append("Matrícula: ").append(this.getMatricula());
		
		if(this.getCursos() != null && this.getCursos().size() > 0) {
			builder.append("\n").append(this.listaCursos());
		}else {
			builder.append("\n\nNenhum curso matriculado para este aluno");
		}
		return builder.toString();
	}
	
	//metodo para adicionar cursos isoladamente
	public void adicionarCurso(Curso curso) {
		if(this.getCursos() == null) {
			this.cursos = new ArrayList<Curso>();
		}
			this.cursos.add(curso);
		}
	
	
	
	
}
