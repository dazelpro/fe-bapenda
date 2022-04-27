import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CustomDrawer from "./navigation/CustomDrawer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import {
    Splash,
    DetailArticle,
    Home,
    Article,
    RecommendedArticle,
    Check,
    PajakRestoran,
    PajakHiburan,
    PajakReklame,
    PajakPeneranganJalan,
    PajakParkir,
    PajakHotel,
    PajakBumiBangunan,
    HelpCenter,
    PrivacyPolice,
    UnderConstruction,
    Map,
    TermOfService,
} from "./screens";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName={"Splash"}
                >
                    <Stack.Screen name="MainLayout" component={CustomDrawer} />
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Article" component={Article} />
                    <Stack.Screen name="DetailArticle" component={DetailArticle} />
                    <Stack.Screen name="RecommendedArticle" component={RecommendedArticle} />
                    <Stack.Screen name="Check" component={Check} />
                    <Stack.Screen name="PajakBumiBangunan" component={PajakBumiBangunan} />
                    <Stack.Screen name="PajakRestoran" component={PajakRestoran} />
                    <Stack.Screen name="PajakHiburan" component={PajakHiburan} />
                    <Stack.Screen name="PajakReklame" component={PajakReklame} />
                    <Stack.Screen name="PajakPeneranganJalan" component={PajakPeneranganJalan} />
                    <Stack.Screen name="PajakParkir" component={PajakParkir} />
                    <Stack.Screen name="PajakHotel" component={PajakHotel} />
                    <Stack.Screen name="HelpCenter" component={HelpCenter} />
                    <Stack.Screen name="PrivacyPolice" component={PrivacyPolice} />
                    <Stack.Screen name="TermOfService" component={TermOfService} />
                    <Stack.Screen name="Map" component={Map} />
                    <Stack.Screen name="UnderConstruction" component={UnderConstruction} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
