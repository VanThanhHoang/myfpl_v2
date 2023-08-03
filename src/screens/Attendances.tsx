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
