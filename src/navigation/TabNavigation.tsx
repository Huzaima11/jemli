import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';
import Account from '../screens/Account/Account';
import Home from '../screens/Home/Home';
import { Screen } from '../utils/enums';
import Booking from '../screens/Booking/Booking';
import Playmate from '../screens/Playmate/Playmate';
import Chat from '../screens/Chat/Chat';
import { Header } from '@components/index';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    const iconSize = 22;
    const activeColor = '#DC4437';
    const inactiveColor = '#000';

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: activeColor,
                tabBarInactiveTintColor: inactiveColor,
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '400',
                },
                tabBarStyle: {
                    height: 75,
                    paddingBottom: 14,
                    paddingTop: 12,
                    backgroundColor: '#fff',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{ uri: 'home' }}
                            style={{
                                width: iconSize,
                                height: iconSize,
                                tintColor: focused ? activeColor : inactiveColor,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Screen.Booking}
                component={Booking}
                options={{
                    headerShown: true,
                    header: () => <Header title="My Bookings" />,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{ uri: 'booking' }}
                            style={{
                                width: iconSize,
                                height: iconSize,
                                tintColor: focused ? activeColor : inactiveColor,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Screen.Playmate}
                component={Playmate}
                options={{
                    headerShown: true,
                    header: () => <Header title="Find a Playmate" />,
                    tabBarIcon: () => (
                        <LinearGradient
                            colors={['#DC4437', '#F5B400']}
                            start={{ x: 0.5, y: 0 }}
                            end={{ x: 0.5, y: 1 }}
                            style={{
                                width: 65,
                                height: 65,
                                borderRadius: 35,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 50,
                            }}
                        >
                            <Image
                                source={{ uri: 'playmate' }}
                                style={{
                                    width: 45,
                                    height: 45,
                                    tintColor: '#fff'
                                }}
                                resizeMode="contain"
                            />
                        </LinearGradient>
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{ uri: 'chat' }}
                            style={{
                                width: iconSize,
                                height: iconSize,
                                tintColor: focused ? activeColor : inactiveColor,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name={Screen.Account}
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={{ uri: 'account' }}
                            style={{
                                width: iconSize,
                                height: iconSize,
                                tintColor: focused ? activeColor : inactiveColor,
                            }}
                            resizeMode="contain"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
