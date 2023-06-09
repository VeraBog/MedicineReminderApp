import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons'; // to do ikonki  głośnika
import Icon from 'react-native-vector-icons/FontAwesome'; // to do kalendarza i w sumie do domku
import IonIcon from 'react-native-vector-icons/Ionicons'; // do tabletki
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

const MedList_Screen = () => {

  const navigation = useNavigation();
  const [medicineData, setMedicineData] = useState([]);

  useLayoutEffect(() => {

    fetchMedicineData();
    navigation.setOptions({
      headerShown: false,
    });
  }, []); // tu się w sumie usuwa nagłowek

  const fetchMedicineData = async () => {
    try {
      const response = await axios.get('http://192.168.0.5:8000/Main_Screen');
      const data = response.data;
      console.log('z metody fetchMedicineData', response.data)
      setMedicineData(data);
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
    }
  };

  return (
    <View
      style={{
        width: 428,
        height: 926,
        backgroundColor: '#0C1320',
        borderRadius: 34,
        //backgroundColor: 'rgba(12, 35, 64, 1)',
      }}>

      <NotificationIcon />
      <Speaker />
      <MedListText />

      <Okienko medicineData={medicineData} />
      <DolnyPanel />
      <HomeIcon navigation={navigation} />
      <PillIcon />
      <HeadIcon />
    </View>
  );
};


const NotificationIcon = () => {
  return (
    <TouchableOpacity>
      <View style={{ top: '270%', left: '5%' }}>
        <IonIcon name="notifications" size={30} color="#24CCCC" />
        <Text style={{ position: 'absolute', top: -5, right: -10, backgroundColor: 'red', borderRadius: 8, width: 16, height: 16, textAlign: 'center', color: 'white', fontSize: 12 }}>1</Text>
      </View>
    </TouchableOpacity>
  );
};

const Speaker = () => {
  return (
    <TouchableOpacity>
      <View style={styles.volumeDownContainer}>
        <View style={styles.volumeDownIcon}>
          <AntDesign name="sound" size={24} color="rgba(98, 243, 243, 1)" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const MedListText = () => {
  return (
    <Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'absolute', bottom: '86%', left: 0, right: 0 }}>
      <Text style={{ color: '#fff', fontSize: 32, fontFamily: 'Helvetica-Bold', lineHeight: 46, textAlign: 'center' }}>Lista leków</Text>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  volumeDownContainer: {
    position: 'absolute',
    width: 24.811594009399414,
    height: 24.803571701049805,
    top: 55,
    left: '85%',
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '0deg' },
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  volumeDownIcon: {
    position: 'absolute',
    width: 24.811594009399414,
    height: 24.803585052490234,
    transform: [
      { translateX: 0 },
      { translateY: 0 },
      { rotate: '0deg' },
    ],
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
  },
});

const Okienko = ({ medicineData }) => {
  console.log(medicineData);
  return (
    <View style={stylesO.container}>
      <View style={stylesO.shadows}>
        <View style={stylesO.shadow0} />
        <View style={stylesO.shadow1} />
      </View>
      <View style={stylesO.shapes}>
        <Text style={stylesO.title}>Twoje leki - lista </Text>
        <ScrollView contentContainerStyle={stylesO.scrollContainer}>
          {medicineData.map((medicine, index) => (
            <View key={index} style={stylesO.medicineData}>
              <Text style={stylesO.medicineText}>
                Nazwa: {medicine.name}
              </Text>
              <Text style={stylesO.medicineText}>
                Dawka: {medicine.dosage}
              </Text>
              <Text style={stylesO.medicineText}>
                Producent: {medicine.manufacturer}
              </Text>
              <Text style={stylesO.medicineText}>
                Typ Leku: {medicine.typeMed}
              </Text>
              <Text style={stylesO.medicineText}>
                Data: {medicine.date}
              </Text>
              <Text style={stylesO.medicineText}>
                Czas: {medicine.time}
              </Text>
              <Text style={stylesO.medicineText}>
                Komentarz: {medicine.comment}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const stylesO = StyleSheet.create({
  container: {
    width: 376,
    height: 526,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    position: 'absolute',
    left: 19,
    top: 200,
  },
  shadows: {
    position: 'absolute',
    width: 376,
    height: 526,
    zIndex: -1,
  },
  shadow0: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: '#000000',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 5,
      height: 4,
    },
    position: 'absolute',
    top: 0,
    left: 0,
  },
  shadow1: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    shadowColor: 'rgba(134, 214, 226, 0.09)',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: -3,
      height: -2,
    },
    position: 'absolute',
    top: 0,
    left: 0,
  },
  shapes: {
    width: 376,
    height: 526,
    borderRadius: 25,
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: '#0C141F',
    borderWidth: 0.2,
    borderColor: '#FFFFFF',
  },
  title: {
    color: '#24cccc',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  medicineData: {
    justifyContent: 'left',
    alignItems: 'left',
    marginBottom: 35,
  },
  medicineText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

/*const NextButton = ({ navigation }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Add_Med_Screen_2")} >
        <View style={stylesNB.container}>
        <Text style={stylesNB.text}>Dalej</Text>
  </View>
      </TouchableOpacity>
    );
  }
  
  const stylesNB = StyleSheet.create({
    container: {
      backgroundColor: '#24CCCC',
      width: 129,
      height: 45,
      position: 'absolute',
      top: 671,
      left: 149,
      borderRadius: 22.5,
      justifyContent: 'center',
      alignItems: 'center',
      },
      text: {
      color: 'black',
      fontSize: 18,
      fontFamily: 'Helvetica-Bold',
      lineHeight: 19,
      textAlign: 'center',
      paddingTop: 8,
      },
      });*/


const DolnyPanel = () => {
  return (
    <View style={stylesDP.container}>
      <View style={stylesDP.shadows}>
        <View style={stylesDP.shadowLayer0} />
      </View>
      <View style={stylesDP.shapes}>
        <View style={stylesDP.shapeLayer1} />
      </View>
    </View>
  );
};

const stylesDP = StyleSheet.create({
  container: {
    height: 100,
    top: '83%',
    backgroundColor: '#0C1F32',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 5,
  },
  shadows: {
    flex: 1,
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  shadowLayer0: {
    height: 119,
    borderRadius: 0,
    backgroundColor: '#0C1F32',
    transform: [{ scaleY: 1.05 }],
  },
  shapes: {
    flex: 1,
    borderRadius: 0,
    overflow: 'hidden',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  //tutaj mamy styl do ikonki domku
  iconContainer: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: 40,
    height: 40,
    bottom: '-1740%',
    left: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shapeLayer1: {
    height: 119,
    backgroundColor: '#0C1F32',
  },
});

const HomeIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Main_Screen")}>
      <View style={stylesDP.iconContainer}>
        <Icon name="home" size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

const PillIcon = () => {
  return (
    <TouchableOpacity>
      <View style={{ bottom: '-2210%', left: '45%' }}>
        <MIcon name="pill" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
};

const HeadIcon = () => {
  return (
    <TouchableOpacity>
      <View style={{ bottom: '-2110%', left: '80%' }}>
        <MIcon name="head" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
};



export default MedList_Screen