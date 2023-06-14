import { useState, useEffect, useRef } from 'react';
import { Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { scheduleNotificationAsync } from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function setupPushNotifications() {
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      // Tutaj możesz zrobić coś z otrzymanym tokenem, na przykład zapisać go w stanie komponentu lub wysłać na serwer

      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        // Tutaj możesz zrobić coś z otrzymanym powiadomieniem, na przykład zaktualizować stan komponentu lub wyświetlić powiadomienie

        console.log(notification);
      });

      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        // Tutaj możesz zrobić coś z odpowiedzią na powiadomienie, na przykład przekierować użytkownika do odpowiedniej strony

        console.log(response);
      });
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function registerForPushNotificationsAsync() {
    let token = 'ExponentPushToken[z9Uro_Du7rh_tDa1FG0exz]'; // ZAMIEŃ NA SWÓJ TOKEN EXPO PUSH

    // Jeśli chcesz automatycznie pobrać token, możesz użyć tego kodu:
    // const { status: existingStatus } = await Notifications.getPermissionsAsync();
    // let finalStatus = existingStatus;
    //
    // if (existingStatus !== 'granted') {
    //   const { status } = await Notifications.requestPermissionsAsync();
    //   finalStatus = status;
    // }
    //
    // if (finalStatus !== 'granted') {
    //   console.log('Failed to get push token for push notification!');
    //   return;
    // }
    //
    // token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);

    console.log(token);

    return token;
  }
}

export async function sendPushNotification(expoPushToken, title, body, data) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: title,
    body: body,
    data: data,
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

/*export const createLocalNotification = async (title, body, time, medicineType) => {
  const trigger = new Date(time);
  const identifier = await scheduleNotificationAsync({
    content: {
      title,
      body,
      sound: 'default',
      vibrate: [0, 250, 250, 250],
    },
    trigger, // Możesz dostosować wyzwalacz powiadomienia
  });
  console.log(`Utworzono lokalne powiadomienie z identyfikatorem: ${identifier}`);
};*/

export const createLocalNotification = async (title, body, time, medicineType) => {
  const trigger = new Date(time);
  let identifier;

  if (medicineType === 'Immunosupresant') {
    // Dla leków immunosupresyjnych możesz dostosować treść powiadomienia lub inne ustawienia
    identifier = await scheduleNotificationAsync({
      content: {
        title: 'Przypomnienie o leku immunosupresyjnym',
        body: `Przyjmij lek "${title}" - ${body} , pamiętaj bądź naczczo!`,
        sound: 'default',
        vibrate: [0, 250, 250, 250],
      },
      trigger,
    });
  } else {
    // Dla innych leków
    identifier = await scheduleNotificationAsync({
      content: {
        title,
        body,
        sound: 'default',
        vibrate: [0, 250, 250, 250],
      },
      trigger,
    });
  }

  console.log(`Utworzono lokalne powiadomienie z identyfikatorem: ${identifier}`);
};


/*export async function scheduleNotification(content, drugName, timeInSeconds) {
    const trigger = {
      seconds: timeInSeconds,
    };
  
    const notificationContent = {
      title: 'Przypomnienie o leku',
      body: `Przyjmij lek "${drugName}" - ${content}`,
      data: { drugName: drugName },
    };
  
    await Notifications.scheduleNotificationAsync({
      content: notificationContent,
      trigger: trigger,
    });
  }*/