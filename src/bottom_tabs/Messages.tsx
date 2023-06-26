import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Messages = () => {
  return (
    <View style={styles.parent}>
      <Text>Message</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Messages;
