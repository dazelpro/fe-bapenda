import React from "react";
import { View, Text, Image } from "react-native";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../../constants";

const Event = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <Image
                style={{
                    width: 120,
                    height: 120,
                    marginTop: 150,
                }}
                source={icons.notfound}
            ></Image>

            <Text
                style={{
                    color: COLORS.black,
                    ...FONTS.body4,
                }}
            >
                Belum ada event nich
            </Text>
        </View>
    );
};

export default Event;
