import { StyleSheet, Dimensions, Platform } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const globalStyles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 20 : 60,
    paddingHorizontal: 30,
    paddingBottom: 60,
    width: windowWidth,
  },
  title1: {
    paddingTop: Platform.OS === 'ios' ? 20 : 60,
    fontSize: 36,
    marginBottom: 16,
    fontWeight: '100',
  },
  toButton: {
    marginTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: '#bdbdbd',
    borderRadius: 20,
  },
  toText: {
    color: '#fff',
    textAlign: 'center',
  },
  header: {
    width: windowWidth,
    height: 150,
    backgroundColor: '#C0CA33',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
});

export default globalStyles;
