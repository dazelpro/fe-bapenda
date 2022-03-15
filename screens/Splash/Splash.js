import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { StackActions } from '@react-navigation/native';

class Splash extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 3000)
    };

    render() {
        return (
            <View>
                <Text>Splash</Text>
            </View>
        )
    }
}

export default Splash;