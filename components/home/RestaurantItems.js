import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantItems( props ) {
  return (
    <View style={{ marginTop: 10 }}>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          onPress={() => props.navigation.navigate('RestaurantDetail', {
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            reviews: restaurant.review_count,
            rating: restaurant.rating,
            categories: restaurant.categories,
          })}
        >
          <View style={{ padding: 15, backgroundColor: 'white' }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const RestaurantImage = (props) => (
  <View>
    <Image
      source={{
        uri: props.image,
      }}
      style={{ width: '100%', height: 180 }}
    />
    <TouchableOpacity style={{ position: 'absolute', right: 15, top: 15 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </View>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: '700' }}>{props.name}</Text>
      <Text style={{ fontSize: 13, color: 'gray' }}>20-35 • min</Text>
    </View>
    <View
      style={{
        backgroundColor: '#eee',
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
