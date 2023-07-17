import { AppIcons } from '../constant/AppAsset';
import { Item } from '../types/QuickMenuItem';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Color } from '../constant/Colors';

export const DATA: Item[] = [
    {
        id: '1',
        title: 'Dashboard',
        icon: AppIcons.dashboard,
    },
    {
        id: '2',
        title: 'FAQ',
        icon: AppIcons.faq,
    },
    {
        id: '3',
        title: 'Upload Image',
        icon: AppIcons.uploadImage,
    },
    {
        id: '4',
        title: 'Re’n’Dis',
        icon: AppIcons.rnd,
    },
    {
        id: '5',
        title: 'Setting',
        icon: AppIcons.setting,
    },
    {
        id: '6',
        title: 'SMS',
        icon: AppIcons.sms,
    },
    {
        id: '7',
        title: 'User',
        icon: AppIcons.user,
    },

    {
        id: '8',
        title: 'Đăng Xuất',
        icon: AppIcons.logout,
    },
];

const handleLogout = () => {
    console.log('Logout');
};

const handleDashboard = () => {
    console.log('Dashboard');
}

const handleFAQ = () => {
    console.log('FAQ');
}

const handleUploadImage = () => {
    console.log('Upload Image');
}

const handleRnd = () => {
    console.log('Re’n’Dis');
}

const handleSetting = () => {
    console.log('Setting');
}

const handleSMS = () => {
    console.log('SMS');
}

const handleUser = () => {
    console.log('User');
}

export const renderItem = ({ item }: { item: Item }) => (
    <View>
        <TouchableOpacity onPress={() => {
            switch (item.id) {
                case '8':
                    handleLogout();
                    break;

                case '1':
                    handleDashboard();
                    break;

                case '2':
                    handleFAQ();
                    break;

                case '3':
                    handleUploadImage();
                    break;

                case '4':
                    handleRnd();
                    break;

                case '5':
                    handleSetting();
                    break;

                case '6':
                    handleSMS();
                    break;

                case '7':
                    handleUser();
                    break;


                default:
                    break;
            }
        }}
            style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', width: 100, height: 100, borderRadius: 50 }}>
            <Image source={item.icon} />
        </TouchableOpacity>
        <Text style={{ fontSize: 12, marginTop: 5, alignSelf: 'center', color: Color.TEXT }}>{item.title}</Text>
    </View>
);
