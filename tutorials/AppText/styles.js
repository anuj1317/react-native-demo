import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: '600',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    color: 'green',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});

export default styles;
