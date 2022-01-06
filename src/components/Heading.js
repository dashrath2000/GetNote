import React from 'react';
import {View, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '../constants/Colors';

const Heading = ({Textstyle, Constyle,Title}) => {
  return (
    <View style={[Constyle]}>
      <Text
        style={[
          {
            fontSize: responsiveFontSize(3.5),
            textAlign: 'center',
            fontWeight: 'bold',
            color: Colors.Black,
          },
          Textstyle,
        ]}>
        {Title}
      </Text>
    </View>
  );
};

export default Heading;
