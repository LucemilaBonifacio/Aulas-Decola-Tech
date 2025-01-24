export class Candidato {

    constructor(
        public cpf: string = '', 
        public nome: string = '', 
        public telefone: string = '', 
        public email: string = '') {}

    // constructor(){
    //     this._cpf = '';
    //     this._nome='';
    //     this._telefone='';
    //     this._email='';
    // }


    // private _cpf : string;
    // public get cpf() : string {
    //     return this._cpf;
    // }
    // public set cpf(v : string) {
    //     this._cpf = v;
    // }
    
    // private _nome : string;
    // public get nome() : string {
    //     return this._nome;
    // }
    // public set nome(v : string) {
    //     this._nome = v;
    // }
    
    
    // private _telefone : string;
    // public get telefone() : string {
    //     return this._telefone;
    // }
    // public set telefone(v : string) {
    //     this._telefone = v;
    // }
    
    
    // private _email : string;
    // public get email() : string {
    //     return this._email;
    // }
    // public set email(v : string) {
    //     this._email = v;
    // }
    public mostrar() : string {
        return `CPF: ${this.cpf}\nNome: ${this.nome}\nFone: ${this.telefone}\nEmail: ${this.email}`;
    }

}
