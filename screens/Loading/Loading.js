import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import LottieView from 'lottie-react-native';
import { COLORS } from '../../constants';

const Loading = () => {
    return (
        <View
            style={[StyleSheet.absoluteFillObject, styles.container]}
        >
            <LottieView
                source={require('../../assets/images/loader.json')}
                autoPlay
                loop
            >

            </LottieView>
        </View>
    )
}

const styles = StyleSheet.create({
    continue: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: COLORS.transparentBlack7
    }
})

export default Loading;