const Medicine = require("../models/Medicine");
const mongoose = require("mongoose");


const createMed = async (req, res) => {
    try {
        console.log(req.body);


        const med = new Medicine({
            name: req.body.nazwa,
            dosage: req.body.dosage,
            manufacturer: req.body.manufacturer,
            typeMed: req.body.typLeku,
            date: req.body.dateValue,
            time: req.body.timeValue,
            comment: req.body.komentarz,
        });


        await med.save().then(console.log("Dodano lek"));
       
        console.log('Udało się dodać lek');
    } catch (error) {
        console.error(error);
        throw new Error('Wystąpił błąd podczas tworzenia');
    }
};


async function LoadMed(req, res) {
    try {
      const medicines = await Medicine.find(); 
        console.log('leki leczunie',medicines)
      res.json(medicines); // Odesłanie danych jako odpowiedź JSON
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
      res.status(500).json({ error: "Błąd podczas pobierania danych z bazy danych" });
    }
  }
  


module.exports = { createMed, LoadMed };
