import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import firebase from '../components/Firebase';

import globalStyles from '../ui/globalStyles';

const windowWidth = Dimensions.get('window').width;

const LoginScreen = ({ navigation }) => {
  const [phoneNumberState, setPhoneNumberState] = useState(true);
  const [otpState, setOtpState] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const recaptchaVerifier = useRef(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true);
      }
    });
  }, []);

  const sendVerification = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, recaptchaVerifier.current)
      .then(setVerificationId)
      .then(setPhoneNumberState(false))
      .then(setOtpState(true));
  };
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((user) => {
        if (user.uid) {
          navigation.navigate('Home');
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (loggedIn) {
      console.log('User is Logged In');
      navigation.navigate('Home');
    }
  }, [loggedIn]);

  return (
    <>
      <SafeAreaView>
        <View style={globalStyles.container}>
          <Text style={globalStyles.title1}>Sign In</Text>
        </View>
        {phoneNumberState ? (
          <View style={StyleSheet.phoneNumbercontainer}>
            <View style={styles.phoneNumberWrap}>
              <TextInput style={styles.ccImput} value='+91' />
              <TextInput
                style={styles.phoneImput}
                placeholder='Mobile Number'
                maxLength={10}
                autoCorrect={false}
                keyboardType={'phone-pad'}
                onChangeText={(ph) => setPhoneNumber('+91' + ph)}
              />
            </View>
            <View style={styles.getOtpBtnWrap}>
              <TouchableOpacity
                style={styles.toButton}
                onPress={sendVerification}
              >
                <Text style={styles.toText}>Generate OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {otpState ? (
          <View style={StyleSheet.otpContainer}>
            <View style={styles.phoneNumberWrap}>
              <TextInput
                style={styles.phoneImput}
                placeholder='Enter OTP'
                maxLength={6}
                autoCorrect={false}
                keyboardType={'phone-pad'}
                onChangeText={setCode}
              />
            </View>
            <View style={styles.getOtpBtnWrap}>
              <TouchableOpacity style={styles.toButton} onPress={confirmCode}>
                <Text style={styles.toText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebase.app().options}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg1: {
    borderTopLeftRadius: 60,
    borderTopRightRadius: 40,
    width: windowWidth,
  },
  phoneNumberWrap: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 3,
    flexDirection: 'row',
  },
  ccImput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  phoneImput: {
    flex: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbd',
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
    textAlign: 'center',
    letterSpacing: 4,
  },
  getOtpBtnWrap: {
    paddingHorizontal: 40,
  },
  toButton: {
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: '#ef586f',
    borderRadius: 20,
  },
  toText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;
