export class InvoiceItem {
    product: number = 0;
    invoice: number = 0;
    price: number = 0;
    quantity: number = 0;
}

export class Invoice {
    id: number = 0;
    invoiceCode: number = 0;
    customName: string = '';
    customRef: number = 0;
    CNPJCustomer: number = 0;
    sellerName: string = '';
    sellerCNPJ: number = 0;
    totalValue: number = 0;
    emissionDate: number = 0; 
    uploadDate: number = 0;
}