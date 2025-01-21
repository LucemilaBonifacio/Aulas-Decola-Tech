package com.avanade.decolatech.classes;

import com.avanade.decolatech.interfaces.Documento;

public class Funcionario extends Pessoa {
		
		private Documento documento;
		private String cargo;
		private double salario;
		
		public String getCargo() {
			return cargo;
		}
		public void setCargo(String cargo) {
			this.cargo = cargo;
		}
		public double getSalario() {
			return salario;
		}
		public void setSalario(double salario) {
			this.salario = salario;
		}
				
		public Documento getDocumento() {
			return documento;
		}
		public void setDocumento(Documento documento) {
			this.documento = documento;
		}
		
		@Override
		public String getDados() {
			StringBuilder builder = new StringBuilder();
			builder.append(super.getDados()).append("\n\n")
				.append("\nCargo: ").append(this.getCargo())
				.append("\nSalário: ").append(this.getSalario());
			
			if(this.getDocumento() != null) {
				builder.append("\nDocumento: ").append(this.getDocumento().getNumero());
				
			}
			
			return builder.toString();
		}
		
}
