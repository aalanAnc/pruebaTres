export type Cliente={
    id_Cliente: string,
    name: string;
    email: string;
    cards: Cards[];
    orders: Pedido[];
}

export type Cards={
    number: number;
    cvv: number;
    expirity: number;
    money: number;
}

export type Pedido={
    id_Pedido: string;
    id_Cliente:string;
    id_Restaurante:string;
    id_Repartidor: string;
    products: string[];
    price: number;
    status: string;
}

export type Restaurante={
    id_Restaurante: string;
    name : string;
    address: string;
    cif: string;
    products: string[];
}

export type Repartidor={
    id_Repartidor: string;
    username:string;
    orders: Pedido[];
}

