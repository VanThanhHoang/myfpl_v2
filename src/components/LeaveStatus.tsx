import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/text/StyledText';

interface LeaveStatusProps {
    label: string;
    value: number;
    backgroundColor: string;
    borderColor: string;
}

const LeaveStatus: React.FC<LeaveStatusProps> = ({ label, value, backgroundColor, borderColor }) => {
    return (
        <View style={{ backgroundColor, borderWidth: 1, borderColor, height: 110, padding: 10, justifyContent: 'space-around', borderRadius: 20, maxWidth: '50%' }}>
            <Text style={{ fontSize: 15, fontWeight: '800', maxWidth: '80%', color: 'black' }}>{label}</Text>
            <Text style={{ fontSize: 20, fontWeight: '800', color: borderColor }}>{value}</Text>
        </View>
    );
};

export default React.memo(LeaveStatus);
