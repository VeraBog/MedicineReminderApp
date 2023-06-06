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

const LoadMed = async (req, res) => {
    try {
        
        if (!req.body) {
            throw new Error('Missing required data in request body');
        }
        console.log(req.body);
       

        const med = await Medicine.findOne({
            name: req.body.name,
            dosage: req.body.dosage,
            manufacturer: req.body.manufacturer,
            typeMed: req.body.typeMed,
            date: req.body.date,
            time: req.body.time,
            comment: req.body.comment,
        }).exec();

       // console.log(med);
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
}


module.exports = { createMed, LoadMed };
