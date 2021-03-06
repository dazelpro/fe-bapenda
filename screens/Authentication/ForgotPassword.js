import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";

import { FONTS, COLORS, SIZES, icons } from "../../constants";
import { Header, IconButton, TextButton, TextIconButton } from "../../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Loading from "../Loading/Loading";
import { FormInput } from "../../components";
import { utils } from "../../utils";

const ForgotPassword = ({ navigation }) => {
    const [visible, setVisible] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [emailError, setEmailError] = React.useState("");

    function isEnableSignIn() {
        return email != "" && emailError == "";
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
                                Lupa Password
                            </Text>
                            <Text
                                style={{
                                    textAlign: "center",
                                    color: COLORS.darkGray,
                                    marginTop: SIZES.base,
                                    ...FONTS.body3,
                                }}
                            >
                                Silahkan masukkan alamat email untuk reset password.
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

                            {/* Sign In */}
                            <TextButton
                                label="Reset Password"
                                disabled={isEnableSignIn() ? false : true}
                                buttonContainerStyle={{
                                    height: 55,
                                    alignItems: "center",
                                    marginTop: SIZES.padding,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.lightOrange2,
                                }}
                            ></TextButton>
                        </View>
                    </KeyboardAwareScrollView>
                ) : null}
                {visible ? <Loading /> : null}
            </View>
        </>
    );
};

export default ForgotPassword;
