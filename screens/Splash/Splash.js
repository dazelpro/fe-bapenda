import { Text, StyleSheet, View, Image, StatusBar } from "react-native";
import React, { Component } from "react";
import { StackActions } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from "../../constants";

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace("MainLayout"));
        }, 2000);
    };

    render() {
        return (
            <>
                <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: COLORS.primary,
                    }}
                >
                    <Image
                        source={dummyData?.appProfile?.profile_image}
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    ></Image>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: COLORS.white,
                            ...FONTS.h3,
                        }}
                    >
                        BADAN PENDAPATAN DAERAH
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.white,
                            ...FONTS.h3,
                        }}
                    >
                        KOTA PADANG
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: COLORS.white,
                            ...FONTS.h3,
                        }}
                    >
                        #BayialahPajak
                    </Text>
                </View>
            </>
        );
    }
}

export default Splash;
