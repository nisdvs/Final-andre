import type { Product } from "~/models/produto";


export const getProdutos = async ():Promise<Array<Product>> => {
    const { data, error } = await useFetch<Array<Product>>('http://localhost:8000/api/auth/product');

    if(error.value){
        console.error(error);
        return Promise.reject([]);
    }
    return Promise.resolve(data.value ?? []);
}