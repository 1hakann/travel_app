import React from "react";
import { View } from "react-native"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile, Chat, Location, Successful, Failed, Signin, Registration } from "../screens";
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from "../constants/theme";
import TopTab from "./TopTab";

const Tab = createBottomTabNavigator();

const tabBarStyle = {
    padding: 0,
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
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                                 />
                        ) 
                    }
                    
                } />
            
            <Tab.Screen name="Location" component={Location} options={
                    { 
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <Ionicons 
                                name={focused ? "location" : "location-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                                 />
                        ) 
                    }
                    
                } />

            <Tab.Screen name="Chat" component={Registration} options={
                    { 
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <Ionicons 
                                name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                                 />
                        ) 
                    }
                    
                } />
            
            <Tab.Screen 
                name="Profile" 
                component={TopTab} 
                options={
                    { 
                        tabBarStyle: tabBarStyle,
                        tabBarShowLabel: false,
                        headerShown: false,
                        tabBarIcon: ({focused}) => (
                            <Ionicons 
                                name={focused ? "person" : "person-outline"}
                                color={focused ? COLORS.red : COLORS.gray}
                                size={26}
                                 />
                        ) 
                    }
                    
                } />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation