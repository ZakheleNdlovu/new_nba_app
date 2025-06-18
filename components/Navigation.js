import { View, Text, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Events from './Games1/Events'
import EventDetails from './Games1/EventDetails'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Teams from './Teams/Teams'
import TeamDetails from './Teams/TeamDetails'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Players from './Teams/Players/Players'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PlayerDetails from './Teams/Players/PlayerDetails'
import Headlines from './Headlines/Headlines'
import Details from './Headlines/Details'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Top = createMaterialTopTabNavigator()
const Bottom = createBottomTabNavigator()

function EventStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Games' component={Events} options={{ headerShown: false }} />
            <Stack.Screen name='Details' component={EventDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => (
                <DrawerContentScrollView {...props}>
                    <View style={{ height: '100%' }}>
                        <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={{ uri: 'https://th.bing.com/th/id/R.a59293ce0fde19e2b09f8ff3efa8e1ab?rik=2jzIvrxcuU5%2bvA&riu=http%3a%2f%2fwww.stickpng.com%2fassets%2fimages%2f58428defa6515b1e0ad75ab4.png&ehk=ltCnKNoDPGV0hObY3nJXCn9p9jufYXqgDwfZ6LbttCU%3d&risl=&pid=ImgRaw&r=0' }} width={230} height={'100%'} style={{ height: 110, marginTop: 4 }} />

                        </View>

                    </View>
                    <View style={{ marginTop: 10, borderRadius: 30, marginBottom: 10 }}>
                        <DrawerItemList {...props} />

                    </View>


                </DrawerContentScrollView>
            )}>
            <Drawer.Screen name='Events' component={EventStackNavigator} options={{ drawerIcon: () => <Ionicons name='basketball' size={30} color={'red'} /> }} />
            <Drawer.Screen name='Teams' component={TeamStackNavigator} options={{ drawerIcon: () => <Ionicons name='albums' size={30} color={'red'} /> }} />
            <Drawer.Screen name='League News' component={NewsStackNavigator} options={{ drawerIcon: () => <Ionicons name='newspaper-outline' size={30} color={'red'} /> }} />
        </Drawer.Navigator>
    )
}

function NewsStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Headlines' component={Headlines} options={{ headerShown: false }} />
            <Stack.Screen name='HDetails' component={Details} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

function TeamStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Teams1' component={Teams} options={{ headerShown: false }} />
            <Stack.Screen name='Team-Details' component={TeamDetails} options={{ headerShown: false }} />
            <Stack.Screen name='Players' component={Players} options={{ headerShown: false }} />
            <Stack.Screen name='PlayerDetails' component={PlayerDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}




const Navigation = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}

export default Navigation