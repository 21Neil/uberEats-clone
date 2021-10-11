import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderTab from '../components/home/HeaderTab';
import SearchBar from '../components//home/SearchBar';
import Categories from '../components//home/Categories';
import RestaurantItems from '../components//home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY =
  'RbxA65XLb9nIvFTp_cTB5aV9-tf723aJtpjdXXE4OK1wD18iyHz3P6fhkHWq5-2raWx8FugL7jp-QWkqVEKR4PR_gnWBAZmFPVH7E2QnYqAVangeQ2hgEyOK-mNdYXYx';

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [city, setCity] = useState('Taipei');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses //.filter((business) =>
          //business.transactions.includes(activeTab.toLowerCase())
          //)
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTab activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
      </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}
