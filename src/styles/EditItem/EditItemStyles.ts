import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 19.36,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#808080',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    width: '100%',
    height: 40,
    backgroundColor: '#3467EB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
