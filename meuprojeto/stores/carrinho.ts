import type { Product } from "~/models/produto"

export type Carrinho = {
    produto: Array<Product>,
    
}
export const carrinhoStore = defineStore('carrinhoStore', {
    state:(): Carrinho =>({
        produto: []
    }),
    actions: {
        adicionarNoCarrinho(notasficais:Product){
            this.produto.push(notasficais);
        },
        limparcarrinho(posicaoNoCarrinho: number){
            this.produto.splice(posicaoNoCarrinho,1);
        }
    },
    getters: {
        estaNoCarrinho: (carrinho:Carrinho) => (produto:Product): boolean =>{
            return carrinho.produto.findIndex(item=>item.id === produto.id) !== -1 
        }
    }
})  