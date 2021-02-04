import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import AddChat from './AddChat';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ChatList = ({channelName, chatDetails}) => {
  const [chat, setChat] = useState(chatDetails);

  const addChat = (text) => {
    setChat((prevItems) => {
      return [
        ...prevItems,
        {id: Date.now().toString(), name: 'Nayana', message: text},
      ];
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.channelName}>{channelName}</Text>
      <FlatList
        data={chat}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.addchatView}>
        <AddChat addChat={addChat} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  item: {
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  channelName: {
    color: 'darkslateblue',
    fontSize: 30,
    fontWeight:'bold'
  },
  name: {
    fontSize: 20,
    color: 'darkslateblue',
  },
  message: {
    fontSize: 15,
    color: 'darkslateblue',
  },
  addchatView: {

    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});

export default ChatList;
