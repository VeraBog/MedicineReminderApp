const User = require("../models/User");
const mongoose = require("mongoose");
//const uri = "mongodb+srv://MedicineApp:MedicineAppProject@appproject.urhfmuc.mongodb.net/?retryWrites=true&w=majority";

const createUser = async (req, res) => {
  try {
    console.log(req.body);
    // await mongoose.connect('mongodb://localhost:8000/mydatabase');
    //await mongoose.connect(uri);

    const user = new User({
      login: req.body.login,
      name: req.body.name,
      password: req.body.password
    });
    // if (!login  !name  !password) {
    //   Alert.alert('Uzupełnij wszystkie pola');
    //   return;
    // }
    await user.save().then(console.log("utworzono"));

    console.log('User added successfully');
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred during user creation');
  }
};

/*// Sprawdza dostępność loginu
const checkUsernameAvailability = async (login) => {
  try {
    const response = await axios.get(`http://192.168.0.6:8000/checkUsernameAvailability?login=${login}`);
    return response.data.available.login;
  } catch (error) {
    console.error(error);
    return false;
  }
};


/*const logInUser = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ $and: [{ login: req.body.login }, { password: req.body.password }] }).exec();

   /*console.log(user); 
   if(user){
    console.log('wyszukało')
   }else{
    console.log('nie wyszukalo')
   }
    res.status(200).send('we no zdzialaj plis');
    
   
  } catch (error) {
    console.log(error)
  }////////////////
  if (user) {
    console.log('Logowanie udane');
    res.status(200).json({ success: true }); // Zwróć sukces logowania
  } else {
    console.log('Nieprawidłowe dane logowania');
    res.status(400).json({ error: 'Nieprawidłowe dane logowania' }); // Zwróć błąd logowania
  }
} catch (error) {
  console.log(error);
  res.status(500).json({ error: 'Wystąpił błąd podczas logowania' }); // Zwróć ogólny błąd
}
}*/

const logInUser = async (req, res) => {
  try {
    console.log(req.body);
    const { login, password } = req.body;
    const user = await User.findOne({ login }).exec();

    if (user) {
      if (user.password === password) {
        console.log('Logowanie udane');
        return res.status(200).json({ success: true }); // Zwróć sukces logowania
      } else {
        console.log('Nieprawidłowe hasło');
        return res.status(401).json({ error: 'Nieprawidłowe hasło' }); // Zwróć błąd logowania (401 Unauthorized)
      }
    } else {
      console.log('Nieprawidłowy login');
      return res.status(404).json({ error: 'Nieprawidłowy login' }); // Zwróć błąd logowania (404 Not Found)
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Wystąpił błąd podczas logowania' }); // Zwróć ogólny błąd
  }
};

module.exports = { createUser, logInUser };





//export default createUser;
//module.exports = {
  //createUser
//};

// funkcja obsługująca rejestrację użytkownika
/*const UserController = async (login, name, password) => {
  try {
    // łączymy się z bazą danych
    await mongoose.connect('mongodb://localhost:8000/mydatabase');

    // tworzymy nowego użytkownika na podstawie danych rejestracyjnych
    const user = new User({
      login,
      name,
      password
    });

    // zapisujemy użytkownika w bazie danych
    await user.save();

    console.log('User added successfully');
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred during registration');
  }
};

module.exports = UserController;*/