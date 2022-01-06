import React from 'react';
import {View, Text} from 'react-native';
import {DropDown} from '../Index';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native';
import {Colors} from '../../constants/Colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const content = ({section, Navigation, loading}) => {
  const actionPer = async value => {
    // Navigation.navigate('Tabs');
    try {
      // console.log(value);
      // await AsyncStorage.setItem('sectionValue', value);
    } catch (error) {
      console.log('falied to store');
    }
  };
  // console.log('d' + loading)
  return (
    <View key={section.id}>
      <Text style={{lineHeight: 20}}>{'CreatedAt:' + section.Date}</Text>
      <Text style={{lineHeight: 14.5}}>{section.Status}</Text>
      {/* <Text style={{lineHeight: 14.50}}>{'Location:  ' + section.Location}</Text> */}
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>Location: {section.name} </Text>
        {/* <DropDown data={section.name} /> */}
      </View>
      <View style={{borderBottomWidth: 1, marginTop: 10}} />
      <Text style={{lineHeight: 14.5, marginTop: 10}}>
        {'Price List: ' + section.Pricetype}
      </Text>
      {/* <Text style={{lineHeight: 14.50,marginTop:20,fontWeight:'500'}}>{'Price List: ' + section.Pricetype}</Text> */}
      <View style={{borderBottomWidth: 1, marginTop: 10, marginBottom: 10}} />
      <Text>Other Details:</Text>
      <View style={{borderBottomWidth: 1, marginTop: 15}} />
      <TouchableOpacity onPress={() => console.log(section.Date)}>
        <TouchableOpacity onPress={actionPer.bind(this, section.Title)}>
          <View
            style={{
              backgroundColor: Colors.PrimaryColor,
              paddingHorizontal: 5,
              paddingVertical: 5,
              marginHorizontal: responsiveWidth(30),
              borderRadius: 20,
              marginTop: 10,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Full View</Text>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default content;
