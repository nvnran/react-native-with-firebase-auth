import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrawerScreen3 = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Drawer Screen 3</Text>
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

export default DrawerScreen3;
