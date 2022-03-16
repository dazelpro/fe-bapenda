import React from "react";
import {
    View,
    Text,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Modal
} from 'react-native';

import {
    COLORS,
    FONTS,
    SIZES,
    constants,
    icons
} from '../../constants';

const FilterModal = ({isVisible, onClose}) => {

    const [showFilterModal, setShowFilterModal] = React.useState(isVisible)

    React.useEffect(() => {
        if(showFilterModal) {
            onClose
        }
    }, [showFilterModal])

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{ 
                    flex: 1,
                    backgroundColor: COLORS.transparentBlack7
                }}
            >
                {/* Transparent background */}
                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View
                        style={{ 
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }}
                    >

                    </View>
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}

export default FilterModal;