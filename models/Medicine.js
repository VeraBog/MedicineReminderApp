const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    // Definicja schematu kolekcji
    name: { type: String },
    dosage: { type: Number },
    manufacturer: { type: String },
    typeMed: {type: String},
    date: { type: Date },
    time: { type: String },
    comment: {type: String},
    // inne pola i ich typy
    // ...
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;