import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';

import { HorizontalArticle } from '../../components';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../../constants';

const Section = ({title, onPress, children}) => {
    return (
        <View>
            {/* Header */}
            <View
                style={{ 
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    marginTop: 30,
                    marginBottom: 20
                }}
            >
                <Text
                    style={{ 
                        flex: 1,
                        ...FONTS.h3
                    }}
                >
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text
                        style={{ 
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                    >
                        Show All
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Home = () => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [recommends, setRecommends] = React.useState([])
    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    // Handle

    function handleChangeCategory(categoryId, menuTypeId) {
        // Retrieve the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

        // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        // Set the recommended menu based on the categoryId
        setRecommends(selectedRecommend?.list.filter(a => a.categories.includes(categoryId)))

        // Set the menu based on the categoryId
        setMenuList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
    }

    // Render

    function renderSearch(){
        return(
            <View
                style={{ 
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.base,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{ 
                        height: 20,
                        width: 20,
                        tintColor: COLORS.gray
                    }}
                >

                </Image>

                {/* Text Input */}
                <TextInput
                    style={{ 
                        flex: 1,
                        marginLeft: SIZES.radius
                    }}
                    placeholder="Search article..."
                />

                {/* Filter Button */}
                <TouchableOpacity
                    // onPress={}
                >
                    <Image
                        source={icons.filter}
                        style={{ 
                            height: 20,
                            width: 20,
                            tintColor: COLORS.gray
                        }}
                    >

                    </Image>

                </TouchableOpacity>

            </View>
        )
    }

    // function renderSlider(){
    //     return(
    //         <View
    //             // style={{ 
    //             //     flexDirection: 'row',
    //             //     height: 40,
    //             //     alignItems: 'center',
    //             //     marginHorizontal: SIZES.padding,
    //             //     marginVertical: SIZES.base,
    //             //     paddingHorizontal: SIZES.radius,
    //             //     borderRadius: SIZES.base,
    //             //     backgroundColor: COLORS.lightGray2
    //             // }}
    //         >
                
    //         </View>
    //     )
    // }

    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menu}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ 
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{ 
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menu.length - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory
                            (selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style={{ 
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            >

            </FlatList>
        )
    }

    function renderRecommendedSection() {
        return (
            <View>
                <Section
                    title="Recommended"
                    onPress={() => console.log("Show all recommended")}
                >
                </Section>

                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <HorizontalArticle
                            containerStyle={{ 
                                height: 180,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                marginHorizontal: 10,
                                height: 100,
                                width: 100
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalArticle")}
                        >
                        </HorizontalArticle>
                    )}
                >
                </FlatList>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            {/* Search */}
            {renderSearch()}

            {/* SLider */}
            {/* {renderSlider()} */}

            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Recommended */}
                        {renderRecommendedSection()}

                        {/* Menu type */}
                        {renderMenuTypes()}
                    </View>
                }
                renderItem={({item, index}) => {
                    return(
                        <HorizontalArticle
                            containerStyle={{ 
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginHorizontal: 10, 
                                height: 80,
                                width: 80
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalArticle")}
                        >

                        </HorizontalArticle>
                    )
                }}
            >

            </FlatList>

        </View>
    )
}

export default Home;