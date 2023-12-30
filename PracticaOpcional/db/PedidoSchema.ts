
import mongoose from "npm:mongoose@8.0.0";

const Schema = mongoose.Schema;

const PedidoSchema = new Schema ({
    id_Cliente:{type: Schema.Types.ObjectId, ref: "Cliente", required: true},
    id_Restaurante: { type: Schema.Types.ObjectId, ref: "Restaurante", required: true},
    id_Repartidor: { type: Schema.Types.ObjectId, ref: "Repartidor", required: true},
    products:[{type: String, required: true}],
    price:{type: Number, required: true},
    status:{type: String, enum: ["pendiente", "terminado"], required: true},
});

export type PedidoModelType = mongoose.Document;

export const PedidoModel = mongoose.model<PedidoModelType>("Pedido", PedidoSchema);