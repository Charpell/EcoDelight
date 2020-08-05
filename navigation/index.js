import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@config'

import {Walkthrough} from '@screens'

const RootStack = createStackNavigator()


export default function Navigator() {
    const {theme, colors} = useTheme()
    return (
        <NavigationContainer theme={theme}>
            <RootStack.Navigator>
                <RootStack.Screen name="WalkThrough" component={Walkthrough} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}