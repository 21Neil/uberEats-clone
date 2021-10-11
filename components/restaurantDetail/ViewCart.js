import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ViewCart() {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 30,
        zIndex: 999,
    }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            padding: 10,
            borderRadius: 30,
            width: 200,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
