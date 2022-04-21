import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../../constants";
import { TextButton } from "../../components";

const Profile = ({ navigation }) => {
    function renderHeader() {
        return (
            <View
                style={{
                    alignItems: "center",
                    marginTop: 10,
                }}
            >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 20,
                        marginVertical: 10,
                    }}
                    source={icons.userdefault}
                ></Image>
                <Text
                    style={{
                        color: COLORS.primary,
                        ...FONTS.h3,
                    }}
                >
                    Adil Saputra Duha
                </Text>
                <Text
                    style={{
                        color: COLORS.black,
                        ...FONTS.body4,
                    }}
                >
                    adisaputra0101@gmail.com
                </Text>
            </View>
        );
    }

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                {/* Header */}
                {renderHeader()}
                {/* Content */}
                <View
                    style={{
                        flexDirection: "column",
                        marginTop: SIZES.padding,
                        marginBottom: 10,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.edit}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Edit Profile
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.history}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Riwayat Cek Pajak
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.notification}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Notifikasi
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.setting}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Pengaturan
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    {/* Invite a Friend */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.invite}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Undang Teman
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                        }}
                    ></View>

                    <Text
                        style={{
                            color: COLORS.transparentBlack7,
                            ...FONTS.h4,
                            marginHorizontal: SIZES.padding,
                            marginVertical: SIZES.padding,
                        }}
                    >
                        Info Lainnya
                    </Text>

                    {/* Contact Us */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.contactus}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Hubungi Kami
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    {/* Privacy Policy */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.privacy}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Kebijakan Privasi
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    {/* Terms of Services */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.term}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Ketentuan Layanan
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            backgroundColor: COLORS.lightGray2,
                            height: 0.5,
                            marginLeft: 70,
                            marginRight: SIZES.padding,
                            marginTop: SIZES.radius,
                            marginBottom: SIZES.font,
                        }}
                    ></View>

                    {/* Terms of Services */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        onPress={() => console.log("Privacy")}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                            }}
                        >
                            <Image
                                style={{
                                    tintColor: COLORS.transparentBlack7,
                                    width: 23,
                                    height: 23,
                                }}
                                source={icons.star}
                            />
                            <Text
                                style={{
                                    color: COLORS.transparentBlack7,
                                    flex: 1,
                                    marginHorizontal: SIZES.font,
                                    alignSelf: "center",
                                    ...FONTS.h4,
                                }}
                            >
                                Rating Kami
                            </Text>
                            <Image
                                style={{
                                    alignSelf: "center",
                                    tintColor: COLORS.transparentBlack7,
                                    width: 12,
                                    height: 12,
                                }}
                                source={icons.rightarrow}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Footer */}
                <View
                    style={{
                        marginTop: SIZES.font,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <TextButton
                        buttonContainerStyle={{
                            borderRadius: SIZES.padding,
                            backgroundColor: COLORS.primary,
                            paddingHorizontal: 50,
                            paddingVertical: SIZES.radius,
                        }}
                        label="Logout"
                        onPress={() => console.log("Tes")}
                    ></TextButton>

                    <Text
                        style={{
                            marginTop: 10,
                            ...FONTS.h4,
                        }}
                    >
                        Versi 1.0.1
                    </Text>
                </View>

                <View
                    style={{
                        height: 200,
                    }}
                ></View>
            </ScrollView>
        </View>
    );
};

export default Profile;
