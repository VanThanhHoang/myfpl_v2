import React, { memo } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import { Alert } from 'react-native';
import { AppIcons } from '../constant/AppAsset';
import { fakeSchedule } from '../modal/FakeData';
import { ClassInfo } from '../types/ClassInfo';
import { convertHourAndMinuesToString } from '../helper/convertHourAndMinute';
import moment from 'moment';
import { PoppinsText } from '../components/text/StyledText';

const ScheduleTimes: React.FC = () => {
  const renderDetail = (classInfo: ClassInfo): JSX.Element => {
    return (
      <View style={{ flex: 1 }}>
        <PoppinsText
          style={[
            styles.rowTitle,
          ]}>{`${classInfo.subject.name} (${classInfo.subject.code})`}</PoppinsText>
        <View style={styles.descriptionContainer}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Image style={styles.icon} source={AppIcons.des}></Image>
            <PoppinsText style={[styles.textDescriptionStyle]}>
              {classInfo.description}
            </PoppinsText>
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
            <Image style={styles.icon} source={AppIcons.place}></Image>
            <PoppinsText style={[styles.textDescriptionStyle]}>
              {classInfo.clsasAddress.room +
                '* Tòa nhà ' +
                classInfo.clsasAddress.buiding}
            </PoppinsText>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Image
              source={{ uri: classInfo.teacher.photo }}
              style={styles.imageStyle}
            />
            <PoppinsText
              style={{
                fontWeight: '500',
                marginHorizontal: 5,
                color: 'black',
              }}>
              {`${classInfo.teacher.name} (${classInfo.teacher.code})`}
            </PoppinsText>
          </View>
        </View>
      </View>
    );
  };

  const renderTime = (classInfo: ClassInfo): JSX.Element => {
    return (
      <View style={{ width: 80, backgroundColor: '#ffffff' }}>
        <PoppinsText
          style={{
            fontSize: 14,
            color: '#327ab8',
            fontWeight: '700',
          }}>
          {moment(classInfo.date).subtract(10, 'days').calendar()}
        </PoppinsText>
        <PoppinsText
          style={{
            fontSize: 13,
            color: 'black',
            fontWeight: '700',
          }}>
          {convertHourAndMinuesToString(classInfo.slot.startTime)}
        </PoppinsText>
        <PoppinsText
          style={{
            color: '#BCC1CD',
          }}>
          {convertHourAndMinuesToString(classInfo.slot.endTime)}
        </PoppinsText>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Timeline
        data={fakeSchedule}
        circleSize={20}
        circleColor="rgba(0,0,0,0)"
        lineColor="#BCC1CD"
        timeStyle={{
          textAlign: 'center',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{ color: 'white', fontWeight: '400' }}
        detailContainerStyle={{
          padding: 10,
          width: '98%',
          marginBottom: 20,
          elevation: 2,
          backgroundColor: '#fffbe8',
          borderRadius: 15,
        }}
        onEventPress={(item: any) =>
          Alert.alert(`${item.title} at ${item.time}`)
        }
        renderDetail={renderDetail}
        renderTime={renderTime}
        options={{
          showsVerticalScrollIndicator: false,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 10,
  },
  title: {
    padding: 16,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  rowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#327ab8',
    marginBottom: 2,
  },
  descriptionContainer: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    borderRadius: 25,
  },
  textDescriptionStyle: {
    margin: 5,
    color: 'black',
  },
  icon: {
    tintColor: 'black',
    width: 12,
    height: 12,
  },
});

export default memo(ScheduleTimes);
