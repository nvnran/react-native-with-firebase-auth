import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../ui/globalStyles';
import { EvilIcons, Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={globalStyles.header}>
          <View style={styles.searchBar}>
            <EvilIcons
              name='search'
              size={24}
              color='#959595'
              style={styles.searchIcon}
            />
            <TextInput placeholder='Search' />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={globalStyles.toButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={globalStyles.toText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 250,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#C0CA33',
    marginBottom: -15,
  },
});

export default HomeScreen;
