import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { WebView } from "react-native-webview";
import Loading from "../Loading/Loading";

const PrivacyPolice = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    function renderHeader() {
        return (
            <Header
                title="Kebijakan Privasi"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 20,
                    marginBottom: 10,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}
                    ></IconButton>
                }
                rightComponent={
                    <IconButton
                        icon={icons.callcenter}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,
                        }}
                        onPress={() => navigation.goBack()}
                    ></IconButton>
                }
            ></Header>
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
                {/* Header */}
                {renderHeader()}

                {/* Body */}
                <View
                    style={{
                        backgroundColor: COLORS.primary,
                        flexDirection: "row",
                        padding: SIZES.padding,
                    }}
                >
                    <Image
                        source={dummyData?.appProfile?.profile_image}
                        style={{
                            width: 40,
                            height: 40,
                            marginRight: SIZES.radius,
                        }}
                    ></Image>
                    <View
                        style={{
                            justifyContent: "center",
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.h3,
                                color: COLORS.white,
                            }}
                        >
                            BAPENDA Kota Padang
                        </Text>
                        <Text
                            style={{
                                ...FONTS.h4,
                                color: COLORS.white,
                            }}
                        >
                            Privacy Police
                        </Text>
                    </View>
                </View>

                {visible ? <Loading /> : null}
                {/* Footer */}
            </View>
        </>
    );
};

export default PrivacyPolice;
