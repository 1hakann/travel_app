import React from "react";
import { View } from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Chat, Location } from "../screens";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
}

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            activeColor="#EB6A58"
            inactiveColor="#3e2465"
            tabBarHideKeyboard={true}
            headerShown={false}
            barStyle={{ paddingBottom: 48 }}
            >
            <Tab.Screen name="Home" component={Home} options={
                    { 
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <Ionicons 
                                name={focused ? "grid" : "grid-outline"}
                                color={focused ? Colors.red : Colors.gray}
                                size={26}
                                 />
                        ) 
                    }
                    
                } />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation