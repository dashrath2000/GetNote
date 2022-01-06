import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Image,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import QuillEditor, {QuillToolbar, quill} from 'react-native-cn-quill';
import {Images} from '../assets/Images';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import {openDatabase} from 'react-native-sqlite-storage';
const db = openDatabase({name: 'Noteappdata.db', createFromLocation: 1});
const CreateNote = ({navigation}) => {
  const [iseditextedit, setiseditextedit] = useState(false);
  const [Title, setTitle] = useState('');
  const [Desc, setDesc] = useState('');
  const _editor = React.createRef();
  // console.log('edt'+ iseditextedit)
  const editorHandler = con => {
    setiseditextedit(true);
  };
  const contentToDisplay = {
    ops: [{insert: 'Hello\n'}, {insert: 'This is another line'}],
  };
  const SaveHandler = () => {
    console.log('run');
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO  noteap (Title,Desc) VALUES (?,?)',
        ['dashrath', 'data is from here'],
        (tx, results) => {
          console.log('going' + results.rowsAffected);
          console.warn('Results');
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'You are Registered Successfully',
              [
                {
                  text: 'Ok',
                  // onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Registration Failed');
          }
        },
      );
    });
    // alert('requrired');
    // console.log('Desck', Desc);
    // _editor.current.setText('Hello\nHello\nHello\nHello\nHello\n');
    // _editor.current.setContents([
    //   {insert: 'dfdfdfdfdfdsfdfdfdjjram  '},
    //   {insert: 'raggg jai', attributes: {size: 'huge'}},
    //   {insert: '\n'},
    // ]); this line will show our content
    // _editor.current.formatText(0, 2, 'bold', true);
    // console.log(_editors.current.getFormat())
    // )
    // console.log(Desc);
  };
  const bodyhandler = e => {
    console.log('html' + JSON.stringify(e.oldDelta.ops));
    setDesc(JSON.stringify(e.oldDelta.ops));
  };

  // const InsertData_handler = () => {
  //   db.transaction(function (tx) {
  //     tx.executeSql(
  //       'INSERT INTO  noteapp (Title,Desc) VALUES (?,?)',
  //       [Title, Desc],
  //       (tx, results) => {
  //         console.warn('Results');
  //         if (results.rowsAffected > 0) {
  //           Alert.alert(
  //             'Success',
  //             'You are Registered Successfully',
  //             [
  //               {
  //                 text: 'Ok',
  //                 // onPress: () => navigation.navigate('HomeScreen'),
  //               },
  //             ],
  //             {cancelable: false},
  //           );
  //         } else {
  //           alert('Registration Failed');
  //         }
  //       },
  //     );
  //   });
  // };

  return (
    <SafeAreaView style={styles.root}>
      {/* < TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> */}
      <StatusBar style="auto" backgroundColor={'white'} />
      <View
        style={{
          marginHorizontal: widthPercentageToDP('5'),
          marginTop: heightPercentageToDP('2'),
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            onPress={() => navigation.goBack()}
            name={'arrow-back-sharp'}
            size={widthPercentageToDP('7.5')}
            color={'black'}
            style={{position: 'absolute', left: 0}}
          />
          {/* <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'red'}}> */}
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: widthPercentageToDP('6'),
            }}>
            Add Note
          </Text>
          <TouchableOpacity
            style={{position: 'absolute', right: 0}}
            onPress={SaveHandler}>
            <Text style={{fontSize: responsiveFontSize(2.2), color: 'green'}}>
              Save
            </Text>
          </TouchableOpacity>
          {/* </View> */}
        </View>
        <View
          style={{
            height: 10,
            width: '100%',
            borderBottomWidth: 1,
            borderColor: '#e6e6e6',
          }}
        />
        {/* <TouchableOpacity onPress={() => editorHandler(false)}> */}
        <TextInput
          onFocus={() => setiseditextedit(false)}
          onChangeText={e => setTitle(e)}
          value={Title}
          placeholder={'Title'}
          style={{
            backgroundColor: 'white',
            marginTop: heightPercentageToDP('5'),
            fontSize: 17,
            fontWeight: '700',
          }}
        />
        {/* </TouchableOpacity> */}
      </View>
      <TouchableOpacity
        style={styles.editor}
        onPress={() => editorHandler(true)}>
        <QuillEditor
          onTextChange={bodyhandler}
          //
          // onChangeText
          placeholder="Write Your Note here..."
          // customFonts={[20]}
          // setText={e => setDesc(e)}
          ref={_editor}

          // initialHtml="<h1>Quill Editor for react-native</h1>"
        />
      </TouchableOpacity>

      {iseditextedit && (
        <QuillToolbar editor={_editor} options="full" theme="light" />
      )}
      {/* </TouchableWithoutFeedback> */}
    </SafeAreaView>
  );
};
export default CreateNote;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  root: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'white',
  },
  editor: {
    flex: 1,
    padding: 0,
    // borderColor: 'gray',
    // borderWidth: 1,
    marginHorizontal: widthPercentageToDP('3'),
    // marginHorizontal: 30,
    // marginVertical: 5,
    backgroundColor: 'white',
  },
});
