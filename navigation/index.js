import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from '@config'

import {Walkthrough,SignIn,ResetPassword,SignUp,Home,HotelDetail,PreviewBooking,CheckOut,PaymentMethod,PaymentMethodDetail,PreviewPayment,BookingDetail,Hotel,Filter,Review,Feedback,Tour} from '@screens'

const RootStack = createStackNavigator()


export default function Navigator() {
    const {theme, colors} = useTheme()
    return (
        <NavigationContainer theme={theme}>
            <RootStack.Navigator>
                <RootStack.Screen name="WalkThrough" component={Walkthrough} />
                <RootStack.Screen name="SignIn" component={SignIn} />
                <RootStack.Screen name="ResetPassword" component={ResetPassword} />
                <RootStack.Screen name="SignUp" component={SignUp} />
                <RootStack.Screen name="Home" component={Home} />
                <RootStack.Screen name="HotelDetail" component={HotelDetail} />
                <RootStack.Screen name="PreviewBooking" component={PreviewBooking} />
                <RootStack.Screen name="CheckOut" component={CheckOut} />
                <RootStack.Screen name="PaymentMethod" component={PaymentMethod} />
                <RootStack.Screen name="PaymentMethodDetail" component={PaymentMethodDetail} />
                <RootStack.Screen name="PreviewPayment" component={PreviewPayment} />
                <RootStack.Screen name="BookingDetail" component={BookingDetail} />
                <RootStack.Screen name="Hotel" component={Hotel} />
                <RootStack.Screen name="Filter" component={Filter} />
                <RootStack.Screen name="Review" component={Review} />
                <RootStack.Screen name="Feedback" component={Feedback} />
                <RootStack.Screen name="Tour" component={Tour} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}