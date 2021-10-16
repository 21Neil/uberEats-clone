import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SearchBar(props) {
  const ref = useRef();

  return (
    <View style={{ marginTop: 15, flexDirection: 'row' }}>
      <GooglePlacesAutocomplete
        ref={ref}
        query={{ key: 'AIzaSyDjbvpWRkCIBE4__bLe52DKAh2Fl6LPvyU' }}
        onPress={(data, details = null) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          props.cityHandler(city);
        }}
        placeholder="Search"
        textInputProps={{
          clearButtonMode: 'never',
        }}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
            marginRight: 5,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity
          style={{
            backgroundColor:'white',
            padding: 5,
            borderRadius: 100,
            marginRight: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => {
              ref.current?.clear();
            }}
          >
            <Ionicons name="close-sharp" size={15} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
