import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';

import { FilterModal } from '../';
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

    const [showFilterModal, setShowFilterModal] = React.useState(false)

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
                    onPress={() => setShowFilterModal(true)}
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
                                height: 150,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 10,
                                height: 110,
                                width: 130
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

    function renderCategories() {
        return (
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <TouchableOpacity
                        style={{ 
                            flexDirection: 'row',
                            height: 55,
                            marginTop: SIZES.padding,
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
                            paddingHorizontal: 8,
                            borderRadius: SIZES.radius,
                            backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
                        }}
                        onPress={() => {
                            setSelectedCategoryId(item.id)
                            // handleChangeCategory
                        }}
                    >
                        <Image
                            source={item.icon}
                            style={{ 
                                alignSelf: 'center',
                                marginRight: 5,
                                height: 40,
                                width: 40
                            }}
                        >

                        </Image>

                        <Text
                            style={{ 
                                alignSelf: 'center',
                                marginRight: SIZES.base,
                                color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
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
    
    return (
        <View
            style={{
                flex: 1
                // marginBottom: 170
            }}
        >
            {/* Search */}
            {renderSearch()}

            {/* Filter modal */}
            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onCLose={() => setShowFilterModal(false)}
                >
                </FilterModal>
            }

            {/* SLider */}
            {/* {renderSlider()} */}

            {/* List */}
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* Category */}
                        {renderCategories()}

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
                                marginBottom: SIZES.radius,
                                paddingHorizontal: SIZES.base
                            }}
                            imageStyle={{
                                borderRadius: SIZES.radius,
                                marginHorizontal: 10, 
                                height: 100,
                                width: 120
                            }}
                            item={item}
                            onPress={() => console.log("HorizontalArticle")}
                        >

                        </HorizontalArticle>
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{ 
                            height: 200
                        }}
                    >

                    </View>
                }
            >

            </FlatList>

        </View>
    )
}

export default Home;