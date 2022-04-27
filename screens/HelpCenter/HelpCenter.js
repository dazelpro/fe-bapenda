import React, { useState } from "react";
import { View, Text, Image, ScrollView, StatusBar, TouchableOpacity } from "react-native";

import { FONTS, COLORS, SIZES, icons, images, dummyData } from "../../constants";
import { Header, IconButton } from "../../components";
import { WebView } from "react-native-webview";
import Loading from "../Loading/Loading";

const HelpCenter = ({ navigation }) => {
    const [visible, setVisible] = useState(true);

    setTimeout(() => {
        setVisible(false);
    }, 1000);

    function renderHeader() {
        return (
            <Header
                title="Pusat Bantuan"
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
                        icon={icons.location}
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
                        onPress={() => navigation.navigate("Map")}
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
                        <View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    paddingHorizontal: SIZES.padding,
                                    paddingTop: SIZES.padding,
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
                                            color: COLORS.black,
                                        }}
                                    >
                                        BAPENDA Kota Padang
                                    </Text>
                                    <Text
                                        style={{
                                            ...FONTS.body4,
                                            color: COLORS.black,
                                        }}
                                    >
                                        Help Center
                                    </Text>
                                </View>
                            </View>

                            <View
                                style={{
                                    height: 30,
                                }}
                            ></View>

                            <View
                                style={{
                                    paddingHorizontal: SIZES.padding,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        borderRadius: SIZES.radius,
                                        padding: SIZES.base,
                                        borderWidth: 1,
                                        borderColor: COLORS.lightGray2,
                                    }}
                                    onPress={() => console.log("Tes")}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                width: 40,
                                                height: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: SIZES.radius,
                                                backgroundColor: COLORS.lightOrange2,
                                            }}
                                        >
                                            <Image
                                                source={icons.office}
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: COLORS.white,
                                                }}
                                            ></Image>
                                        </TouchableOpacity>
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginHorizontal: SIZES.font,
                                                alignSelf: "center",
                                                ...FONTS.h4,
                                            }}
                                        >
                                            Jam Operasional Kantor
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginLeft: 54,
                                                marginRight: 5,
                                                alignSelf: "center",
                                                ...FONTS.body4,
                                            }}
                                        >
                                            Anda dapat mengajukan pertanyaan atau keluhan dengan mendatangi langsung Kantor BAPENDA Kota Padang dengan alamat :
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginLeft: 54,
                                                marginRight: 5,
                                                alignSelf: "center",
                                                ...FONTS.h4,
                                            }}
                                        >
                                            Jl. Moh. Yamin No. 70, Kp. Jao, Kec. Padang Barat, Kota Padang (Balai Kota Padang Lama).
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginLeft: 54,
                                                marginRight: 5,
                                                marginTop: 20,
                                                alignSelf: "center",
                                                ...FONTS.body4,
                                            }}
                                        >
                                            - Senin - Kamis <Text style={{ ...FONTS.h4 }}>(08.00 - 12.20)</Text> ||{" "}
                                            <Text style={{ ...FONTS.h4 }}>(12.50 - 14.00)</Text>
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginLeft: 54,
                                                marginRight: 5,
                                                marginTop: 10,
                                                alignSelf: "center",
                                                ...FONTS.body4,
                                            }}
                                        >
                                            - Jumat <Text style={{ ...FONTS.h4 }}>(08.00 - 12.20)</Text> || <Text style={{ ...FONTS.h4 }}>(13.20- 14.30)</Text>
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginLeft: 54,
                                                marginRight: 5,
                                                marginTop: 10,
                                                alignSelf: "center",
                                                ...FONTS.body4,
                                            }}
                                        >
                                            - Sabtu - Minggu <Text style={{ ...FONTS.h4 }}>(Libur)</Text>
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    height: 15,
                                }}
                            ></View>

                            <View
                                style={{
                                    paddingHorizontal: SIZES.padding,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        borderRadius: SIZES.radius,
                                        padding: SIZES.base,
                                        borderWidth: 1,
                                        borderColor: COLORS.lightGray2,
                                    }}
                                    onPress={() => console.log("Tes")}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                width: 40,
                                                height: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: SIZES.radius,
                                                backgroundColor: COLORS.lightOrange2,
                                            }}
                                        >
                                            <Image
                                                source={icons.email}
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: COLORS.white,
                                                }}
                                            ></Image>
                                        </TouchableOpacity>
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginHorizontal: SIZES.font,
                                                alignSelf: "center",
                                                ...FONTS.h4,
                                            }}
                                        >
                                            <Text style={{ ...FONTS.body4 }}>Email : </Text> bapenda@padang.go.id
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    height: 15,
                                }}
                            ></View>

                            <View
                                style={{
                                    paddingHorizontal: SIZES.padding,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        borderRadius: SIZES.radius,
                                        padding: SIZES.base,
                                        borderWidth: 1,
                                        borderColor: COLORS.lightGray2,
                                    }}
                                    onPress={() => console.log("Tes")}
                                >
                                    <View
                                        style={{
                                            flexDirection: "row",
                                        }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                width: 40,
                                                height: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: SIZES.radius,
                                                backgroundColor: COLORS.lightOrange2,
                                            }}
                                        >
                                            <Image
                                                source={icons.call}
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: COLORS.white,
                                                }}
                                            ></Image>
                                        </TouchableOpacity>
                                        <Text
                                            style={{
                                                color: COLORS.transparentBlack7,
                                                flex: 1,
                                                marginHorizontal: SIZES.font,
                                                alignSelf: "center",
                                                ...FONTS.h4,
                                            }}
                                        >
                                            <Text style={{ ...FONTS.body4 }}>Telepon : </Text> 0813 6461 0909
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}

                    {/* Footer */}
                </ScrollView>
                {visible ? <Loading /> : null}
            </View>
        </>
    );
};

export default HelpCenter;
