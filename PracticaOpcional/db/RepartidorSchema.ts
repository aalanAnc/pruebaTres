
import mongoose from "npm:mongoose@8.0.0";

const Schema = mongoose.Schema;

const RepartidorSchema = new Schema({
    username:{type:String, required: true, unique: true},
    orders:[{type: Schema.Types.ObjectId, ref: "Pedido"}],
});

export type RepartidorModelType = mongoose.Document;

export const RepartidorModel = mongoose.model<RepartidorModelType>("Repartidor", RepartidorSchema);