
import mongoose from "npm:mongoose@8.0.0";

const Schema = mongoose.Schema;

const RestauranteSchema = new Schema({
    name:{type: String, required: true},
    address:{type: String, required: true},
    cif:{type: String, required: true},
    products:{type: [String], required: true},
});

export type RestauranteModelType = mongoose.Document;

export const RestauranteModel = mongoose.model<RestauranteModelType>("Restaurante", RestauranteSchema);