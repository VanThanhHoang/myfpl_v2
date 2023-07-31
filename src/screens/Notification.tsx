import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import moment from 'moment';
import { fakeNotification } from '../modal/FakeData';
import { TypeNotification } from '../types/Notification';
import ScreenContainer from '../components/ScreenContainer';
import { Text } from '../components/text/StyledText';

const Notification: React.FC = () => {
    const [data, setData] = useState<TypeNotification[]>(fakeNotification);

    const handleItemPress = (itemId: string) => {
        const updatedData = data.map((item) =>
            item._id === itemId ? { ...item, isRead: true } : item
        );
        setData(updatedData);
    };

    const handleMarkAllAsRead = () => {
        const updatedData = data.map((item) => ({ ...item, isRead: true }));
        setData(updatedData);
    };

    return (
        <ScreenContainer>
            <TouchableOpacity
                onPress={handleMarkAllAsRead}
                style={styles.notificationContainer}>
                <Text style={styles.notificationContent}>Đánh dấu tất cả là đã đọc</Text>
            </TouchableOpacity>
            {data.map((item) => (
                <TouchableOpacity
                    key={item._id}
                    style={styles.notificationContainer}
                    onPress={() => handleItemPress(item._id)}
                >
                    <View style={[styles.notification, { backgroundColor: item.isRead ? 'gray' : 'white' }]}>
                        <Text style={styles.notificationContent}>{item.content}</Text>
                        <Text style={styles.notificationDate}>
                            Với {item.user.fullName} vào {moment(item.createdAt).format('[ngày] DD [tháng] MM [năm] YYYY')}
                        </Text>
                        <Image source={{ uri: item.user.picture }} style={styles.notificationImage} />
                    </View>
                </TouchableOpacity>
            ))}
        </ScreenContainer>
    );
};

const styles = StyleSheet.create({
    notificationContainer: {
        padding: 16,
        marginBottom: 8,
    },
    notification: {
        height: "auto",
        borderWidth: 1,
        borderColor: '#d9d9d9',
        padding: 10,
        borderRadius: 10,
        elevation: 5,
    },
    notificationContent: {
        fontWeight: '700',
        fontSize: 15,
        width: '80%',
        color: '#353A5F',
    },
    notificationDate: {
        fontSize: 13,
        color: '#B6C0C5',
        fontWeight: '400',
        width: '80%',
    },
    notificationImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        right: 10,
        top: 10,
    },
});

export default Notification;
