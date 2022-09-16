import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import Screen from '../app/components/Screen';
import AppTextInput from '../app/components/AppTextInput';
import colors from '../app/config/colors';
import AppPicker from '../app/components/AppPicker';

const categories = [
  {label: 'Furniture', value: 1},
  {label: 'Clothing', value: 2},
  {label: 'Cameras', value: 3},
];

const TextInputDemo = () => {
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0]);
  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <Text
        style={{
          fontSize: 18,
          color: 'red',
          alignSelf: 'center',
          marginTop: 30,
          padding: 10,
        }}>
        Input Components,Picker Item and Switch
      </Text>
      <AppTextInput
        icon={require('../app/assets/logout.png')}
        placeholder="First Name"
      />

      <Switch
        style={{alignSelf: 'center'}}
        value={isNew}
        onValueChange={newValue => setIsNew(newValue)}
      />
      <AppPicker
        icon={require('../app/assets/email.png')}
        items={categories}
        onSelectItem={item => setCategory(item)}
        placeholder="Category"
        selectedItem={category}
      />
      <AppTextInput
        icon={require('../app/assets/email.png')}
        placeholder="Email"
      />
    </View>
  );
};

export default TextInputDemo;
