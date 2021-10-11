import React from 'react';
import { View, Text, Image } from 'react-native';

export default function RestaurantImage(props) {
  const { image } = props.route.params;
  return <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />;
}
