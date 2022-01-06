import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Menu from 'react-native-material-menu';
import {MenuDivider} from 'react-native-material-menu';
import {MenuItem} from 'react-native-material-menu';
import {responsiveWidth} from 'react-native-responsive-dimensions';

const Menucom = () => {
  const [visible, setvisible] = useState(false);

  const hideMenu = () => {
    setvisible(false);
    // this.setState({visible: false});
  };

  const showMenu = () => {
    // this.setState({visible: true});
  };
  return (
    <Menu
      style={{marginLeft: responsiveWidth('50')}}
      visible={visible}
      // anchor={<Text onPress={this.showMenu}>Show menu</Text>}
      onRequestClose={hideMenu}>
      <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
      <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
      <MenuItem disabled>Disabled item</MenuItem>
      <MenuDivider />
      <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
    </Menu>
  );
};

export default Menucom;
