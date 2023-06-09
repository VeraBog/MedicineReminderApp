import { useNavigation } from '@react-navigation/native';
import { StatusBar} from 'expo-status-bar';
import React, { useLayoutEffect,useState } from 'react';

import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Sign_In_Screen from './Sign_In_Screen';


// taki jakby główny ekran powitalny
const Welcome_Screen = () => {
    const navigation = useNavigation();
    
    
    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown:false,
        });
    }, [] ); // tu się w sumie usuwa nagłowek
    
    return (
        <View style={{ backgroundColor: '#24cccc', width: 428, height: 926, borderRadius: 34 }}>
        <View style={{ position: 'positive', top: 50, width: '100%', height: '80%', alignItems: 'center' }}>
        <FrameComponent />
        <MyRectangle />
        <PillReminder />
        <ReminderText/>
        <ButtonGroup navigation={navigation}/> 
        
      </View>
    </View>
  );
};

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
}
// tu mamy ala nazwe PILLREMINDER
const PillReminder = () => {
return ( <Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'positive',bottom: '45%', alignSelf: 'center', zIndex: 1 }}>
<Text style={{ color: '#fff', fontSize: 34, fontFamily: 'Helvetica-Bold', lineHeight: 42, textAlign: 'center' }}>Pill Reminder</Text>
</Animatable.View>);
}

// tu mamy se tekst o tabletkach
const ReminderText = () => {
    return (
      <Animatable.View animation="fadeIn" easing="ease-in-out"   //animacje se tu mamy pulsująca
      style={{ position: 'absolute', top: '55%', alignSelf: 'center', zIndex: 2 }}>
        <View style={{ 
          width: 200, 
          height: 217, 
          backgroundColor: '#0C1E33', 
          borderRadius: 10, 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}>
          <Text style={{ color: '#fff', fontSize: 24, fontFamily: 'Helvetica-Bold', lineHeight: 30, textAlign: 'center' }}>
            Aby pomóc ci pamiętać o twoich lekach
          </Text>
        </View>
      </Animatable.View>
    );
  }
  
  const ButtonGroup = ({ navigation }) => {   // trzeba pamiętać że to navigation musi byc przekazane jako props bo nie będzie czytać, 
                                              //i u góry w naszym WelcomeScreen też jako <ButtonGroup navigation={navigation}/>
    return (
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={() => navigation.navigate("Sign_In_Screen")} 
        style={styles.buttonContainer}>
          <View style={styles.buttonShadow}></View>
          <View style={styles.buttonShape}></View>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Sign_Up_Zar_Screen")}
        style={styles.buttonContainer}>
          <View style={styles.buttonShadow}></View>
          <View style={styles.buttonShape}></View>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    buttonGroup: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: '25%',
    },
    buttonContainer: {
      width: 154,
      height: 48,
      borderRadius: 24,
      overflow: 'hidden',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    buttonShadow: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      zIndex: -1,
    },
    buttonShape: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    },
    buttonText: {
      color: '#1bc0c0',
      fontSize: 17,
      fontFamily: 'Helvetica-Bold',
      textTransform: 'uppercase',
      textAlign: 'center',
      //alignSelf: 'top',
      //marginBottom: '20%'
      //lineHeight: 40,
      paddingVertical: 95,
    },
  });

export default Welcome_Screen; 
