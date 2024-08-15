import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import {useItems} from '../../context/ItemsContext';
import styles from '../../styles/EditItem/EditItemStyles';

type RootStackParamList = {
  Home: undefined;
  EditItem: {
    slideIndex: number;
    itemIndex: number;
  };
};

type EditItemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EditItem'
>;
type EditItemScreenRouteProp = RouteProp<RootStackParamList, 'EditItem'>;

type Props = {
  navigation: EditItemScreenNavigationProp;
  route: EditItemScreenRouteProp;
};

const EditItemScreen: React.FC<Props> = ({navigation, route}) => {
  const {editItem, items} = useItems();
  const {slideIndex, itemIndex} = route.params;
  const item = items[slideIndex][itemIndex];
  const [width, setWidth] = useState(`${item.size.width}`);
  const [height, setHeight] = useState(`${item.size.height}`);

  const handleEdit = () => {
    const parsedWidth = Math.min(Number(width), 2);
    const parsedHeight = Math.min(Number(height), 8);

    editItem(slideIndex, itemIndex, parsedWidth, parsedHeight);
    navigation.navigate('Home');
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
          <Text style={styles.title}>Edit Item</Text>
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

      <TouchableOpacity style={styles.addButton} onPress={handleEdit}>
        <Text style={styles.addButtonText}>EDIT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditItemScreen;
