import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createMaterialTopTabNavigator();

const MarksTopTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontWeight: '700'},
        tabBarIndicatorStyle: {backgroundColor: '#084d9a'},
        tabBarActiveTintColor: '#084d9a',
      }}
      style={{flex: 1}}>
      <Tab.Screen
        options={{title: 'Kì Học'}}
        name="Kì Học"
        component={HomeScreen}
      />
      <Tab.Screen name="Lịch sử học" component={ProfileScreen} />
      <Tab.Screen name="Bảng điểm" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default MarksTopTab;
