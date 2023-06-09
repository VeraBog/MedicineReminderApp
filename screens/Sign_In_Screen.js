import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { logInUser } from '../controller/UserController';
import axios from 'axios';

const Sign_In_Screen = () => {

  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const handleLoginChange = (value) => {
    setLogin(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleSignIn = async () => {
    try {

      const loginValue = login;
      const passwordValue = password;

      if (!loginValue || !passwordValue) {
        throw new Error('Wprowadź login i hasło');
      }

      //  console.log(login, password);


    /*  axios.post("http://192.168.0.53:8000/Sign_In_Screen", {  //trzeba zmienić za każdym razem bo inaczej się nie połączy Ipv4 adress z komendy ipconfig
        login: loginValue,                                      // było http://192.168.0.6:8000
        password: passwordValue,
      })
        .then((response) => {
          console.log("RESP", response.data);
          //  Alert.alert('Dodano użytkownika'); // w sumie to nie wiem czemu nie ma komunikatu
          navigation.navigate('Main_Screen');
        })
        .catch((err) => {
          console.log("ERR", err);
          Alert.alert('Nieprawidłowe dane logowania');
        });*/
        axios
        .post("http://192.168.0.5:8000/Sign_In_Screen", {
          login: loginValue,
          password: passwordValue,
        })
        .then((response) => {
          console.log("RESP", response.data);
          // Sprawdź odpowiedź serwera w poszukiwaniu informacji o błędzie
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          // Sprawdź dodatkowo status odpowiedzi serwera
          if (response.status !== 200) {
            throw new Error("Wystąpił błąd podczas logowania");
          }
          // Alert.alert('Dodano użytkownika');
          navigation.navigate('Main_Screen');
        })
        .catch((err) => {
          console.log("ERR", err);
          Alert.alert(error.message);;
        });
      
    } catch (error) {
      console.error(error);
      Alert.alert('Wystąpił błąd');
    }

  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); // tu się w sumie usuwa nagłowek

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={stylesK.container}>
        <View style={{ backgroundColor: '#24cccc', width: 428, height: 926, borderRadius: 34 }}>
          <View style={{ position: 'positive', top: 50, width: '100%', height: '80%', alignItems: 'center' }}>
            <FrameComponent />
            <MyRectangle />
            <LoginText />
            <Login />
            <BoxL value={login} onChangeText={handleLoginChange} />
            <Password />
            <BoxH value={password} onChangeText={handlePasswordChange} />
            <Sign_in_btn navigation={navigation} onPress={handleSignIn} />

          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const stylesK = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#24cccc',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 16,
  },
  content: {
    width: 428,
    height: 926,
    borderRadius: 34,
  },
  // Reszta styli
});
// ciąg dalszy ciemnego prostokąta 
const MyRectangle = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '85%',
        backgroundColor: '#0C1E33',
        borderRadius: 49,
        position: 'positive',
        top: '35%',
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

//obrazeczek obrazunio
const FrameComponent = () => {
  return (
    <View style={{
      position: 'absolute',
      top: '2%',
      zIndex: 2,
      // opacity: 0.3, 
    }}>
      <View style={{
        width: 170,
        height: 170,
        backgroundColor: '#24cccc',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#24cccc',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={require('../assets/pill.png')}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
};

const LoginText = () => {
  return (<Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'positive', bottom: '45%', alignSelf: 'center', zIndex: 1 }}>
    <Text style={{ color: '#fff', fontSize: 34, fontFamily: 'Helvetica-Bold', lineHeight: 42, textAlign: 'center' }}>Zaloguj się</Text>
  </Animatable.View>);
};

const Login = () => {
  return (<Animatable.View animation="fadeIn" easing="ease-in-out"
    style={{ position: 'positive', bottom: '41%', left: "13%", alignSelf: 'left', zIndex: 1 }}>
    <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Helvetica-Bold', lineHeight: 32, textAlign: 'center' }}>Login</Text>
  </Animatable.View>);

};

const BoxL = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <View style={styles.shadows}>
        <View style={styles.shapes}>
          <Text style={styles.text}></Text>
          <TextInput
            style={styles.textInput}
            placeholder="Login"
            placeholderTextColor="#B8B8B8"
            value={value}
            onChangeText={onChangeText} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    bottom: "40%"
  },
  shadows: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  shapes: {
    flex: 1,
    backgroundColor: '#D8FFFA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
    left: "-40%"
  },
});

const Password = () => {
  return (<Animatable.View animation="fadeIn" easing="ease-in-out"
    style={{ position: 'positive', bottom: '35%', left: "13%", alignSelf: 'left', zIndex: 1 }}>
    <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Helvetica-Bold', lineHeight: 32, textAlign: 'center' }}>Hasło</Text>
  </Animatable.View>);

};

const BoxH = ({ value, onChangeText }) => {
  return (
    <View style={styl.container}>
      <View style={styl.shadows}>
        <View style={styl.shapes}>
          <Text style={styl.text}></Text>
          <TextInput
            style={styles.textInput}
            placeholder="Hasło"
            placeholderTextColor="#B8B8B8"
            secureTextEntry
            value={value}
            onChangeText={onChangeText} />
        </View>
      </View>
    </View>
  );
};

const styl = StyleSheet.create({
  container: {
    width: 330,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    bottom: "34%"
  },
  shadows: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  shapes: {
    flex: 1,
    backgroundColor: '#D8FFFA',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#808080',
    fontSize: 18,
    fontWeight: 'bold',
    left: "-40%"
  },
});

/*const Sign_in_btn = ({ navigation, onPress }) => {
  const onPressSignIn = async () => {
    console.log("Trying sign in with user: " + email);
    try {
      await signIn(email, password);
    } catch (error) {
      const errorMessage = `Failed to sign in: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };*/
const Sign_in_btn = ({ onPress }) => {
  const handlePress = () => {
    onPress(); // Wywołaj funkcję onPress
    // Przejdź do ekranu "Main_Screen"
  };



  return (
    <View style={stylesB.view}>
      <View style={stylesB.shadows}>
        <View style={stylesB.shadowLayer}></View>
      </View>
      <TouchableOpacity onPress={handlePress}>
        <View style={stylesB.shapes}>
          <View style={stylesB.shapeLayer}>
            <Text style={stylesB.text}>Zaloguj się</Text>

          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
};

const stylesB = StyleSheet.create({
  view: {
    width: 250,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    position: 'absolute',
    left: 87,
    top: 697,
  },
  shadows: {
    width: 250,
    height: 50,
    borderRadius: 25,
    overflow: 'visible',
    position: 'absolute',
    zIndex: -1,
  },
  shadowLayer: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  shapes: {
    width: 250,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 1,
  },
  shapeLayer: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: 'rgb(36, 204, 182)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2, // add this property
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});



export default Sign_In_Screen