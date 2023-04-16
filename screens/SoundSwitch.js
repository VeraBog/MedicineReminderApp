import React, { useLayoutEffect,useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity, Dimensions, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons'; // to do ikonki  głośnika
import Icon from 'react-native-vector-icons/FontAwesome'; // to do kalendarza i w sumie do domku
import IonIcon from 'react-native-vector-icons/Ionicons'; // do tabletki
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const SoundSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();
  useLayoutEffect(()=> {
    navigation.setOptions({
      headerShown:false,
   });
}, [] );

  return (
    
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate('Main_Screen')}>
          <IonIcon name="close-circle-outline" size={50} color="#24CCCC"  />
        </TouchableOpacity>
      <View style={styles.switchContainer}>
        
        <Text style={styles.text}>Dźwięk</Text>
        <View style={styles.switchWrapper}>
          <Switch
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={isEnabled ? '#fff' : '#fff'}
            ios_backgroundColor="#24CCCC"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
          <Text style={styles.textOnOf}>{isEnabled ? 'ON' : 'OFF'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C1320',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    position: 'relative',
    top: '20%',
    left: '40%',
  },
  switchContainer: {
    width: '80%',
    height: '40%',
    backgroundColor: '#24CCCC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
  },
  
  switchWrapper: {
    alignItems: 'center',
  },
  switch: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },

  textOnOf:
  {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    bottom:'-32%',
  },
});

export default SoundSwitch;
