import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../Loading/Loading";
import { FormInput } from "../../components";

const SignIn = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    const [showPass, setShowPass] = React.useState(false);

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
                    <View
                        style={{
                            flex: 1,
                            marginTop: SIZES.padding * 2,
                        }}
                    >
                        {/* Form Input */}
                        <FormInput
                            label="Email"
                            keyboardType="email-address"
                            autoCompleteType="email"
                            onChange={(value) => {
                                // Validate email
                                setEmail(value);
                            }}
                            errorMsg={emailError}
                            appendComponent={
                                <View
                                    style={{
                                        justifyContent: "center",
                                    }}
                                >
                                    <Image
                                        source={icons.correct}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.green,
                                        }}
                                    ></Image>
                                </View>
                            }
                        ></FormInput>

                        <FormInput
                            label="Password"
                            secureTextEntry={!showPass}
                            autoCompleteType="password"
                            containerStyle={{
                                marginTop: SIZES.radius,
                            }}
                            onChange={(value) => setPassword(value)}
                            appendComponent={
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                        alignItems: "flex-end",
                                        justifyContent: "center",
                                    }}
                                    onPress={() => setShowPass(!showPass)}
                                >
                                    <Image
                                        source={showPass ? icons.eye_close : icons.eye}
                                        style={{
                                            height: 20,
                                            width: 20,
                                            tintColor: COLORS.gray,
                                        }}
                                    ></Image>
                                </TouchableOpacity>
                            }
                        ></FormInput>
                        {/* Forgot Password */}

                        {/* Sign In */}

                        {/* Sign Up */}
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </>
    );
};

export default SignIn;
