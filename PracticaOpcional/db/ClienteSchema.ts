import mongoose from "npm:mongoose@8.0.0";

const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    name:{type: String, required: true},
    email:{type:String, required: true},
    orders: [{type: Schema.Types.ObjectId, ref: "Pedido"}],
});

export type ClienteModelType = mongoose.Document;

export const ClienteModel = mongoose.model<ClienteModelType>("Cliente", ClienteSchema);