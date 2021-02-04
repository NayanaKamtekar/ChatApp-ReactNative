import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width} = Dimensions.get('screen');
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddChat = ({addChat}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Write message here..."
        style={styles.input}
        onChangeText={onChange}
        value={text}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addChat(text);
          setText('');
        }}>
        <Text style={styles.btnText}>
          <Icon name="angle-right" size={20} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    margin: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    backgroundColor: '#F8F8F8',
  },
  input: {
    fontSize: 18,
    padding: 25,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    justifyContent: 'center',
    padding: 10,
    margin: 20,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddChat;
