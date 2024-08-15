import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#E6E6E6',
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000',
  },
  addButton: {
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3467EB',
    borderRadius: 5,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    lineHeight: 19.36,
  },
  slideContainer: {
    width: width,
    height: height - 150, // Ограничение по высоте для вертикальной прокрутки
  },
  slide: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
    paddingHorizontal: 4,
    paddingVertical: 2.5,
  },
  itemContainer: {
    marginVertical: 2.5,
    backgroundColor: '#E6E6E6',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginHorizontal: 2.5,
  },
  menuButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  menuText: {
    fontSize: 24,
    color: '#5F6368',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  emptyText: {
    fontSize: 50,
    fontWeight: '400',
    color: '#000',
    marginVertical: 8,
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  paginationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#3467EB',
  },
  paginationDotInactive: {
    backgroundColor: '#D3D3D3',
  },
  scrollViewContent: {
    marginHorizontal: 1,
  },
});
