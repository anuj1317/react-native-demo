import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Image,
} from 'react-native';

import AppText from './AppText';
import Screen from './Screen';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';

function AppPicker({icon, items, onSelectItem, placeholder, selectedItem}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Image
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                alignSelf: 'center',
                marginRight: 5,
              }}
              source={icon}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Image
            resizeMode="contain"
            style={{
              width: 18,
              height: 18,
              alignSelf: 'center',
              marginRight: 5,
            }}
            source={require('../assets/down-arrow.png')}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
