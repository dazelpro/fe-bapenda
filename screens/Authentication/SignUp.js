import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";

import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { Header, IconButton, TextButton, TextIconButton } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../Loading/Loading";
import { FormInput } from "../../components";
import { utils } from "../../utils";

const SignUp = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [showPass, setShowPass] = React.useState(false);

    const [nameError, setNameError] = React.useState("");
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");

    function isEnableSignIn() {
        return email != "" && name != "" && password != "" && emailError == "" && nameError == "" && passwordError == "";
    }

    setTimeout(() => {
        setVisible(false);
    }, 500);

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
                                Daftar
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: COLORS.darkGray,
                                    marginTop: SIZES.base,
                                    ...FONTS.body3,
                                }}
                            >
                                Silahkan lengkapi data dibawah ini untuk melanjutkan pendaftaran.
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
                                label="Username"
                                containerStyle={{
                                    marginTop: SIZES.radius,
                                }}
                                onChange={(value) => setName(value)}
                                errorMsg={nameError}
                                appendComponent={
                                    <View
                                        style={{
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Image
                                            source={name == "" || (name != "" && nameError == "") ? icons.correct : icons.cancel}
                                            style={{
                                                height: 20,
                                                width: 20,
                                                tintColor: name == "" ? COLORS.gray : name != "" && nameError == "" ? COLORS.green : COLORS.red,
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
                                onChange={(value) => {
                                    utils.validatePassword(value, setPasswordError);
                                    setPassword(value);
                                }}
                                errorMsg={passwordError}
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

                            {/* Sign Up */}
                            <TextButton
                                label="Daftar"
                                disabled={isEnableSignIn() ? false : true}
                                buttonContainerStyle={{
                                    height: 55,
                                    alignItems: "center",
                                    marginTop: SIZES.padding,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.lightOrange2,
                                }}
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
                                    Sudah punya akun?
                                </Text>

                                <TextButton
                                    label="Masuk"
                                    buttonContainerStyle={{
                                        backgroundColor: null,
                                        marginLeft: 2,
                                    }}
                                    labelStyle={{
                                        color: COLORS.primary,
                                        ...FONTS.h4,
                                    }}
                                    onPress={() => navigation.navigate("SignIn")}
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

export default SignUp;
