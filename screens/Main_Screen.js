import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons'; // to do ikonki  głośnika
import Icon from 'react-native-vector-icons/FontAwesome'; // to do kalendarza i w sumie do domku
import IonIcon from 'react-native-vector-icons/Ionicons'; // do tabletki
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LoadMed } from '../controller/MedicineController'; // Importuj funkcję LoadMed z kontrolera

import axios from 'axios';


const Main_Screen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [medicineData, setMedicineData] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    fetchMedicineData();
    handleRefresh();

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

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchMedicineData();
    setRefreshing(false);
  };
  const handleNotificationDismiss = () => {
    setShowNotification(false);
  };

  return (
    <View
      style={{
        width: 428,
        height: 926,
        backgroundColor: '#0C1320',
        borderRadius: 34,
        //backgroundColor: 'rgba(12, 35, 64, 1)',  // w okienko jeszcze medicineData={medicineData}
      }}>
      <NotificationIcon />
      <Speaker navigation={navigation} />
      <BigText />
      <Okienko medicineData={medicineData} />
      <DolnyPanel />
      <RefreshIcon onPress = {handleRefresh} />
      <PlusIcon navigation={navigation} />
      <HomeIcon />
      <PillIcon navigation={navigation} />
      <HeadIcon navigation={navigation} />


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
/*
  const SidePanel = () => {
    return (
      <View style={{ width: 28.95, height: 32.15, top:'10%',left:'3%', backgroundColor: '#2AC1BC', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '80%', height: 2, backgroundColor: '#FFFFFF', marginBottom: 4 }} />
      <View style={{ width: '70%', height: 2, backgroundColor: '#FFFFFF', marginBottom: 4 }} />
      <View style={{ width: '60%', height: 2, backgroundColor: '#FFFFFF' }} />
    </View>
    );
  }; */

const Speaker = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("SoundSwitch")}>
      <View style={styles.volumeDownContainer}>
        <View style={styles.volumeDownIcon}>
          <AntDesign name="sound" size={24} color="rgba(98, 243, 243, 1)" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

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

const BigText = () => {
  return (
    <Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'absolute', bottom: '70%', left: 0, right: 0 }}>
      <Text style={{ color: '#fff', fontSize: 48, fontFamily: 'Helvetica-Bold', lineHeight: 56, textAlign: 'left' }}>Witaj {"\n"} Weronika</Text>
    </Animatable.View>
  );
};

const Okienko = ({ medicineData }) => {
  console.log('ma wyświetlać a chuja', medicineData);
  return (
    <View style={stylesO.container}>
      <View style={stylesO.shadows}>
        <View style={stylesO.shadow0} />
        <View style={stylesO.shadow1} />
      </View>
      <View style={stylesO.shapes}>
        <Text style={stylesO.title}>Twoje leki</Text>
        <ScrollView contentContainerStyle={stylesO.scrollContainer}>
          {medicineData.map((medicine, index) => (
            <View key={index} style={stylesO.medicineData}>
              <Text style={stylesO.medicineText}>
                Name: {medicine.name}
              </Text>
              <Text style={stylesO.medicineText}>
                Dosage: {medicine.dosage}
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
    height: 426,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    position: 'absolute',
    left: 19,
    top: 300,
  },
  shadows: {
    position: 'absolute',
    width: 376,
    height: 426,
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
    height: 426,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  medicineText: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

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
    top: '85%',
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
    bottom: '-1652%',
    left: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shapeLayer1: {
    height: 119,
    backgroundColor: '#0C1F32',
  },
});

const RefreshIcon = ({handleRefresh}) => {
  return (
    <TouchableOpacity onPress={handleRefresh}>
    <View style={{ position: 'absolute', bottom: -660, left: '10%' }}>
      <Icon name="refresh" size={30} color="#24cccc" />
    </View>
  </TouchableOpacity>
  );
}

const PlusIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Add_Med_Screen_1")}>
      <View style={{ backgroundColor: 'transparent', width: 40, height: 40, bottom: '-1550%', left: '80%' }}>
        <Icon name="medkit" size={30} color="#24cccc" style={{ alignSelf: 'center', marginTop: 10 }} />
      </View>
    </TouchableOpacity>

  );
}

const HomeIcon = () => {
  return (
    <TouchableOpacity>
      <View style={stylesDP.iconContainer}>
        <Icon name="home" size={30} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

/* const PillsIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <IonIcon name="medkit" size={30} color="#fff" />
    </View>
  );
}; */

const PillIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("MedList_Screen")}>
      <View style={{ bottom: '-2090%', left: '45%' }}>
        <MIcon name="pill" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
};
const HeadIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profil_Screen")}>
      <View style={{ bottom: '-1985%', left: '80%' }}>
        <MIcon name="head" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
};


export default Main_Screen;