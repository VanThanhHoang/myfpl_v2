<<<<<<< HEAD
import {View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Text} from '../components/text/StyledText';
import moment from 'moment';
import {fakeAttandances} from '../modal/FakeData';
import AttendancesList from '../components/AttendancesList';
import LeaveStatus from '../components/LeaveStatus';

const Attendances = () => {
  const leaveCancel = 3;
  const leaveBalance = 4;
  moment.locale('en');
  const [data, setData] = useState(fakeAttandances);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    setData(fakeAttandances);
  };

  return (
    <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 20}}>
      <Text style={{fontSize: 20, fontWeight: '800', color: 'black'}}>
        All Lives
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <LeaveStatus
          label="Leave Balance"
          value={leaveBalance - leaveCancel}
          backgroundColor="#f5f9ff"
          borderColor="#3889fe"
        />
        <LeaveStatus
          label="Leave Cancelled"
          value={leaveCancel}
          backgroundColor="#fff9f8"
          borderColor="#ff7f74"
        />
      </View>
      <AttendancesList
        data={data}
        leaveBalance={leaveBalance}
        leaveCancel={leaveCancel}
      />
    </View>
  );
};

export default Attendances;
=======
import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text } from '../components/text/StyledText'
import moment from 'moment'
import { fakeAttandances } from '../modal/FakeData'
import AttendancesList from '../components/AttendancesList'
import LeaveStatus from '../components/LeaveStatus'
import { AppIcons } from '../constant/AppAsset'
import { useNavigation } from '@react-navigation/native'
import { AppNavigationProp } from '../navigation/AppNavigator'

const Attendances = () => {
    const navigation = useNavigation<AppNavigationProp>()
    const leaveCancel = 3
    const leaveBalance = 4
    moment.locale('en')
    const [data, setData] = useState(fakeAttandances)
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        setData(fakeAttandances)
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 15, paddingVertical: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View
                    style={{
                        borderRadius: 20,
                        left: 10,
                        width: 50,
                        height: 50,
                        backgroundColor: 'rgba(255, 165, 0, 0.6)',
                        marginRight: 30,
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack();
                        }}
                        style={{
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                        }}>
                        <Image
                            style={{
                                width: 18,
                                tintColor: 'white',

                                height: 18,
                                resizeMode: 'contain',
                            }}
                            source={AppIcons.back}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '800', color: 'black' }}>All Lives</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                <LeaveStatus
                    label="Leave Balance"
                    value={leaveBalance - leaveCancel}
                    backgroundColor="#f5f9ff"
                    borderColor="#3889fe"
                />
                <LeaveStatus
                    label="Leave Cancelled"
                    value={leaveCancel}
                    backgroundColor="#fff9f8"
                    borderColor="#ff7f74"
                />
            </View>
            <AttendancesList data={data} leaveBalance={leaveBalance} leaveCancel={leaveCancel} />
        </View>
    )
}

export default Attendances
>>>>>>> 62df04f03086b64e8d78a0b4b42897772723b73f
