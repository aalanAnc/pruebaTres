//shcema gql
export const typeDefs = `#graphql
    type Cliente {
        id_Cliente: ID!
        name: String!
        email:String!
        cards:[Cards!]!
        orders: [Pedido!]!
    }

    type Cards{ 
        number: Int!
        cvv: Int!
        expirity: Int!
        money: Int!
    }

    type Pedido{
        id_Pedido: ID!
        id_Cliente:String!
        id_Restaurante:String!
        id_Repartidor:String!
        products:[String]!
        price:Int!
    }

    type Restaurante{
        id_Restaurante: ID!
        name:String!
        address:String!
        cif:String!
        products:[String]!
    }
    type Repartidor{
        id_Repartidor: ID!
        username: String!
        orders:[Pedido!]!
    }

    type Query{
        getClientes: [Cliente!]!
        getClienteID(id_Cliente: ID!): Cliente!

        getPedidos: [Pedido!]!

        getRestaurantes: [Restaurante!]!
        getRestauranteID(id_Restaurante: ID!): Restaurante!

        getRepartidores: [Repartidor!]!
        getRepartidorID(id_Repartidor: ID!): Repartidor!
    }
    
    type Mutation{
        addCliente(name: String, email: String): Cliente!
        deleteCliente(id_Cliente: ID!): Cliente!
        updateCliente(id_Cliente:ID!, name: String!, email: String!): Cliente!

        addRestaurante(name:String!, address: String!, cif:String!): Restaurante!
        deleteRestaurante(id_Restaurante: ID!): Restaurante!
        updateRestaurante(id_Restaurante: ID!, name: String!, email: String!, cif: String!):Restaurante!
        
        addRepartidor(username: String!): Repartidor!
        deleteRepartidor(id_Repartidor: ID!): Repartidor!
        updateRepartidor(id_Repartidor: ID!, username: String!): Repartidor!
        
        

    }
`;



