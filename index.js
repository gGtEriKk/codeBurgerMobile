import 'react-native-gesture-handler';

import React from 'react'
import { registerRootComponent } from 'expo'

import ContextProvider from './src/contexts/app';

const App = () => {
    return (
        <ContextProvider>
            <Routes />
        </ContextProvider>
    )
}

import Routes from './src/routes'

registerRootComponent(App)