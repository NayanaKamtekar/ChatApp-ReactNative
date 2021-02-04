import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import ChatList from './src/ChatList';
// import {uuid} from 'uuidv4';
// const uuidv1 = require('uuid/v1');
// // const { uuid } = require('uuidv4');
const chatData = [
  {
    channelName: 'Channel 01',
    chatDetails: [
      {id: 1, name: 'Daniel', message: "Can anyone ready to review some of PR's?"},
      {id: 2, name: 'Sofia', message: 'Today I am little busy.  Is it OK that I check it tomorrow?'},
      {id: 3, name: 'Daniel', message: 'Yes, no worries with that. Thank you'},
      {id: 4, name: 'Bent', message: 'I am also up for it'},
    ],
  },
  {
    channelName: 'Channel 02',
    chatDetails: [
      {id: 5, name: 'Justina', message: 'Hi, Everyone'},
      {id: 6, name: 'Nayana', message: 'Hello, How are you guys?'},
      {id: 7, name: 'Rufaida', message: "Let's catch up sometimes on slack call"},
      {id: 8, name: 'Kristina', message: 'I am available after 7 pm'},
    ],
  },
  {
    channelName: 'Channel 03',
    chatDetails: [
      {id: 9, name: 'Villiam', message: 'how can we communicate on big bluebutton in groups?'},
      {id: 10, name: 'Sofia', message: 'Can you use slack instead?'},
      {id: 11, name: 'Villiam', message: 'ok thanks'},
      {id: 12, name: 'Mikel', message: 'I also asked Vlad, he advised to use slack'},
      {id: 13, name: 'Line', message: 'Anyone wants to have check with my task as Tariq is having issue with his mobile ....I have finished kind of'},
      {id: 14, name: 'Sofia', message: 'join our group'},
    ],
  },
];

const Drawer = createDrawerNavigator();

const App = () => {
  let drawerScreens = chatData.map((elem, index) => {
    return (
      <Drawer.Screen
        key={index}
        name={elem.channelName}
        children={() => (
          <ChatList
            channelName={elem.channelName}
            chatDetails={elem.chatDetails}
          />
        )}
      />
    );
  });

  console.log(drawerScreens);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Channel 01">
        {drawerScreens}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
