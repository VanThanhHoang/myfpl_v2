import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type NewsTabItem = {
  isSelected: boolean;
  name: string;
  onPress: Function;
};

export const NewsTabItem = ({name, isSelected, onPress}: NewsTabItem) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(name);
      }}
      style={[styles.container, isSelected && {backgroundColor: '#04b14a'}]}>
      <Text style={[styles.label, isSelected && {color: 'white'}]}>{name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#f3f4f6',
    height: 40,
    width: '30%',
  },
  label: {
    color: '#7c82a1',
    fontSize: 15,
    fontWeight: '600',
  },
});
export default NewsTabItem;
