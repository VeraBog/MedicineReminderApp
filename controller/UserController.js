const User = require("C:/Users/werka/OneDrive/Pulpit/Apka/ReminderMedApp/models/User");
const mongoose = require("mongoose");
//const uri = "mongodb+srv://MedicineApp:MedicineAppProject@appproject.urhfmuc.mongodb.net/?retryWrites=true&w=majority";

const createUser = async (req,res) => {
  try {
    console.log(req.body);
  // await mongoose.connect('mongodb://localhost:8000/mydatabase');
      //await mongoose.connect(uri);
      
    const user = new User({
      login:loginValue,
      name:nameValue,
      password:passwordValue
    });
   // if (!login || !name || !password) {
   //   Alert.alert('Uzupełnij wszystkie pola');
   //   return;
   // }
    await user.save();

    console.log('User added successfully');
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred during user creation');
  }
};
module.exports = createUser;




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