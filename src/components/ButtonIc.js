import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

const Custombtn = ({title, routename,constyle,Textstyle}) => {
  return (
    <View>
      <TouchableOpacity
        style={[{
          borderRadius: 100,
          paddingVertical: 20,
          paddingHorizontal: 12,
          marginHorizontal: 10,
          marginVertical: 5,
          backgroundColor: 'white',

        },constyle]}
        onPress={routename}>
        <Text style={[{textAlign: 'center', marginHorizontal: 20,fontSize:16,fontWeight:'600',lineHeight:19},Textstyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Custombtn;
