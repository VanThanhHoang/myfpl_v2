import {View, Text} from 'react-native';
import {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
const ScrollTimeStudy = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </View>
  );
};
export default ScrollTimeStudy;
