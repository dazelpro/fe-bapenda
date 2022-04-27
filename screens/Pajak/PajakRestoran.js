import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton, TextButton } from "../../components";
import { WebView } from "react-native-webview";
import Loading from "../Loading/Loading";

const PajakRestoran = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    function renderHeader() {
        return (
            <Header
                title="Pajak Restoran"
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
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <WebView
                source={{
                    uri: "https://bapenda.padang.go.id/?p=33",
                }}
                javaScriptEnabled={true}
                style={{
                    flex: 1,
                }}
                domStorageEnabled={true}
                onLoadStart={() => setVisible(true)}
                onLoad={() => setVisible(false)}
            />
            {visible ? <Loading /> : null}
        </View>
    );
};

export default PajakRestoran;
