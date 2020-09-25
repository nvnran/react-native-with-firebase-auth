import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import firebase from '../components/Firebase';

const SignOutScreen = () => {
  useEffect(() => {
    firebase.auth().signOut();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <Text style={{ marginBottom: 20 }}>You are Signed Out</Text>
        <Image source={require('../../assets/images/loggedout.jpg')} />
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

export default SignOutScreen;
