import { GraphQLError } from "npm:graphql@^16.8.1";
import { ClienteModelType, ClienteModel } from "../db/ClienteSchema.ts";
import { PedidoModelType, PedidoModel } from "../db/PedidoSchema.ts";
import { RepartidorModelType, RepartidorModel } from "../db/RepartidorSchema.ts";
import { RestauranteModelType, RestauranteModel } from "../db/RestauranteSchema.ts";

export const Query = {
    getClientes: async (): Promise<ClienteModelType[]> => {
        const clientes = await ClienteModel.find().exec();
        return clientes;
    },

    getClienteID: async (_: unknown, args: { id: string }): Promise<ClienteModelType> => {
        const cliente = await ClienteModel.findById(args.id);
        if (!cliente) {
            throw new GraphQLError(`Cliente no encontrado por id${args.id}`, {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return cliente;
    },

    getRestaurantes: async (): Promise<RestauranteModelType[]> => {
        const restaurantes = await RestauranteModel.find().exec();
        return restaurantes;
    },

    getRestauranteID: async (_: unknown, args: { id: string }): Promise<RestauranteModelType> => {
        const restaurante = await RestauranteModel.findById(args.id);
        if (!restaurante) {
            throw new GraphQLError(`Restaurante no encontrado id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return restaurante;
    },

    getRepartidores: async (): Promise<RepartidorModelType[]> => {
        const repartidores = await RepartidorModel.find().exec();
        return repartidores;
    },

    getRepartidorID: async (_: unknown, args: { id: string }): Promise<RepartidorModelType> => {
        const repartidor = await RepartidorModel.findById(args.id);
        if (!repartidor) {
            throw new GraphQLError(`No repartidor encontrado por id ${args.id}`, {
                extensions: { code: "NOT_FOUND" },
            });
        }
        return repartidor;
    },

    getPedidos: async (): Promise<PedidoModelType[]> => {
        const pedidos = await PedidoModel.find().exec();
        return pedidos;
    },
};