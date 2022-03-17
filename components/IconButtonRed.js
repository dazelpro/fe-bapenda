import React from "react";
import {
    TouchableOpacity,
    Image
} from 'react-native';
import { COLORS } from '../constants';

const IconButtonRed = ({ containerStyle, iconStyle, quantity, onPress }) => {
    return (
        <TouchableOpacity
            style={{ 
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{ 
                    width: 30,
                    height: 30,
                    tintColor: COLORS.white,
                    ...iconStyle
                }}
            >

            </Image>
        </TouchableOpacity>
    )
}

export default IconButtonRed;