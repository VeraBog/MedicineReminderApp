import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons'; // to do ikonki  głośnika
import Icon from 'react-native-vector-icons/FontAwesome'; // to do kalendarza i w sumie do domku
import IonIcon from 'react-native-vector-icons/Ionicons'; // do tabletki
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Add_Med_Screen_1 = () => {

  const navigation = useNavigation();

  const [nazwa, setNazwa] = useState('')
  const [typLeku, setTypLeku] = useState('');
  const [komentarz, setKomentarz] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [dosage, setDosage] = useState('');

  const handleNazwaLekuChange = (value) => {
    setNazwa(value);
  };

  const handleTypLekuChange = (itemValue) => {
    setTypLeku(itemValue);
  };

  const handleKomentarzChange = (value) => {
    setKomentarz(value);
  };



  const handleProducentChange = (value) => {
    setManufacturer(value);
  };
  const handleDosageChange = (value) => {
    setDosage(value);
  };

  const handleNext = () => {
    navigation.navigate('Add_Med_Screen_2', {
      nazwa,
      typLeku,
      komentarz,
      manufacturer,
      dosage,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []); // tu się w sumie usuwa nagłowek
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={stylesK.container}>
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
          <AddText />
          <WhichMedText />
          <WhichMedBox value={nazwa} onChangeText={handleNazwaLekuChange} />
          <WhichTypeText />
          <WhichTypeBox value={typLeku} onChangeText={handleTypLekuChange} />
          <DoseText />
          <DoseBox value={dosage} onChangeText={handleDosageChange} />
          <ManufacturerText />
          <ManufacturerBox value={manufacturer} onChangeText={handleProducentChange} />
          <CommentText />
          <CommentBox value={komentarz} onChangeText={handleKomentarzChange} />
          <NextButton navigation={navigation} onPress={handleNext} />
          <DolnyPanel />
          <HomeIcon navigation={navigation} />
          <PillIcon navigation={navigation} />
          <HeadIcon navigation={navigation} />
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

const AddText = () => {
  return (
    <Animatable.View animation="fadeIn" easing="ease-in-out" style={{ position: 'absolute', bottom: '86%', left: 0, right: 0 }}>
      <Text style={{ color: '#fff', fontSize: 32, fontFamily: 'Helvetica-Bold', lineHeight: 46, textAlign: 'center' }}>Dodaj lek</Text>
    </Animatable.View>
  );
};

const WhichMedText = () => {
  return (
    <View style={stylesT.container}>
      <Text style={stylesT.text}>
        Nazwa leku
      </Text>
    </View>
  );
}

const stylesT = StyleSheet.create({
  container: {
    backgroundColor: '#0C1320',
    width: 299,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '15.5%',
    left: '15%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
});

const WhichMedBox = ({ value, onChangeText }) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View style={stylesW.container}>
      <View style={stylesW.background} />
      <View style={stylesW.stroke} />
      <TextInput
        style={[stylesW.input, { width: 378, height: 65 }]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Wpisz tutaj..."
        placeholderTextColor="white"
      />


    </View>
  );
};

const stylesW = StyleSheet.create({
  container: {
    //  backgroundColor: 'white',
    backgroundColor: '#0C1F37',
    width: 378,
    height: 63,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#62F0F0',
    overflow: 'hidden',
    position: 'absolute',
    top: '20%',
    left: '5%',
  },
  background: {
    backgroundColor: '#0C1F37',
    flex: 1,
  },
  stroke: {
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#62F0F0',
  },
  input: {
    color: 'white',
    backgroundColor: '#0C1F37',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },
});

const WhichTypeText = () => {
  return (
    <View style={stylesTT.container}>
      <Text style={stylesTT.text}>
        Typ leku
      </Text>
    </View>
  );
}

const stylesTT = StyleSheet.create({
  container: {
    backgroundColor: '#0C1320',
    width: 299,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '28.5%',
    left: '15%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
});

const WhichTypeBox = ({ value, onChangeText }) => {
  // const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={stylesTB.container}>
      <View style={stylesTB.background} />
      <View style={stylesTB.stroke} />
      <TextInput
        style={[stylesTB.input, { width: 378, height: 65 }]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Wpisz tutaj..."
        placeholderTextColor="white"
      />

    </View>
  );
}

const stylesTB = StyleSheet.create({
  container: {
    backgroundColor: '#0C1F37',
    width: 378,
    height: 63,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#62F0F0',
    overflow: 'hidden',
    position: 'absolute',
    top: '33%',
    left: '5%',

  },
  background: {
    backgroundColor: '#0C1F37',
    flex: 1,
  },
  stroke: {
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#62F0F0',
  },
  input: {
    color: 'white',
    backgroundColor: '#0C1F37',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },
  /* pickerContainer: {
     position: 'absolute',
     top: 20,
     left: 0,
     width: 378,
     height: 125,
     opacity: 1,
   },
   picker: {
     color: 'white',
     backgroundColor: 'transparent',
     fontWeight: 'bold',
   },*/

});

const DoseText = () => {
  return (
    <View style={stylesDT.container}>
      <Text style={stylesDT.text}>
        Dawka(mg)
      </Text>
    </View>
  );
}

const stylesDT = StyleSheet.create({
  container: {
    backgroundColor: '#0C1320',
    width: 299,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '42%',
    left: '15%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
});

const DoseBox = ({ value, onChangeText }) => {
  // const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={stylesDB.container}>
      <View style={stylesDB.background} />
      <View style={stylesDB.stroke} />
      <TextInput
        style={[stylesDB.input, { width: 378, height: 65 }]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Wpisz tutaj..."
        placeholderTextColor="white"
      />

    </View>
  );
}

const stylesDB = StyleSheet.create({
  container: {
    backgroundColor: '#0C1F37',
    width: 378,
    height: 63,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#62F0F0',
    overflow: 'hidden',
    position: 'absolute',
    top: '47%',
    left: '5%',

  },
  background: {
    backgroundColor: '#0C1F37',
    flex: 1,
  },
  stroke: {
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#62F0F0',
  },
  input: {
    color: 'white',
    backgroundColor: '#0C1F37',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },


});

const ManufacturerText = () => {
  return (
    <View style={stylesMT.container}>
      <Text style={stylesMT.text}>
        Producent
      </Text>
    </View>
  );
}

const stylesMT = StyleSheet.create({
  container: {
    backgroundColor: '#0C1320',
    width: 299,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '55.5%',
    left: '15%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
});

const ManufacturerBox = ({ value, onChangeText }) => {
  // const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={stylesMB.container}>
      <View style={stylesMB.background} />
      <View style={stylesMB.stroke} />
      <TextInput
        style={[stylesMB.input, { width: 378, height: 65 }]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Wpisz tutaj..."
        placeholderTextColor="white"
      />

    </View>
  );
}

const stylesMB = StyleSheet.create({
  container: {
    backgroundColor: '#0C1F37',
    width: 378,
    height: 63,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#62F0F0',
    overflow: 'hidden',
    position: 'absolute',
    top: '60%',
    left: '5%',

  },
  background: {
    backgroundColor: '#0C1F37',
    flex: 1,
  },
  stroke: {
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#62F0F0',
  },
  input: {
    color: 'white',
    backgroundColor: '#0C1F37',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },


});


const CommentText = () => {
  return (
    <View style={stylesCT.container}>
      <Text style={stylesCT.text}>
        Komentarz
      </Text>
    </View>
  );
}

const stylesCT = StyleSheet.create({
  container: {
    backgroundColor: '#0C1320',
    width: 299,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '68.5%',
    left: '15%',
  },
  text: {
    color: '#fff',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
  },
});

const CommentBox = ({ value, onChangeText }) => {
  return (
    <View style={stylesCB.container}>
      <View style={stylesCB.background} />
      <View style={stylesCB.stroke} />
      <TextInput
        style={[stylesCB.input, { width: 378, height: 65 }]}
        value={value}
        onChangeText={onChangeText}
        placeholder="Wpisz tutaj..."
        placeholderTextColor="white"
      />
    </View>
  );
}

const stylesCB = StyleSheet.create({
  container: {
    backgroundColor: '#0C1F37',
    width: 378,
    height: 63,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#62F0F0',
    overflow: 'hidden',
    position: 'absolute',
    top: '73%',
    left: '5%',
  },
  background: {
    backgroundColor: '#0C1F37',
    flex: 1,
  },
  stroke: {
    position: 'absolute',
    top: -1,
    left: -1,
    right: -1,
    bottom: -1,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#62F0F0',
  },
  input: {
    color: 'white',
    backgroundColor: '#0C1F37',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '100%',
    height: '100%',
  },
});



const NextButton = ({ navigation, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} >
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
    top: 715,
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
        <Icon name="home" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
}

const PillIcon = ({ navigation }) => {
  return (
    <TouchableOpacity  onPress={() => navigation.navigate("MedList_Screen")}>
      <View style={{ bottom: '-2210%', left: '45%' }}>
        <MIcon name="pill" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
};

const HeadIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profil_Screen")}>
      <View style={{ bottom: '-2110%', left: '80%' }}>
        <MIcon name="head" size={30} color="#24cccc" />
      </View>
    </TouchableOpacity>
  );
};



export default Add_Med_Screen_1