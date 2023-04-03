import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Sign_Up_Zar_Screen = () => {
   
    const navigation = useNavigation();
    
    useLayoutEffect(()=> {
        navigation.setOptions({
          headerShown:false,
       });
    }, [] ); // tu się w sumie usuwa nagłowek
    
    return (
        <View style={{ backgroundColor: '#24cccc', width: 428, height: 926, borderRadius: 34 }}>
         <View style={{ position: 'positive', top: 50, width: '100%', height: '80%', alignItems: 'center' }}>
        <FrameComponent/>
        
          <MyRectangle/> 
          <LoginText/>
          <Login/>
          <BoxL/>
          <Password/>
          <BoxH/>
          <Sign_in_btn/>

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

const LoginText = () => {
  return ( <Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'positive',bottom: '45%', alignSelf: 'center', zIndex: 1 }}>
     <Text style={{ color: '#fff', fontSize: 34, fontFamily: 'Helvetica-Bold', lineHeight: 42, textAlign: 'center' }}>Zaloguj się</Text>
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
  
const Sign_in_btn = () => {
    return (
        <View style={stylesB.view}>
          <View style={stylesB.shadows}>
            <View style={stylesB.shadowLayer}></View>
          </View>
          <View style={stylesB.shapes}>
            <View style={stylesB.shapeLayer}>
              <Text style={stylesB.text}>Zaloguj się</Text>
            </View>
          </View>
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