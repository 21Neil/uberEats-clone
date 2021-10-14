import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total =
    'NT$' +
    items
      .map((item) => Number(item.price.replace('NT$', '')))
      .reduce((prev, curr) => prev + curr, 0);

  console.log(total);

  return (
    <>
      {total !== 'NT$0' ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 30,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: 'black',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 10,
                borderRadius: 30,
                width: 230,
              }}
            >
              <Text style={{ color: 'white', fontSize: 16, marginRight: 25 }}>View Cart</Text>
              <Text style={{ color: 'white', fontSize: 16 }}>{total}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
