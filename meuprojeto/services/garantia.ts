import type {Warranty} from "~/models/garantia";

export const getgarantia = async ():Promise<Array<Warranty>> => {
    const { data, error } = await useFetch<Array<Warranty>>('http://localhost:8000/api/auth/warranties');

    if(error.value){
        console.error(error);
        return Promise.reject([]);
    }
    return Promise.resolve(data.value ?? []);
}