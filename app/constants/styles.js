import { StyleSheet, PixelRatio } from 'react-native';
import colors from './colors';

export const styles = StyleSheet.create({
  textInputStyle: {
    width: 312,
    height: 40,
    backgroundColor: "#ffffff",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginTop: 24,
  },
  textInputArea: {
    color: colors.gray,
  },
  imageStyle: {
    height: "30%",
    marginTop: '20%',
    marginBottom: '2%',
  },
  loadingStyle: {
    height: "30%",
    marginTop: '40%',
    marginBottom: '15%',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: 312,
    height: 40,
    backgroundColor: "#006400",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1,
    marginTop: 40,
    marginBottom: 10,
  },
})
