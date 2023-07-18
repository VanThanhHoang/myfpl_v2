import {View, Text} from 'react-native';
import {Picker} from 'react-native-wheel-pick-2';
const ScrollTimeStudy = () => {
  const datesArray = [
    '15 Ngày trước',
    '7 Ngày trước',
    'Hôm nay',
    '7 Ngày tới',
    '15 Ngày tới',
  ];
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
      }}>
      <Picker
        style={{backgroundColor: 'white', width: 300, height: 150}}
        textColor={'black'}
        selectedValue={datesArray[2]}
        pickerData={datesArray}
        onValueChange={(value: any) => {
          console.log(value);
        }}
      />
    </View>
  );
};
export default ScrollTimeStudy;
