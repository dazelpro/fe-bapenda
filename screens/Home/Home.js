import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons,
    dummyData
} from '../../constants';

const Home = () => {

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

    function renderSlider(){
        return(
            <View
                // style={{ 
                //     flexDirection: 'row',
                //     height: 40,
                //     alignItems: 'center',
                //     marginHorizontal: SIZES.padding,
                //     marginVertical: SIZES.base,
                //     paddingHorizontal: SIZES.radius,
                //     borderRadius: SIZES.base,
                //     backgroundColor: COLORS.lightGray2
                // }}
            >
                
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
            {renderSlider()}

            {/* List */}

        </View>
    )
}

export default Home;