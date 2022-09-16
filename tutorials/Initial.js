import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';

function Initial() {
  return (
    <View style={styles.container}>
      <Text> React Native</Text>

      <TouchableOpacity onPress={() => console.log('Image Clicked')}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: 'https://reactnative.dev/img/logo-og.png',
          }}
        />
      </TouchableOpacity>

      <Button
        title="click me"
        onPress={() =>
          Alert.alert('My title', 'My message', [
            {text: 'Yes', onPress: () => console.log('Yes')},
            {text: 'No', onPress: () => console.log('No')},
          ])
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Initial;
