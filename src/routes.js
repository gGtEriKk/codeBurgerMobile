import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Home from './pages/Home'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Feed from './pages/Feed'
import Marketplace from './pages/Marketplace'
import Category from './pages/Marketplace/category'
import Product from './pages/Marketplace/product'

import { colors } from './styles/theme.json'
import utils from './utils'
import { Title, Box } from './components'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CustomDrawerComponent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Box spacing='100px 30px'>
                <Title bold color='light' variant='big' align='center'>LOOKAPP</Title>
            </Box>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

const DrawerMenu = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Orders'
            drawerContent={
                props => <CustomDrawerComponent {...props} />
            }
            screenOptions={{
                drawerActiveBackgroundColor: utils.toAlpha(colors.primary, 60),
                drawerActiveTintColor: colors.light,
                drawerInactiveTintColor: utils.toAlpha(colors.light, 60),
                drawerStyle: {
                    backgroundColor: colors.black
                }
            }}>
            <Drawer.Screen name='Feed' component={Feed} options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Icon name='people' size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='Marketplace' component={Marketplace} options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Icon name='tag' size={20} color={color} />
                )
            }} />
            <Drawer.Screen name='Orders' component={Orders} options={{
                headerShown: false,
                drawerIcon: ({ color }) => (
                    <Icon name='basket' size={20} color={color} />
                )
            }} />
        </Drawer.Navigator>
    );
}

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' component={Home} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Login' component={SignIn} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Register' component={SignUp} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Feed' component={DrawerMenu} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Category' component={Category} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Product' component={Product} options={{
                    headerShown: false
                }} />
                <Stack.Screen name='Cart' component={Cart} options={{
                    headerShown: false
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes