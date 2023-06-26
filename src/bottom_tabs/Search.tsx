import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Search = () => {
  return (
    <View style={styles.parent}>
      <View>
        <Text>Search Bar</Text>
      </View>
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
export default Search;
