
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Welcome_Screen  from './screens/Welcome_Screen';
import  Sign_In_Screen from './screens/Sign_In_Screen';
import  Sign_Up_Zar_Screen from './screens/Sign_Up_Zar_Screen';
import  Main_Screen from './screens/Main_Screen';
import Add_Med_Screen_1 from './screens/Add_Med_Screen_1';
import Add_Med_Screen_2 from './screens/Add_Med_Screen_2';
import SoundSwitch from './screens/SoundSwitch';
import Profil_Screen from './screens/Profil_Screen';
import MedList_Screen from './screens/MedList_Screen';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    const connectToMongoDB = async () => {
      const { MongoClient } = require('mongodb');
      const uri = "mongodb+srv://Weronika:<password>@dataproject.g2eom2h.mongodb.net/?retryWrites=true&w=majority";

      // Create a MongoClient with a MongoClientOptions object to set the Stable API version
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      try {
        // Connect the client to the server
        await client.connect();
        console.log("Connected to MongoDB!");

        // Do something with the connected client, such as querying or updating data
        // ...

      } catch (error) {
        console.log("Error connecting to MongoDB:", error);
      } finally {
        // Ensure that the client will close when you finish/error
        await client.close();
        console.log("Disconnected from MongoDB!");
      }
    };

    connectToMongoDB();
  }, []);
  return (
    <TailwindProvider>
    <NavigationContainer>
   <Stack.Navigator>
        <Stack.Screen name="Welcome_Screen" component={Welcome_Screen} />
        <Stack.Screen name="Sign_In_Screen" component={Sign_In_Screen} />
        <Stack.Screen name="Sign_Up_Zar_Screen" component={Sign_Up_Zar_Screen} />
        <Stack.Screen name="Main_Screen" component={Main_Screen} />
        <Stack.Screen name="Add_Med_Screen_1" component={Add_Med_Screen_1} />
        <Stack.Screen name="Add_Med_Screen_2" component={Add_Med_Screen_2} />
        <Stack.Screen name="SoundSwitch" component={SoundSwitch} />
        <Stack.Screen name="Profil_Screen" component={Profil_Screen} />
        <Stack.Screen name="MedList_Screen" component={MedList_Screen} />

      </Stack.Navigator>
   </NavigationContainer>
    </TailwindProvider>
  );
}


  