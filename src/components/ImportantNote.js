import React from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import { Colors } from '../constants/Colors';

const ImpNote = [
  {
    Title: 'Working Hour',
    Note: 'is a long establised fact that redner will bes distracted by the readle contact of a ...',
    color: '#FFAEBC',
  },
  {
    Title: 'Working Hour',
    Note: 'is a long establised fact that redner will bes distracted by the readle contact of a ...',
    color: '#A0E7E5',
  },
  {
    Title: 'Working Hour',
    Note: 'is a long establised fact that redner will bes distracted by the readle contact of a ...',
    color: '#B4F8C8',
  },
  {
    Title: 'Working Hour',
    Note: 'is a long establised fact that redner will bes distracted by the readle contact of a ...',
    color: 'purple',
  },
  {
    Title: 'Working Hour',
    Note: 'is a long establised fact that redner will bes distracted by the readle contact of a ...',
    color: '#7ccc6a',
  },
];

const ImportantNote = () => {
  return (
    <View
      style={{
        marginHorizontal: widthPercentageToDP('4'),
        marginVertical: heightPercentageToDP('2'),
      }}>
      <Text style={{marginBottom: heightPercentageToDP('2'),color:Colors.PrimaryColor}}>
        Important Note
      </Text>
      <FlatList
        //   style={{marginHorizontal:44}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ImpNote}
        renderItem={({item}) => {
          return (
            <View
              style={{
                height: heightPercentageToDP('24'),
                width: widthPercentageToDP('38'),
                backgroundColor: item.color,
                borderRadius: 15,
                marginHorizontal: widthPercentageToDP('2'),
                elevation:5,
                marginBottom:heightPercentageToDP('2')
              }}>
              <Text
                style={{
                  color: 'white',
                  padding: widthPercentageToDP('2'),
                  paddingTop: heightPercentageToDP('4'),

                  paddingLeft: widthPercentageToDP('4'),
                }}>
                working Hour
              </Text>
              <View style={{marginHorizontal: widthPercentageToDP('2.8')}}>
                <View
                  style={{
                    // height: 10,
                    width: '100%',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#e6e6e6',
                    // marginHorizontal:widthPercentageToDP('2.5')
                    // paddingHorizontal: widthPercentageToDP('4')
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: responsiveFontSize(1.6),
                  lineHeight: 20,
                  color: 'white',
                  marginTop: heightPercentageToDP('1.5'),
                  marginHorizontal: widthPercentageToDP('2.8'),
                }}>
                is a long establised fact that redner will bes distracted by the
                readle contact of a ...
              </Text>
            </View>
          );
        }}
      />
    </View>
    // <ScrollView >

    // </ScrollView>
  );
};

export default ImportantNote;
