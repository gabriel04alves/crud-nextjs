export default class Cliente {
    #id: string
    #nome: string
    #email: string
    #local: string
    #idade: number 

    constructor(nome: string, email: string, local: string, idade: number, id: string) {
        this.#nome = nome
        this.#email = email
        this.#local = local
        this.#idade = idade
        this.#id = id
    }

    static vazio(){
        return new Cliente('', 0)
    }

    get id() {
        return this.#id
    }
    get nome() {
        return this.#nome
    }
    get email() {
        return this.#email
    }
    get local() {
        return this.#local
    }
    get idade() {
        return this.#idade
    }
}
