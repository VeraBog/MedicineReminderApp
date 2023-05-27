import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity,TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Sign_Up_Zar_Screen = () => {
   
    const navigation = useNavigation();
    
    useLayoutEffect(()=> {
        navigation.setOptions({
          headerShown:false,
       });
    }, [] ); // tu się w sumie usuwa nagłowek
    const [Login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style={{ backgroundColor: '#24cccc', width: 428, height: 926, borderRadius: 34 }}>
         <View style={{ position: 'positive', top: 50, width: '100%', height: '80%', alignItems: 'center' }}>
        <FrameComponent/>
        
          <MyRectangle/> 
          <ZarejestrujText/>
          <Login/>
          <BoxL TextInput          
          placeholder="Login"
          autoCapitalize="none" />
          <Name/>
          <BoxN TextInput          
          placeholder="Name"
          autoCapitalize="none"/>
          <Password/>
          <BoxH TextInput          
          placeholder="Password"
          secureTextEntry/>
          <Sign_up_btn navigation={navigation}/>

        </View>
        
      
    </View>
  );
};

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
                        source={require('C:/Users/werka/OneDrive/Pulpit/Apka/ReminderMedApp/assets/pill_icon.jpg')}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
            </View>
        );
        };

const ZarejestrujText = () => {
  return ( <Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'positive',bottom: '45%', alignSelf: 'center', zIndex: 1 }}>
     <Text style={{ color: '#fff', fontSize: 34, fontFamily: 'Helvetica-Bold', lineHeight: 42, textAlign: 'center' }}>Zarejestruj się</Text>
     </Animatable.View>);
};

const Login = () => {
    return ( <Animatable.View animation="fadeIn" easing="ease-in-out" 
    style={{ position: 'positive',bottom: '41%', left:"13%", alignSelf: 'left', zIndex: 1 }}>
     <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Helvetica-Bold', lineHeight: 32, textAlign: 'center' }}>Login</Text>
     </Animatable.View>);
                  
};

const BoxL = () => {
    return (
      <View style={styles.container}>
        <View style={styles.shadows}>
          <View style={styles.shapes}>
            <Text style={styles.text}>Login</Text>
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
      bottom:"40%"
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
      left:"-40%"
    },
  });

  const Name = () => {
    return ( <Animatable.View animation="fadeIn" easing="ease-in-out" 
    style={{ position: 'positive',bottom: '38%', left:"13%", alignSelf: 'left', zIndex: 1 }}>
     <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Helvetica-Bold', lineHeight: 32, textAlign: 'center' }}>Imię</Text>
     </Animatable.View>);
                  
};

const BoxN = () => {
    return (
      <View style={stylesN.container}>
        <View style={stylesN.shadows}>
          <View style={stylesN.shapes}>
            <Text style={stylesN.text}>Imię</Text>
          </View>
        </View>
      </View>
    );
  };
  
  const stylesN = StyleSheet.create({
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
      bottom:"37%"
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
      left:"-42%"
    },
  });

  const Password = () => {
    return ( <Animatable.View animation="fadeIn" easing="ease-in-out" 
    style={{ position: 'positive',bottom: '35%', left:"13%", alignSelf: 'left', zIndex: 1 }}>
     <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Helvetica-Bold', lineHeight: 32, textAlign: 'center' }}>Hasło</Text>
     </Animatable.View>);
                  
};

const BoxH = () => {
    return (
      <View style={styl.container}>
        <View style={styl.shadows}>
          <View style={styl.shapes}>
            <Text style={styl.text}>Hasło</Text>
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
      bottom:"34%"
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
      left:"-40%"
    },
  });
  
const Sign_up_btn = ({navigation}) => {
    
  const onPressSignUp = async () => {
    console.log("Trying signup with user: " + email);
    try {
      await signUp(email, password);                  // lets see here 
      signIn(email, password);
    } catch (error) {
      const errorMessage = `Failed to sign up: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };
  
  
  return (
      
        <View style={stylesB.view}>
          <View style={stylesB.shadows}>
            <View style={stylesB.shadowLayer}></View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Main_Screen")}>
          <View style={stylesB.shapes}>
            <View style={stylesB.shapeLayer}>
              <Text style={stylesB.text}>Zarejestruj się</Text>
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
        backgroundColor: 'white',
        position: 'absolute',
        left: 87,
        top: 697,
      },
      shadows: {
        width: 250,
        height: 50,
        overflow: 'visible',
        position: 'absolute',
        zIndex: -1,
      },
      shadowLayer: {
        width: '100%',
        height: '100%',
        borderRadius: 0,
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
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 1,
      },
      shapeLayer: {
        width: '100%',
        height: '100%',
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

export default Sign_Up_Zar_Screen