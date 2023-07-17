import { StyleSheet, Text, View, FlatList, ListRenderItem, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AppIcons } from '../constant/AppAsset';
import { Color } from '../constant/Colors';

interface ItemData {
    id: number;
    name: string;
    email: string;
    photo: string;
    familyName: string;
    givenName: string;
}

const renderItemForStatusBar: ListRenderItem<ItemData> = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: item.photo }} style={styles.profileImage} />
            <Text style={styles.nameText}>{item.givenName}</Text>
            <View style={styles.qrNotificationContainer}>
                <TouchableOpacity>
                    <Image
                        source={AppIcons.qr}
                        style={styles.qrImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={AppIcons.notification}
                        style={styles.notificationImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};


const StatusBar: React.FC = () => {
    return (
        <View style={{ backgroundColor: Color.MAINCOLOR }}>
            <FlatList
                style={{ paddingVertical: 10, paddingHorizontal: 10 }}
                data={DATA}
                renderItem={renderItemForStatusBar}
                keyExtractor={(item) => item.id.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default StatusBar;

const styles = StyleSheet.create({
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    nameText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 'auto',
    },
    qrNotificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    qrImage: {
        width: 20,
        height: 20,
        marginRight: 15,
    },
    notificationImage: {
        width: 20,
        height: 20,
    },
});

const DATA: ItemData[] = [
    {
        id: 111385531577159129259,
        name: "Van Nam Phuc (FPL HCM)",
        email: "phucvnps25452@fpt.edu.vn",
        photo:
            "https://lh3.googleusercontent.com/a/AAcHTteekTstA5kgs1FHesSYpP7-lUiLXgONjLeDp_-IhzB0=s96-c",
        familyName: "(FPL HCM)",
        givenName: "Van Nam Phuc",
    },
];
