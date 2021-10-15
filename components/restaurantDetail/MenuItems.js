import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },

  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
  },

  descriptionStyle: {
    fontSize: 13,
  },
});

export default function MenuItem({ restaurantName, foods, hideCheckbox, marginLeft, hideSpace }) {
  const disPatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    disPatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector((state) => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={{ borderColor: 'lightgray', borderRadius: 3 }}
                fillColor="green"
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider width={0.5} style={{ marginHorizontal: 15 }} />
        </View>
      ))}
      {hideSpace ? <></> : <View style={{ height: 100 }}></View>}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: '55%', justifyContent: 'space-evenly' }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={styles.descriptionStyle}>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 80, height: 80, borderRadius: 8, marginLeft: marginLeft }}
    />
  </View>
);
