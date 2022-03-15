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

const Home = () => {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [menuList, setMenuList] = React.useState([])

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    // Handle

    function handleChangeCategory(categoryId, menuTypeId) {
        // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

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