import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../constants";

const HorizontalArticle = ({ containerStyle, imageStyle, item, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            {/* Image */}
            <Image source={{ uri: `${item.image}` }} style={imageStyle}></Image>

            {/* Info */}
            <View
                style={{
                    flex: 1,
                }}
            >
                {/* Title */}
                <Text
                    style={{
                        ...FONTS.h3,
                        fontSize: 14,
                    }}
                >
                    {item.name}
                </Text>

                {/* Description */}
                <Text
                    style={{
                        color: COLORS.darkGray2,
                        ...FONTS.body4,
                    }}
                >
                    {item.description}
                </Text>

                {/* Date */}
                <Text
                    style={{
                        marginTop: SIZES.base,
                        ...FONTS.body5,
                    }}
                >
                    {item.date}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default HorizontalArticle;
