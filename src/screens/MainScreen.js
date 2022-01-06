import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {ButtonIc, Heading, Item, TextinputIc} from '../components/Index';
import ImportantNote from '../components/ImportantNote';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../constants/Colors';
// import {openDatabase} from 'react-native-sqlite-storage';
import {Images} from '../assets/Images';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Menucom from '../components/Menucom';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'Noteappdata.db', createFromLocation: 1});

const DATA = [
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
  {
    Date: 'DFFD',
    Title: 'RED',
  },
];
// var db = openDatabase({ name: 'IcountDatabas.db' });
// import {useDispatch, useSelector} from 'react-redux';

// import {GetCatloglist} from './../../Redux/Actions/ListCatlogAction';

// Connction to access the pre-populated user_db.db
// const db = openDatabase({name: 'ICountDatab.db', createFromLocation: 1});

const ListCatalog = ({navigation, route}) => {
  // let [flatListItems, setFlatListItems] = React.useState([]);
  // const [loading, isloading] = useState(false);
  // const [loading, isloading] = useState(false);
  // let [filterData, setfilterData] = React.useState([]);
  // const [item, SetItem] = React.useState([]);
  const [query, setQuery] = React.useState('');
  const [data, setData] = React.useState('');
  const [Visible, setVisible] = React.useState(false);
  const MoreHandler = () => {
    setVisible(true);
  };
  // const [, setListName] = React.useState('');
  // const ListCatalogData = useSelector(
  //   state => state.ListCatlogReducer.ListCatlogdata,
  // );

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(GetCatloglist());
  //   console.log('+++++++++++++++__________+++++++++++_______+++');
  // }, [dispatch]);

  // const searchFilter = text => {
  //   if (text) {
  //     const newData = ListCatalogData.filter(item => {
  //       const itemData = item.Title
  //         ? item.Title.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;
  //     });
  //     setfilterData(newData);
  //     setQuery(text);
  //   } else {
  //     setfilterData(ListCatalogData);
  //   }
  //   setQuery(text);
  // };
  React.useEffect(() => {
    console.log('Data' + data);
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM noteapp', [], (_tx, results) => {
        const temp1 = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp1.push(results.rows.item(i));
        }
        setData(temp1);
      });
    });
  }, [data]);

  return (
    <View style={{flex: 1, backgroundColor: '#101820ff'}}>
      <ScrollView stickyHeaderIndices={[3]}>
        <StatusBar
          translucent={true}
          backgroundColor={'transparent'}
          barStyle={'light-content'}
        />
        <Heading
          Textstyle={{color: Colors.PrimaryColor}}
          Title={'Get Note'}
          Constyle={{marginTop: responsiveHeight(7)}}
        />

        <View>
          {/* <Text style={{textAlign: 'center', fontWeight: '500'}}>Edit</Text> */}
        </View>
        <View
          style={{
            backgroundColor: '#101820ff',
            paddingVertical: heightPercentageToDP('0.5'),
          }}>
          <TextinputIc
            Searchhandler={e => setQuery(e)}
            value={query}
            styles={{
              color: 'white',
              backgroundColor: 'rgba(255,255,255,0.10)',
              borderColor: 'rgba(255,255,255,0.10)',
              // fontsize:20,

              borderRadius: 15,
              fontSize: 18,
              marginTop: responsiveHeight(4),
              borderWidth: 1,
            }}
            value={query}
            // setQuery
            placeholder={'Search'}
            // Searchhandler={text => searchFilter(text)}
          />
        </View>

        <ImportantNote />
        {/* <Menucom /> */}

        <Text
          style={{
            marginHorizontal: widthPercentageToDP('4'),
            marginBottom: heightPercentageToDP('2'),
            color: Colors.PrimaryColor,
          }}>
          All Note
        </Text>
        {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
        <ScrollView style={{marginBottom: heightPercentageToDP('8')}}>
          <Item
            MoreHandler
            Visible={Visible}
            data={DATA}
            // data={query ? filterData : ListCatalogData}
            Navigation={navigation}
          />
        </ScrollView>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateNote')}
        style={{
          alignItems: 'flex-end',
          position: 'absolute',
          left: responsiveWidth(85),
          top: responsiveHeight(90),
          bottom: 0,
          right: 15,

          // backgroundColor:'black'
        }}>
        <View
          style={{
            backgroundColor: Colors.PrimaryColor,
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            width: 50,
            borderRadius: 50,
            alignItems: 'center',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <Image
            source={Images.Add}
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListCatalog;
