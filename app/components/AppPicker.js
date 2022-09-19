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
import colors from '../config/colors';

function AppPicker({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = '100%',
  numberofColumns = 1,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, {width}]}>
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
            numColumns={numberofColumns}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItemComponent
                item={item}
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
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
    color: colors.black,
  },
});

export default AppPicker;
