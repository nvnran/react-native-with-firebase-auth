import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TabScreen1 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Tab Screen 1</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabScreen1;
