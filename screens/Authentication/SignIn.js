import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwt_decode from "jwt-decode";

import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { apiService } from "../../api";
import { Header, IconButton, TextButton, TextIconButton } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../Loading/Loading";
import { FormInput } from "../../components";
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    const [showPass, setShowPass] = React.useState(false);

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == "";
    }

    function login() {
        try {
            fetch(apiService.login, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.success == true) {
                        const token = JSON.stringify(jwt_decode(json.token));
                        AsyncStorage.setItem("@storage_Key", token);
                    }
                })
                .catch((err) => console.log(err));
        } catch (err) {
            console.log(err);
        }
    }

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

    setTimeout(() => {
        setVisible(false);
    }, 500);

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
                {!visible ? (
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
                                    utils.validateEmail(value, setEmailError);
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
                                            source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: email == "" ? COLORS.gray : email != "" && emailError == "" ? COLORS.green : COLORS.red,
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
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: SIZES.radius,
                                    justifyContent: "flex-end",
                                }}
                            >
                                <TextButton
                                    label="Lupa Password"
                                    buttonContainerStyle={{
                                        backgroundColor: null,
                                    }}
                                    labelStyle={{
                                        color: COLORS.gray,
                                        ...FONTS.body4,
                                    }}
                                    onPress={() => navigation.navigate("ForgotPassword")}
                                ></TextButton>
                            </View>

                            {/* Sign In */}
                            <TextButton
                                label="Masuk"
                                disabled={isEnableSignIn() ? false : true}
                                buttonContainerStyle={{
                                    height: 55,
                                    alignItems: "center",
                                    marginTop: SIZES.padding,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.lightOrange2,
                                }}
                                onPress={() => login()}
                            ></TextButton>

                            {/* Sign Up */}
                            <View
                                style={{
                                    flexDirection: "row",
                                    marginTop: SIZES.padding,
                                    justifyContent: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        color: COLORS.darkGray,
                                        ...FONTS.body4,
                                    }}
                                >
                                    Belum punya akun?
                                </Text>

                                <TextButton
                                    label="Daftar disini"
                                    buttonContainerStyle={{
                                        backgroundColor: null,
                                        marginLeft: 2,
                                    }}
                                    labelStyle={{
                                        color: COLORS.primary,
                                        ...FONTS.h4,
                                    }}
                                    onPress={() => navigation.navigate("SignUp")}
                                ></TextButton>
                            </View>

                            {/* Footer */}
                            <View
                                style={{
                                    marginTop: SIZES.padding,
                                }}
                            >
                                {/* Google */}
                                <TextIconButton
                                    containerStyle={{
                                        height: 50,
                                        marginBottom: SIZES.base,
                                        alignItems: "center",
                                        borderRadius: SIZES.radius,
                                        backgroundColor: COLORS.lightGray2,
                                    }}
                                    icon={icons.google}
                                    iconStyle={{
                                        marginLeft: 5,
                                        width: 20,
                                        height: 20,
                                        // tintColor: null,
                                    }}
                                    iconPosition="LEFT"
                                    label="Continue With Google"
                                    labelStyle={{
                                        marginLeft: SIZES.radius,
                                    }}
                                    onPress={() => navigation.navigate("UnderConstruction")}
                                ></TextIconButton>
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                ) : null}
                {visible ? <Loading /> : null}
            </View>
        </>
    );
};

export default SignIn;
