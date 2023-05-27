const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    // Definicja schematu kolekcji
    name: { type: String, required: true },
    dosage: { type: Number, required: true },
    manufacturer: { type: String },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    // inne pola i ich typy
    // ...
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;