import React from 'react';
import { View, Text, Image } from 'react-native';

export default function About(props) {
  const { name, image, price, reviews, rating, categories } = props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(' · ');

  const description = `${formattedCategories} ${
    price ? ' · ' + price : ''
  } · 🎫 · ${rating} ⭐ (${reviews})`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 25,
      fontWeight: '700',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginBottom: 20,
      marginHorizontal: 15,
      fontSize: 13,
    }}
  >
    {props.description}
  </Text>
);
