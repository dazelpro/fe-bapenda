import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { WebView } from "react-native-webview";
import Loading from "../Loading/Loading";

const UnderConstruction = ({ navigation }) => {
    const [visible, setVisible] = useState(true);

    setTimeout(() => {
        setVisible(false);
    }, 1000);

    function renderHeader() {
        return (
            <Header
                title="Pemberitahuan"
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
                        onPress={() => navigation.navigate("HelpCenter")}
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
                <ScrollView
                    style={{
                        flex: 1,
                    }}
                >
                    {/* Header */}
                    {renderHeader()}

                    {/* Body */}
                    {!visible ? (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                marginTop: 60,
                            }}
                        >
                            <Image
                                style={{
                                    height: 200,
                                    width: 200,
                                }}
                                source={icons.underconstruction}
                            ></Image>
                            <Text
                                style={{
                                    ...FONTS.h3,
                                }}
                            >
                                This feature is Under Construction
                            </Text>
                            <Text
                                style={{
                                    marginTop: 5,
                                    ...FONTS.body4,
                                }}
                            >
                                Will be Back Soon!
                            </Text>
                        </View>
                    ) : null}

                    {/* Footer */}
                </ScrollView>
                {visible ? <Loading /> : null}
            </View>
        </>
    );
};

export default UnderConstruction;
