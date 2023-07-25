import * as React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

const PoppinsFont = {
    normal: 'medium',
    bold: 'bold',
    '100': 'thin',
    '200': 'thin',
    '300': 'light',
    '400': 'medium',
    '500': 'medium',
    '600': 'regular',
    '700': 'black',
    '800': 'bold',
    '900': 'bold',
};

const disableStyles: StyleProp<TextStyle> = {
    fontStyle: 'normal',
    fontWeight: 'normal',
};

type TextProps = Text['props'];

export function PoppinsText(props: TextProps) {
    const { fontWeight = '400', fontStyle } = StyleSheet.flatten(props.style || {});

    const fontFamily = `roboto_${PoppinsFont[fontWeight]}${fontStyle === 'italic' ? '_italic' : ''
        }`;
    return <Text {...props} style={[props.style, { fontFamily }, disableStyles]} />;
}

