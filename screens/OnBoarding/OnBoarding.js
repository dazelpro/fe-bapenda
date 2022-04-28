import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { WebView } from "react-native-webview";
import Loading from "../Loading/Loading";

const OnBoarding = ({ navigation }) => {
    const [visible, setVisible] = useState(true);

    setTimeout(() => {
        setVisible(false);
    }, 1000);

    function renderHeaderLogo() {
        return (
            <View
                style={{
                    position: "absolute",
                    top: SIZES.height > 800 ? 40 : 25,
                    left: 0,
                    right: 0,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={images.logo}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * 0.5,
                        height: 80,
                    }}
                ></Image>
            </View>
        );
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                }}
            >
                {/* Body */}
                {!visible ? <View>{renderHeaderLogo()}</View> : null}
                {visible ? <Loading /> : null}
            </View>
        </>
    );
};

export default OnBoarding;
