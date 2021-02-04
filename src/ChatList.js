import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const ChatList = ({channelName, chatDetails}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.channelName}>{channelName}</Text>
      <FlatList
        data={chatDetails}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.message}>{item.message}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    item: {
      backgroundColor: "#e3ded8",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16
    },
    channelName:{
        fontSize: 30
    },
    name: {
      fontSize: 20
    },
    message: {
        fontSize: 15
      }
  });


export default ChatList;

