import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import Splash from "./screens/Splash/Splash";

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'Splash'}
                >
                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App