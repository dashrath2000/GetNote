// import React from 'react';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../constants/Colors';
import Accordion from 'react-native-collapsible/Accordion';
import {DropDown} from '../Index';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {TouchableOpacity} from 'react-native';
import Content from './content';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Entypo';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
// import Menucom from '../Menucom';
class AccordionView extends Component {
  state = {
    activeSections: [],
    visible: false,
  };
  hideMenu = () => {
    this.setState({visible: false});
  };

  showMenu = () => {
    this.setState({visible: true});
  };

  _renderHeader = section => {
    return (
      <View>
        {/* <Text style={{fontSize: 18, fontWeight: 'bold'}}>{section.name}</Text> */}
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{section.Title}</Text>
        <Text style={{color: '#6A6363', fontSize: 14}}>
          {'Last Saved:' + section.Date}
        </Text>

        {/* <TouchableOpacity
          style={{position: 'absolute', right: 0}}
          onPress={this.showMenu}>
          <Icon
            name={'dots-three-vertical'}
            size={responsiveWidth('6')}
            color={Colors.DisableLight}
          />
        </TouchableOpacity> */}
        {/* <Menucom /> */}
      </View>
    );
  };

  _renderContent = section => {
    return (
      <Content
        section={section}
        Navigation={this.props.Navigation}
        loading={this.props.loading}
      />
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <Accordion
        sections={this.props.data}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
        sectionContainerStyle={{
          backgroundColor: Colors.White,
          marginHorizontal: widthPercentageToDP('4'),
          marginVertical: responsiveWidth('2'),
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: 20,
          borderColor: 'white',
          borderWidth: 0.5,
          elevation: 0.5,
        }}
        underlayColor={'transparent'}
      />
    );
  }
}

export default AccordionView;
