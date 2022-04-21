import React from "react";
import { Share, View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from "../../constants";
import { TextButton } from "../../components";

const Profile = ({ navigation }) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    "Ayo download aplikasi terbaru dari BAPENDA Kota Padang, dan dapatkan info serta event menarik untuk kamu! Buruan downlad di link berikut : https://bapenda.padang.go.id ",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

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
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.edit}
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
                            height: 10,
                        }}
                    ></View>

                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.history}
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
                            height: 10,
                        }}
                    ></View>

                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.notification}
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
                            height: 10,
                        }}
                    ></View>

                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.setting}
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
                            height: 10,
                        }}
                    ></View>

                    {/* Invite a Friend */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => onShare()}
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
                                    source={icons.invite}
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
                            height: 10,
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
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.contactus}
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
                            height: 10,
                        }}
                    ></View>

                    {/* Privacy Policy */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.privacy}
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
                            height: 10,
                        }}
                    ></View>

                    {/* Terms of Services */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.term}
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
                            height: 10,
                        }}
                    ></View>

                    {/* Terms of Services */}
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                            borderRadius: SIZES.radius,
                            padding: SIZES.base,
                            borderWidth: 1,
                            borderColor: COLORS.lightGray2,
                        }}
                        onPress={() => console.log("Privacy")}
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
                                    source={icons.star}
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
                        marginTop: SIZES.padding,
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
