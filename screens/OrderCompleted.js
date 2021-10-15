import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from '../firebase';
import MenuItem from '../components/restaurantDetail/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Braised Pork On Rice',
        description: 'Local pork',
        price: 'NT$50',
        image: 'https://imgcdn.cna.com.tw/www/WebPhotos/1024/20201011/1838x1218_590922953265.jpg',
      },
    ],
  });

  const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

  const total =
    'NT$' +
    items
      .map((item) => Number(item.price.replace('NT$', '')))
      .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          margin: 15,
          height: '100%',
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
            marginBottom: 10,
          }}
        >
          Your order at {restaurantName} has been placed for {total}
        </Text>
        <ScrollView>
          <MenuItem foods={lastOrder.items} hideCheckbox={true} hideSpace={true} />
        </ScrollView>
        <LottieView
          style={{ height: 150, alignSelf: 'center' }}
          source={require('../assets/animations/cooking.json')}
          autoPlay
          speed={0.5}
        />
      </View>
    </SafeAreaView>
  );
}
