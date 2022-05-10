import React from "react";
import { Share, View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";

import { MainLayout } from "../screens";
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from "../constants";

import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label, icon, isFocused, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: "row",
                height: 40,
                marginBottom: SIZES.base,
                alignItems: "center",
                paddingLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: isFocused ? COLORS.transparentBlack1 : null,
            }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white,
                }}
            ></Image>

            <Text
                style={{
                    marginLeft: 15,
                    color: COLORS.white,
                    ...FONTS.h3,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

const CustomDrawerContent = ({ navigation, selectedTab, setSelectedTab }) => {
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

    const removeData = async () => {
        try {
            await AsyncStorage.removeItem("@storage_Key");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <DrawerContentScrollView scrollEnabled={true} contentContainerStyle={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.radius,
                }}
            >
                {/* Close */}
                <View
                    style={{
                        marginTop: 5,
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image
                            source={icons.cross}
                            style={{
                                height: 35,
                                width: 35,
                                tintColor: COLORS.white,
                            }}
                        ></Image>
                    </TouchableOpacity>
                </View>
                {/* Profile */}
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius,
                        alignItems: "center",
                    }}
                    // onPress={() => console.log("Profile")}
                    isFocused={selectedTab == constants.screens.profile}
                    onPress={() => {
                        setSelectedTab(constants.screens.profile);
                        navigation.navigate("MainLayout");
                    }}
                >
                    <Image
                        source={dummyData.appProfile?.profile_image}
                        style={{
                            width: 50,
                            height: 50,
                            // borderRadius: SIZES.radius
                        }}
                    ></Image>

                    <View
                        style={{
                            marginLeft: SIZES.radius,
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.h3,
                            }}
                        >
                            {dummyData.appProfile?.name}
                        </Text>
                        <Text
                            style={{
                                color: COLORS.white,
                                ...FONTS.body4,
                            }}
                        >
                            View your profile
                        </Text>
                    </View>
                </TouchableOpacity>
                {/* Drawer Items */}
                <View
                    style={{
                        flex: 1,
                        marginTop: SIZES.padding,
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        onPress={() => {
                            setSelectedTab(constants.screens.home);
                            navigation.navigate("MainLayout");
                        }}
                    ></CustomDrawerItem>

                    <CustomDrawerItem
                        label={constants.screens.article}
                        icon={icons.article}
                        isFocused={selectedTab == constants.screens.article}
                        onPress={() => {
                            setSelectedTab(constants.screens.article);
                            navigation.navigate("MainLayout");
                        }}
                    ></CustomDrawerItem>

                    <CustomDrawerItem
                        label={constants.screens.event}
                        icon={icons.event}
                        isFocused={selectedTab == constants.screens.event}
                        onPress={() => {
                            setSelectedTab(constants.screens.event);
                            navigation.navigate("MainLayout");
                        }}
                    ></CustomDrawerItem>

                    <CustomDrawerItem
                        label={constants.screens.office}
                        icon={icons.office}
                        isFocused={selectedTab == constants.screens.office}
                        onPress={() => {
                            setSelectedTab(constants.screens.office);
                            navigation.navigate("MainLayout");
                        }}
                    ></CustomDrawerItem>

                    {/* Line Divider */}

                    <View
                        style={{
                            height: 1,
                            marginVertical: SIZES.radius,
                            marginLeft: SIZES.radius,
                            backgroundColor: COLORS.lightGray1,
                        }}
                    ></View>

                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        onPress={() => navigation.navigate("UnderConstruction")}
                    ></CustomDrawerItem>

                    <CustomDrawerItem
                        label={constants.screens.setting}
                        icon={icons.setting}
                        onPress={() => navigation.navigate("UnderConstruction")}
                    ></CustomDrawerItem>

                    <CustomDrawerItem label={constants.screens.invite} icon={icons.invite} onPress={() => onShare()}></CustomDrawerItem>

                    <CustomDrawerItem
                        label={constants.screens.help}
                        icon={icons.contactus}
                        onPress={() => navigation.navigate("HelpCenter")}
                    ></CustomDrawerItem>
                </View>

                <View
                    style={{
                        marginBottom: SIZES.padding,
                    }}
                >
                    <CustomDrawerItem
                        label={constants.screens.logout}
                        icon={icons.logout}
                        onPress={() => {
                            // navigation.navigate("SignIn");
                            removeData();
                        }}
                    ></CustomDrawerItem>
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

const CustomDrawer = ({ selectedTab, setSelectedTab }) => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    });

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0, 1],
        outputRange: [0, 26],
    });

    const animatedStyle = {
        borderRadius,
        transform: [{ scale }],
        overflow: "hidden",
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.primary,
            }}
        >
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{
                    flex: 1,
                    width: "65%",
                    paddingRight: 20,
                    backgroundColor: "transparent",
                }}
                sceneContainerStyle={{
                    backgroundColor: "transparent",
                }}
                initialRouteName="MainLayout"
                drawerContent={(props) => {
                    setTimeout(() => {
                        setProgress(props.progress);
                    }, 0);

                    return <CustomDrawerContent navigation={props.navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />;
                }}
            >
                <Drawer.Screen name="MainLayout">{(props) => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}</Drawer.Screen>
            </Drawer.Navigator>
        </View>
    );
};

function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => {
            return dispatch(setSelectedTab(selectedTab));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
