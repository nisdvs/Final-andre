import type { Invoice } from "~/models/notasfiscais";

export const getnotasfiscais = async ():Promise<Array<Invoice>> => {
    const { data, error } = await useFetch<Array<Invoice>>('http://localhost:8000/api/auth/invoices');

    if(error.value){
        console.error(error);
        return Promise.reject([]);
    }
    return Promise.resolve(data.value ?? []);
}