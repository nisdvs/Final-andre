<script setup lang="ts">
import {carrinhoStore} from '~/stores/carrinho';
const { limparcarrinho,produto,adicionarNoCarrinho } = carrinhoStore();
import { Product } from '~/models/produto';
import { Warranty } from '~/models/garantia';
import { CustomUser } from '~/models/usuarios';
const {data} = useAuth();


const usuarioLogadoId: any = data.value;

console.log("usuario autenticado:", usuarioLogadoId[0].id)


try {
    const novoUser = new CustomUser()
    const { verUser } = novoUser;
    //nomeUsuario.value = verUser

    const { data } = await useFetch('http://localhost:8000/api/auth/custom-users')
    const pesquisa = data.value.results.filter(item => item.email == nomeUsuario.value) 
    //nomeUsuario.value = pesquisa[0].id 
  } catch (error) {
     navigateTo('/');
  }


const excluir = (indexDoProduto: number)=> {
    limparcarrinho(indexDoProduto);
}


const valorTotal = computed(()=>{
    let soma = 0;
    livros.forEach(item =>soma += Number(item.valor));
       console.log("soma: ", soma)
   return soma;
});


</script>

<template>
    <div>
        <h1>CARRINHO</h1>
        <!-- <div v-for="(itemCarrinho,index) in produto">
            <p>Id : {{ itemCarrinho.id }}</p>
            <p>Nome: {{ itemCarrinho.titulo }}</p>
            <p>Valor: {{ itemCarrinho.valor }}</p>
            <button @click="excluir(index)">Excluir este Produto</button>
            <hr>
            <br>
        </div>
        <div v-if="valorTotal >= 0">VALOR TOTAL: R$ {{ valorTotal }}</div>
        <div v-else>Seu Carrinho está vazio</div>
        <button v-if="valorTotal > 0" @click="fecharPedido">FECHAR</button> -->
    </div>
</template>