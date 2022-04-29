import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { FONTS, COLORS } from "../constants";

const TextIconButton = ({ containerStyle, label, labelStyle, icon, iconPosition, iconStyle, onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={{
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                ...containerStyle,
            }}
            disabled={disabled}
            onPress={onPress}
        >
            {iconPosition == "LEFT" && (
                <Image
                    source={icon}
                    style={{
                        ...iconStyle,
                    }}
                ></Image>
            )}

            <Text
                style={{
                    ...FONTS.body3,
                    ...labelStyle,
                }}
            >
                {label}
            </Text>

            {iconPosition == "RIGHT" && (
                <Image
                    source={icon}
                    style={{
                        ...iconStyle,
                    }}
                ></Image>
            )}
        </TouchableOpacity>
    );
};

export default TextIconButton;
