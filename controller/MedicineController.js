const Medicine = require("../models/Medicine");
const mongoose = require("mongoose");


const createMed = async (req, res) => {
    try {
        console.log(req.body);


        const med = new Medicine({
            name: req.body.name,
            dosage: req.body.dosage,
            manufacturer: req.body.manufacturer,
            typeMed: req.body.typeMed,
            date: req.body.date,
            time: req.body.time,
            comment: req.body.comment,
        });


        await med.save().then(console.log("Dodano lek"));
       
        console.log('Udało się dodać lek');
    } catch (error) {
        console.error(error);
        throw new Error('Wystąpił błąd podczas tworzenia');
    }
};

/*const LoadMed = async (req, res) => {
    try {
        console.log('dupa')
       /* if (!req.body) {
            throw new Error('Missing required data in request body');
        }
        console.log(req.query) // nie pobiera danych
        console.log('wyswietl',req.body.name);
       

        /*const med = await Medicine.findOne({
            name: req.body.name,
            dosage: req.body.dosage,
            manufacturer: req.body.manufacturer,
            typeMed: req.body.typeMed,
            date: req.body.date,
            time: req.body.time,
            comment: req.body.comment,
        }).exec();*
        console.log(req.query);
        const dosage = parseInt(req.query.dosage); // Rzutowanie na typ liczbowy
        const med = await Medicine.findOne({
            name: req.query.name,
            dosage: dosage,
            manufacturer: req.query.manufacturer,
            typeMed: req.query.typeMed,
            date: new Date(req.query.date),
            time: req.query.time,
            comment: req.query.comment,
          }).exec();

        console.log(req.body);
        if (med) {
            const newMed = new Medicine({
              name: req.body.name,
              dosage: req.body.dosage,
              manufacturer: req.body.manufacturer,
              typeMed: req.body.typeMed,
              date: req.body.date,
              time: req.body.time,
              comment: req.body.comment,
            });
      
          
            console.log('Zaladowano lek');
            res.status(200).json({ success: true, medicine: med });
          } else {
            console.log('Nie zaladowano leku');
            res.status(404).json({ success: false, message: 'Nie znaleziono leku' });
         }


    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Wystąpił błąd podczas ładowania leku' });
 
    }
}*/
async function LoadMed(req, res) {
    try {
      const medicines = await Medicine.find(); // Pobranie wszystkich rekordów z kolekcji Medicine
        console.log('leki leczunie',medicines)
      res.json(medicines); // Odesłanie danych jako odpowiedź JSON
    } catch (error) {
      console.error("Błąd podczas pobierania danych z bazy danych:", error);
      res.status(500).json({ error: "Błąd podczas pobierania danych z bazy danych" });
    }
  }
  


module.exports = { createMed, LoadMed };
