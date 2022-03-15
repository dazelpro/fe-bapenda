import React from "react";
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../constants';

const HorizontalArticle = ({containerStyle, imageStyle, item, onPress}) => {
    return (
        <TouchableOpacity
            style={{ 
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle
            }}
        >
            {/* Image */}
            <Image
                source={item.image}
                style={imageStyle}
            >

            </Image>

            {/* Info */}
            <View
                style={{ 
                    flex: 1
                }}
            >
                {/* Title */}
                <Text
                    style={{ 
                        ...FONTS.h3,
                        fontSize: 17
                    }}
                >
                    {item.name}
                </Text>
                
                {/* Description */}
                <Text>
                    {item.description}
                </Text>

            </View>

        </TouchableOpacity>
    )
}

export default HorizontalArticle;