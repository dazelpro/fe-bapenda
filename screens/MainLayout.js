import React, { useState } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, StatusBar } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { Home, Article, Event, Profile, Office } from "../screens";

import { Header, NoticeModal } from "../components";
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from "../constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TabButton = ({ label, icon, isFocused, outerContainerStyle, innerContainerStyle, onPress }) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View
                style={[
                    {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    },
                    outerContainerStyle,
                ]}
            >
                <Animated.View
                    style={[
                        {
                            flexDirection: "row",
                            width: "80%",
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 25,
                        },
                        innerContainerStyle,
                    ]}
                >
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.white : COLORS.gray,
                        }}
                    ></Image>

                    {isFocused && (
                        <Text
                            numberOfLines={1}
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.h3,
                            }}
                        >
                            {label}
                        </Text>
                    )}
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {
    const flatListRef = React.useRef();
    // Reanimated Shared Value
    const homeTabFlex = useSharedValue(1);
    const homeTabColor = useSharedValue(COLORS.white);
    const articleTabFlex = useSharedValue(1);
    const articleTabColor = useSharedValue(COLORS.white);
    const officeTabFlex = useSharedValue(1);
    const officeTabColor = useSharedValue(COLORS.white);
    const eventTabFlex = useSharedValue(1);
    const eventTabColor = useSharedValue(COLORS.white);
    const profileTabFlex = useSharedValue(1);
    const profileTabColor = useSharedValue(COLORS.white);

    const [sessionLogin, setSessionLogin] = React.useState(false);

    const [showNoticeModal, setShowNoticeModal] = React.useState(false);

    // Reanimated Animated Value

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value,
        };
    });

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value,
        };
    });

    const articleFlexStyle = useAnimatedStyle(() => {
        return {
            flex: articleTabFlex.value,
        };
    });

    const articleColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: articleTabColor.value,
        };
    });

    const officeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: officeTabFlex.value,
        };
    });

    const officeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: officeTabColor.value,
        };
    });

    const eventFlexStyle = useAnimatedStyle(() => {
        return {
            flex: eventTabFlex.value,
        };
    });

    const eventColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: eventTabColor.value,
        };
    });

    const profileFlexStyle = useAnimatedStyle(() => {
        return {
            flex: profileTabFlex.value,
        };
    });

    const profileColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: profileTabColor.value,
        };
    });

    React.useEffect(() => {
        setSelectedTab(constants.screens.home);
    }, []);

    const getSession = async () => {
        try {
            const data = await AsyncStorage.getItem("@storage_Key");
            if (data !== null) {
                setSessionLogin(true);
            } else {
                setSessionLogin(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false,
            });

            homeTabFlex.value = withTiming(4, { duration: 500 });
            homeTabColor.value = withTiming(COLORS.primary, {
                duration: 500,
            });
        } else {
            homeTabFlex.value = withTiming(1, { duration: 500 });
            homeTabColor.value = withTiming(COLORS.white, {
                duration: 500,
            });
        }

        if (selectedTab == constants.screens.article) {
            flatListRef?.current?.scrollToIndex({
                index: 1,
                animated: false,
            });

            articleTabFlex.value = withTiming(4, { duration: 500 });
            articleTabColor.value = withTiming(COLORS.primary, {
                duration: 500,
            });
        } else {
            articleTabFlex.value = withTiming(1, { duration: 500 });
            articleTabColor.value = withTiming(COLORS.white, {
                duration: 500,
            });
        }

        if (selectedTab == constants.screens.office) {
            flatListRef?.current?.scrollToIndex({
                index: 3,
                animated: false,
            });

            officeTabFlex.value = withTiming(4, { duration: 500 });
            officeTabColor.value = withTiming(COLORS.primary, {
                duration: 500,
            });
        } else {
            officeTabFlex.value = withTiming(1, { duration: 500 });
            officeTabColor.value = withTiming(COLORS.white, {
                duration: 500,
            });
        }

        if (selectedTab == constants.screens.event) {
            flatListRef?.current?.scrollToIndex({
                index: 2,
                animated: false,
            });

            eventTabFlex.value = withTiming(4, { duration: 500 });
            eventTabColor.value = withTiming(COLORS.primary, {
                duration: 500,
            });
        } else {
            eventTabFlex.value = withTiming(1, { duration: 500 });
            eventTabColor.value = withTiming(COLORS.white, {
                duration: 500,
            });
        }

        if (selectedTab == constants.screens.profile) {
            flatListRef?.current?.scrollToIndex({
                index: 4,
                animated: false,
            });

            profileTabFlex.value = withTiming(4, { duration: 500 });
            profileTabColor.value = withTiming(COLORS.primary, {
                duration: 500,
            });
        } else {
            profileTabFlex.value = withTiming(1, { duration: 500 });
            profileTabColor.value = withTiming(COLORS.white, {
                duration: 500,
            });
        }
    }, [selectedTab]);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <Animated.View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    ...drawerAnimationStyle,
                }}
            >
                {/* Header */}
                <Header
                    containerStyle={{
                        height: 50,
                        paddingHorizontal: SIZES.padding,
                        marginTop: 20,
                        alignItems: "center",
                    }}
                    title={selectedTab.toUpperCase()}
                    leftComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                height: 40,
                                alignItems: "center",
                                justifyContent: "center",
                                borderWidth: 1,
                                borderColor: COLORS.gray2,
                                borderRadius: SIZES.radius,
                            }}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Image source={icons.menu}></Image>
                        </TouchableOpacity>
                    }
                    rightComponent={
                        <TouchableOpacity
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: SIZES.radius,
                            }}
                            onPress={() => navigation.openDrawer()}
                        >
                            <Image
                                source={dummyData?.appProfile?.profile_image}
                                style={{
                                    width: 40,
                                    height: 40,
                                    // borderRadius: SIZES.radius
                                }}
                            ></Image>
                        </TouchableOpacity>
                    }
                ></Header>

                {showNoticeModal && <NoticeModal isVisible={showNoticeModal} onRequestClose={() => setShowNoticeModal(false)} />}

                {/* Content */}
                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <FlatList
                        ref={flatListRef}
                        horizontal
                        scrollEnabled={false}
                        paddingEnabled
                        snapToAlignment="center"
                        snapToInterval={SIZES.width}
                        showsHorizontalScrollIndicator={false}
                        data={constants.bottom_tabs}
                        keyExtractor={(item) => `${item.id}`}
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        height: SIZES.height,
                                        width: SIZES.width,
                                    }}
                                >
                                    {item.label == constants.screens.home && <Home navigation={navigation} />}
                                    {item.label == constants.screens.article && <Article navigation={navigation} />}
                                    {item.label == constants.screens.event && <Event navigation={navigation} />}
                                    {item.label == constants.screens.office && <Office navigation={navigation} />}
                                    {item.label == constants.screens.profile && <Profile navigation={navigation} />}
                                </View>
                            );
                        }}
                    ></FlatList>
                </View>

                {/* Footer */}

                <View
                    style={{
                        height: 80,
                        justifyContent: "flex-end",
                    }}
                >
                    {/* Shadow */}
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 4 }}
                        colors={[COLORS.transparent, COLORS.gray]}
                        style={{
                            position: "absolute",
                            top: -20,
                            left: 0,
                            right: 0,
                            height: 100,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}
                    ></LinearGradient>

                    {/* Tabs */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            paddingHorizontal: SIZES.radius,
                            paddingBottom: 10,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            backgroundColor: COLORS.white,
                        }}
                    >
                        <TabButton
                            label={constants.screens.home}
                            icon={icons.home}
                            isFocused={selectedTab == constants.screens.home}
                            outerContainerStyle={homeFlexStyle}
                            innerContainerStyle={homeColorStyle}
                            onPress={() => setSelectedTab(constants.screens.home)}
                        ></TabButton>

                        <TabButton
                            label={constants.screens.article}
                            icon={icons.article}
                            isFocused={selectedTab == constants.screens.article}
                            outerContainerStyle={articleFlexStyle}
                            innerContainerStyle={articleColorStyle}
                            onPress={() => {
                                getSession();
                                if (sessionLogin) {
                                    setSelectedTab(constants.screens.article);
                                } else {
                                    setShowNoticeModal(true);
                                }
                            }}
                        ></TabButton>

                        <TabButton
                            label={constants.screens.event}
                            icon={icons.event}
                            isFocused={selectedTab == constants.screens.event}
                            outerContainerStyle={eventFlexStyle}
                            innerContainerStyle={eventColorStyle}
                            onPress={() => {
                                getSession();
                                if (sessionLogin) {
                                    setSelectedTab(constants.screens.event);
                                } else {
                                    setShowNoticeModal(true);
                                }
                            }}
                        ></TabButton>

                        <TabButton
                            label={constants.screens.office}
                            icon={icons.office}
                            isFocused={selectedTab == constants.screens.office}
                            outerContainerStyle={officeFlexStyle}
                            innerContainerStyle={officeColorStyle}
                            onPress={() => {
                                getSession();
                                if (sessionLogin) {
                                    setSelectedTab(constants.screens.office);
                                } else {
                                    setShowNoticeModal(true);
                                }
                            }}
                        ></TabButton>

                        <TabButton
                            label={constants.screens.profile}
                            icon={icons.profile}
                            isFocused={selectedTab == constants.screens.profile}
                            outerContainerStyle={profileFlexStyle}
                            innerContainerStyle={profileColorStyle}
                            onPress={() => {
                                getSession();
                                if (sessionLogin) {
                                    setSelectedTab(constants.screens.profile);
                                } else {
                                    setShowNoticeModal(true);
                                }
                            }}
                        ></TabButton>
                    </View>
                </View>
            </Animated.View>
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
