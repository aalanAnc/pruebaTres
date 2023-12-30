import { GraphQLError } from "npm:graphql@^16.8.1";
import { ClienteModelType, ClienteModel } from "../db/ClienteSchema.ts";
import { RepartidorModelType, RepartidorModel } from "../db/RepartidorSchema.ts";
import { RestauranteModelType, RestauranteModel } from "../db/RestauranteSchema.ts";
import { PedidoModelType, PedidoModel } from "../db/PedidoSchema.ts";

export const Mutation = {
    addCliente: async (
        _: unknown,
        args: { name: string; email: string }
    ): Promise<ClienteModelType> => {
        const cliente = {
            name: args.name,
            email: args.email,
        };
        const newCliente = await ClienteModel.create(cliente);
        return newCliente;
    },
    addRestaurante: async (
        _: unknown,
        args: { name: string, address: string, cif: string }
    ): Promise<RestauranteModelType> => {
        const restaurante = {
            name: args.name,
            address: args.address,
            cif: args.cif,
        };
        const newRestaurante = await RestauranteModel.create(restaurante);
        return newRestaurante;
    },
    addRepartidor: async (
        _: unknown,
        args: { username: string }
    ): Promise<RepartidorModelType> => {
        const repartidor = {
            username: args.username,
        };
        const newRepartidor = await RepartidorModel.create(repartidor);
        return newRepartidor;
    },
    deleteCliente: async(
        _: unknown,
        args:{id: string}
    ) => {
        try{
        const Cliente = await ClienteModel.findByIdAndDelete(args.id);
        if(!Cliente){
            throw new GraphQLError(`No cliente encontrado id ${args.id}`,{
                extensions: { code: "NOT_FOUND"},
            });
        }
        return Cliente;
    }catch(error){
        throw new GraphQLError(`${error}`)
    }
    },
    deleteRestaurante: async (
        _: unknown,
        args:{id: string}
    ) => {
        try{
        const Restaurante = await RestauranteModel.findByIdAndDelete(args.id);
        if(!Restaurante){
            throw new GraphQLError(`No restaurante id encontrado ${args.id}`)
            }
            return Restaurante;
        }catch(error){
            throw new GraphQLError(`${error}`)
        }
    },
    deleteRepartidor: async(
        _:unknown,
        args:{id: string}
    ) => {
        try{
            const Repartidor = await RepartidorModel.findByIdAndDelete(args.id);
            if (!Repartidor) {
                throw new GraphQLError(`No id encontrado de Repartidor ${args.id}`)
            }
            return Repartidor;
        }catch(error){
            throw new GraphQLError(` ${error}`)
        }
    },
    addPedido: async(
        _:unknown,
        args:{
            id_Cliente: string;
            id_Restaurante: string;
            id_Repartidor: string;
            products: string[];
            price: number;
        }
    ): Promise<PedidoModelType>=>{
        const pedido = {
            id_Cliente: args.id_Cliente,
            id_Restaurante: args.id_Restaurante,
            id_Repartidor: args.id_Repartidor,
            products: args.products,
            price: args.price
        };
        const newPedido = await PedidoModel.create(pedido);
        return newPedido;
    },
    finishPedido: async(
        _:unknown,
        args:{id_Pedido: string}
    ) => { 
        const pedido = await PedidoModel.findByIdAndUpdate(args.id_Pedido, {status: "terminado"}, { new : true});
        return pedido;
    }
};