import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {AppIcons} from '../constant/AppAsset';
import {ViewStyle} from 'react-native';
import IconBottomTab from '../components/IconBottomTab';
import {Color} from '../constant/Colors';

const Tab = createBottomTabNavigator();
const ScreenTabs = [
  {
    name: 'Trang chủ',
    icon: AppIcons.home,
    component: HomeScreen,
  },
  {
    name: 'Lịch học',
    icon: AppIcons.schedule,
    component: HomeScreen,
  },
  {
    name: 'Bảng điểm',
    icon: AppIcons.mark,
    component: HomeScreen,
  },
  {
    name: 'Cá nhân',
    icon: AppIcons.account,
    component: HomeScreen,
  },
];
const MainBottomNavigatior = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: bottomTabContainerStyle,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Color.MAINCOLOR,
        tabBarInactiveTintColor: 'black',
      }}>
      {ScreenTabs.map(tab => {
        return (
          <Tab.Screen
            key={tab.name}
            options={{
              tabBarIcon: ({color, focused}) => (
                <IconBottomTab
                  focused={focused}
                  icon={tab.icon}
                  name={tab.name}
                  color={color}
                />
              ),
            }}
            name={tab.name}
            component={tab.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};
const bottomTabContainerStyle: ViewStyle = {
  margin: 10,
  marginTop: 0,
  padding: 0,
  width: '94%',
  backgroundColor: 'white',
  alignSelf: 'center',
  borderRadius: 20,
  borderColor: 'white',
  elevation: 2.5,
  height: 65,
};
export default MainBottomNavigatior;
