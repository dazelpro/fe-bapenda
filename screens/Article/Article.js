import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from "react-native";

import { FilterModal } from "../";
import Loading from "../Loading/Loading";
import { HorizontalArticle } from "../../components";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../../constants";

const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/* Header */}
            <View
                style={{
                    flexDirection: "row",
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20,
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h3,
                    }}
                >
                    {title}
                </Text>

                <TouchableOpacity onPress={onPress}>
                    <Text
                        style={{
                            color: COLORS.primary,
                            ...FONTS.body3,
                        }}
                    >
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const Article = ({ navigation }) => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [recommends, setRecommends] = React.useState([]);
    const [menuList, setMenuList] = React.useState([]);

    const [showFilterModal, setShowFilterModal] = React.useState(false);

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType);
    }, []);

    // Handle

    function handleChangeCategory(categoryId, menuTypeId) {
        // Retrieve the recommended menu
        let selectedRecommend = dummyData.menu.find(
            (a) => a.name == "Recommended"
        );

        // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

        // Set the recommended menu based on the categoryId
        setRecommends(
            selectedRecommend?.list.filter((a) =>
                a.categories.includes(categoryId)
            )
        );

        // Set the menu based on the categoryId
        setMenuList(
            selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
        );
    }

    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={(item) => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20,
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight:
                                index == dummyData.menu.length - 1
                                    ? SIZES.padding
                                    : 0,
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id);
                            handleChangeCategory(selectedCategoryId, item.id);
                        }}
                    >
                        <Text
                            style={{
                                color:
                                    selectedMenuType == item.id
                                        ? COLORS.primary
                                        : COLORS.black,
                                ...FONTS.h3,
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            ></FlatList>
        );
    }

    return (
        <>
            <View
                style={{
                    flex: 1,
                    // marginBottom: 170
                }}
            >
                {/* List */}
                <FlatList
                    data={menuList}
                    keyExtractor={(item) => `${item.id}`}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View>
                            {/* Menu type */}
                            {renderMenuTypes()}
                        </View>
                    }
                    renderItem={({ item, index }) => {
                        return (
                            <HorizontalArticle
                                containerStyle={{
                                    height: 130,
                                    alignItems: "center",
                                    marginHorizontal: SIZES.padding,
                                    marginBottom: SIZES.radius,
                                    paddingHorizontal: SIZES.base,
                                }}
                                imageStyle={{
                                    borderRadius: SIZES.radius,
                                    marginHorizontal: 10,
                                    height: 100,
                                    width: 120,
                                }}
                                item={item}
                                onPress={() =>
                                    navigation.navigate("DetailArticle")
                                }
                                // onPress={() => console.log(navigation)}
                            ></HorizontalArticle>
                        );
                    }}
                    ListFooterComponent={
                        <View
                            style={{
                                height: 200,
                            }}
                        ></View>
                    }
                ></FlatList>
            </View>
            {/* <Loading/> */}
        </>
    );
};

export default Article;
