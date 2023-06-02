const express = require("express");
const fs = require('fs');
const mongoose = require("mongoose");
const UserController = require('./controller/UserController');
const User = require("C:/Users/werka/OneDrive/Pulpit/Apka/ReminderMedApp/models/User");
const createUser = require("./controller/UserController");
const app = express();
//const authRoutes = require('./routes/authRoutes')
const uri = "mongodb+srv://MedicineApp:MedicineAppProject@appproject.urhfmuc.mongodb.net/?retryWrites=true&w=majority";
const cors = require('cors')
app.use(cors())


app.use(express.json());
//app.use(authRoutes);
app.post('/Sign_Up_Zar_Screen', (req, res) => {
  
  const { login, name, password } = req.body;
  createUser(login, name, password)
    .then(() => {
      res.send('User added successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('An error occurred during registration');
    });
});
// app.post('/Sign_Up_Zar_Screen', (req,res)=> {
//  console.log(req.body);
//  res.send('chyba pobralo dane?');
// })
//mongoose.connection.on('error', callback)

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to mongodb");

    
  }
  catch{console.log("błąd")}
}

connect();

app.listen(8000, () => {
  console.log("server started on port 8000");
});



/*app.use(express.json());


async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to mongodb");

        app.post('/', (req, res) => {
            const { login, name, password } = req.body;
            UserController(login, name, password)
                .then(() => {
                    res.send('User added successfully');
                })
                .catch((error) => {
                    console.error(error);
                    res.status(500).send('An error occurred during registration');
                });
        });


        //const login = "";
        //const name = "";
        //const password = "";

        // Dodawanie użytkownika
        /*const user = new User({
            login: login,
            name: name,
            password: password
        });
        await user.save();
        console.log("User added successfully");*/

        // Importowanie danych
        //const data = JSON.parse(fs.readFileSync('leki.json', 'utf8')); // ścieżka do pliku JSON
        //console.log(data);
        //if (data) {
        //     console.log("są dane");
        //} else {
        //     console.log("nie ma");
        // }

        /*const newMedicine = new Medicine({
         name:"Apap",
         dosage: 500 ,
         manufacturer:"Polski zakład farmaceutyczny" ,
         date: Date.now(),
         time: "20:11"
        })
        await newMedicine.save();*/


        // console.log('Data imported successfully');

        //const apap = await Medicine.findOne({ $and: [{ name: "Apap" }, { dosage: 500 }] }).exec();

        //używamy find, potem operator albo operator + $ i dokumentacja XD!!!!!!!!!!
        //console.log(apap);
        // const userM = await User.find({ $and: [{ login: "example_user" }, { name: "John Doe" }, { password: "example_password" }] }).exec();
        // console.log(userM);

        /*const signInButton = document.getElementById("sign_in_button");
        signInButton.addEventListener("click", () => {
            const login = document.getElementById("login_input").value;
            const name = document.getElementById("name_input").value;
            const password = document.getElementById("password_input").value;
            connect(login, name, password);

        });

    } catch (error) {
        console.error(error);




    }

}
connect();

app.listen(8000, () => {
    console.log("server started on port 8000");
})*/