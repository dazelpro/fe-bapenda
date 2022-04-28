import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../Loading/Loading";

const SignIn = ({ navigation }) => {
    function renderHeader() {
        return (
            <Header
                // title="Detail Article"
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
                {/* Header */}
                {renderHeader()}

                <KeyboardAwareScrollView
                    keyboardDismissMode="on-drag"
                    contentContainerStyle={{
                        flex: 1,
                        paddingHorizontal: SIZES.padding,
                    }}
                >
                    {/* Title & Subtitle */}
                    <View
                        style={{
                            marginTop: SIZES.padding,
                        }}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                ...FONTS.h2,
                            }}
                        >
                            Masuk
                        </Text>
                        <Text
                            style={{
                                textAlign: "center",
                                color: COLORS.darkGray,
                                marginTop: SIZES.base,
                                ...FONTS.body3,
                            }}
                        >
                            Silahkan masuk menggunakan email yang sudah terdaftar.
                        </Text>
                    </View>
                    {/* Content */}
                </KeyboardAwareScrollView>
            </View>
        </>
    );
};

export default SignIn;
