import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from '../../styles/Home/HomeStyles';
import {useItems} from '../../context/ItemsContext';

type RootStackParamList = {
  Home: undefined;
  AddItem: undefined;
  EditItem: {slideIndex: number; itemIndex: number; item: any};
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const {width, height} = Dimensions.get('window');

const ITEM_HORIZONTAL_MARGIN = 5;
const CELL_WIDTH = (width - ITEM_HORIZONTAL_MARGIN * 4) / 2;
const CELL_HEIGHT = (height - 200) / 3.8;

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const {items, deleteItem} = useItems();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleDelete = (slideIndex: number, itemIndex: number) => {
    Alert.alert(
      'Delete or Edit',
      `Do you want to delete or edit item ${itemIndex + 1}?`,
      [
        {
          text: 'Edit',
          onPress: () => handleEdit(slideIndex, itemIndex),
        },
        {
          text: 'Delete',
          onPress: () => deleteItem(slideIndex, itemIndex),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  };

  const handleEdit = (slideIndex: number, itemIndex: number) => {
    const item = items[slideIndex][itemIndex];
    navigation.navigate('EditItem', {
      slideIndex,
      itemIndex,
      item,
    });
  };

  const handleScroll = (event: any) => {
    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentSlideIndex(newIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddItem')}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      {items.length > 0 ? (
        <>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            {items.map((slide, slideIndex) => (
              <ScrollView
                key={`slide-${slideIndex}`}
                style={styles.slideContainer}
                contentContainerStyle={styles.slide}
                showsVerticalScrollIndicator={false}>
                {slide.map((item, index) => (
                  <View
                    key={`${item.id}-${index}`}
                    style={[
                      styles.itemContainer,
                      {
                        width:
                          item.size.width * CELL_WIDTH +
                          (item.size.width - 1) * ITEM_HORIZONTAL_MARGIN,
                        height: item.size.height * CELL_HEIGHT,
                      },
                    ]}>
                    <TouchableOpacity
                      style={styles.menuButton}
                      onPress={() => handleDelete(slideIndex, index)}>
                      <Text style={styles.menuText}>⋮</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            ))}
          </ScrollView>

          <View style={styles.paginationContainer}>
            {items.map((_, index) => (
              <View
                key={`dot-${index}`}
                style={[
                  styles.paginationDot,
                  index === currentSlideIndex
                    ? styles.paginationDotActive
                    : styles.paginationDotInactive,
                ]}
              />
            ))}
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Empty</Text>
          <Text style={styles.subText}>
            Click Add button above to add new items
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
