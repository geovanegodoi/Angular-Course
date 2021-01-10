export class Usuario {
    id: string;
    nome: string;
    cpf:string;
    email: string;
    senha: string;
    senhaConfirmacao: string;

    constructor(id: string, nome: string, cpf: string, email: string, senha: string, senhaConfirmacao: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.senhaConfirmacao = senhaConfirmacao;
    }
}