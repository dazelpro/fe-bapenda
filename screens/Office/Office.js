import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native";
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData,
} from "../../constants";

const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setlayoutHeight] = useState(0);
    const btnSelected = 0;

    useEffect(() => {
        if (item.isExpanded) {
            setlayoutHeight(null);
        } else {
            setlayoutHeight(0);
        }
    }, [item.isExpanded]);

    return (
        <View>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.lightGray2,
                    padding: 20,
                    marginHorizontal: SIZES.padding,
                    marginVertical: 5,
                    borderRadius: SIZES.radius,
                }}
                onPress={onClickFunction}
            >
                <Text
                    style={{
                        ...FONTS.h3,
                        fontSize: 14,
                    }}
                >
                    {item.office_name}
                </Text>
                <Text
                    style={{
                        ...FONTS.body5,
                        fontSize: 12,
                    }}
                >
                    {item.address}
                </Text>
            </TouchableOpacity>
            <View
                style={{
                    height: layoutHeight,
                    overflow: "hidden",
                }}
            >
                {item.subcategory.map((item, key) => (
                    <TouchableOpacity
                        style={{
                            marginHorizontal: SIZES.padding,
                        }}
                        key={key}
                    >
                        <Text
                            style={{
                                ...FONTS.body5,
                                paddingHorizontal: SIZES.padding,
                                paddingVertical: 8,
                            }}
                        >
                            {item.val}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const Office = () => {
    const [listDataSource, setlistDataSource] = useState(dummyData.office);

    if (Platform.OS === "android") {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        array.map((value, placeindex) =>
            placeindex === index
                ? (array[placeindex]["isExpanded"] =
                      !array[placeindex]["isExpanded"])
                : (array[placeindex]["isExpanded"] = false)
        );
        btnSelected = index;
        setlistDataSource(array);
    };

    return (
        <View
            style={{
                flex: 1,
                marginTop: SIZES.padding,
            }}
        >
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                {listDataSource.map((item, key) => (
                    <ExpandableComponent
                        key={item.office_name}
                        item={item}
                        onClickFunction={() => {
                            updateLayout(key);
                        }}
                    ></ExpandableComponent>
                ))}
                <View
                    style={{
                        height: 200,
                    }}
                ></View>
            </ScrollView>
        </View>
    );
};

export default Office;
