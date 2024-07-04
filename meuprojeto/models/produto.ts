export type ProductCategory = {
    id: number;
    name: string;
}

export class Product {
id: number = 0;
name: string = '';
weight: number = 0;
description: string = '';
creationDate: number = 0;
barCode: number = 0;
image: string = '';
categoryFK = {
    id: 0,
    nome: ''
};
}