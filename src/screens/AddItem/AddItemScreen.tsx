import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useItems} from '../../context/ItemsContext';
import styles from '../../styles/AddItem/AddItemStyles';

type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
};

type AddItemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddItem'
>;

type Props = {
  navigation: AddItemScreenNavigationProp;
};

const AddItemScreen: React.FC<Props> = ({navigation}) => {
  const {addItem} = useItems();
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleAdd = () => {
    const parsedWidth = Math.min(Number(width), 2);
    const parsedHeight = Math.min(Number(height), 8);

    if (parsedWidth && parsedHeight) {
      addItem(parsedWidth, parsedHeight);
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../../icon/icon-button.png')}
            style={styles.backButtonImage}
          />
          <Text style={styles.title}>Add Item</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Width</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item width in cell number"
        value={width}
        onChangeText={setWidth}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Height</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter item height in cell number"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItemScreen;
