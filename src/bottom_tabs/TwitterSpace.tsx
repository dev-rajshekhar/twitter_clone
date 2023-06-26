import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TwitterSpace = () => {
  return (
    <View style={styles.parent}>
      <Text>Space</Text>
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
export default TwitterSpace;
