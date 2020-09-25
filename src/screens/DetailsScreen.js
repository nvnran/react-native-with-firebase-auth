import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import globalStyles from '../ui/globalStyles';

const DetailsScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Bottom Tabs')}
          style={globalStyles.toButton}
        >
          <Text style={globalStyles.toText}>Bottom Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Top Tabs')}
          style={globalStyles.toButton}
        >
          <Text style={globalStyles.toText}>Top Tabs</Text>
        </TouchableOpacity>
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

export default DetailsScreen;
