const express = require("express");
const fs = require('fs');
const app = express();
const Medicine = require("./models/Medicine");
const mongoose = require("mongoose");
const uri = "mongodb+srv://MedicineApp:MedicineAppProject@appproject.urhfmuc.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to mongodb");

        // Importowanie danych
        const data = JSON.parse(fs.readFileSync('leki.json', 'utf8')); // ścieżka do pliku JSON
        //console.log(data);
        if (data) {
            console.log("są dane");
        } else {
            console.log("nie ma");
        }

        /*const newMedicine = new Medicine({
         name:"Apap",
         dosage: 500 ,
         manufacturer:"Polski zakład farmaceutyczny" ,
         date: Date.now(),
         time: "20:11"
        })
        await newMedicine.save();*/

        console.log('Data imported successfully');

        const apap = await Medicine.findOne({ $and: [{ name: "Apap" }, { dosage: 500 }] }).exec();
        //używamy find, potem operator albo operator + $ i dokumentacja XD!!!!!!!!!!
        console.log(apap);

    } catch (error) {
        console.error(error);
    }

}
connect();

app.listen(8000, () => {
    console.log("server started on port 8000");
})