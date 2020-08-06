import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {BaseColor, useTheme, useFont} from '@config';
import {useTranslation} from 'react-i18next';
import {Icon} from '@components';

import {NotFound,Post,PostDetail,Booking,Messages,Messenger,Profile,ProfileEdit,ChangePassword,Currency,MyPaymentMethod,AddPayment,Notification,
    Cruise,CruiseDetail,CruiseFilter,CruiseSearch,
    FlightFilter,FlightResult,FlightSearch,FlightSummary,FlightTicket,
    DashboardEvent,EventDetail,EventPreviewBooking,EventTicket,PreviewImage,HotelInformation,Search,OverViewCar,Car,CarDetail,
    Walkthrough,SignIn,ResetPassword,SignUp,Home,HotelDetail,PreviewBooking,CheckOut,PaymentMethod,PaymentMethodDetail,PreviewPayment,BookingDetail,Hotel,Filter,Review,Feedback,Tour,SearchHistory,TourDetail,Event} from '@screens'

const RootStack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

export default function Main() {
    return (
        <RootStack.Navigator
            headerMode="none"
            initialRouteName="BottomTabNavigator"
        >       
                <RootStack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
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
                <RootStack.Screen name="SearchHistory" component={SearchHistory} />
                <RootStack.Screen name="TourDetail" component={TourDetail} />
                <RootStack.Screen name="Event" component={Event} />
                <RootStack.Screen name="DashboardEvent" component={DashboardEvent} />
                <RootStack.Screen name="EventDetail" component={EventDetail} />
                <RootStack.Screen name="EventPreviewBooking" component={EventPreviewBooking} />
                <RootStack.Screen name="EventTicket" component={EventTicket} />
                <RootStack.Screen name="PreviewImage" component={PreviewImage} />
                <RootStack.Screen name="HotelInformation" component={HotelInformation} />
                <RootStack.Screen name="Search" component={Search} />
                <RootStack.Screen name="OverViewCar" component={OverViewCar} />
                <RootStack.Screen name="Car" component={Car} />
                <RootStack.Screen name="CarDetail" component={CarDetail} />
                <RootStack.Screen name="FlightSearch" component={FlightSearch} />
                <RootStack.Screen name="FlightSummary" component={FlightSummary} />
                <RootStack.Screen name="FlightTicket" component={FlightTicket} />
                <RootStack.Screen name="FlightResult" component={FlightResult} />
                <RootStack.Screen name="FlightFilter" component={FlightFilter} />
                <RootStack.Screen name="Cruise" component={Cruise} />
                <RootStack.Screen name="CruiseDetail" component={CruiseDetail} />
                <RootStack.Screen name="CruiseFilter" component={CruiseFilter} />
                <RootStack.Screen name="CruiseSearch" component={CruiseSearch} />
                <RootStack.Screen name="BusSearch" component={NotFound} />
                <RootStack.Screen name="Post" component={Post} />
                <RootStack.Screen name="PostDetail" component={PostDetail} />
                <RootStack.Screen name="Messages" component={Messages} />
                <RootStack.Screen name="ProfileEdit" component={ProfileEdit} />
                <RootStack.Screen name="ChangePassword" component={ChangePassword} />
                <RootStack.Screen name="Currency" component={Currency} />
                <RootStack.Screen name="MyPaymentMethod" component={MyPaymentMethod} />
                <RootStack.Screen name="AddPayment" component={AddPayment} />
                <RootStack.Screen name="Notification" component={Notification} />
            </RootStack.Navigator>
    )
}
        
function BottomTabNavigator() {
    const {t} = useTranslation();
    const {colors} = useTheme();
    const font = useFont();
    const auth = useSelector(state => state.auth);
    const login = auth.login.success;
    return (
      <BottomTab.Navigator
        initialRouteName="Home"
        headerMode="none"
        tabBarOptions={{
          showIcon: true,
          showLabel: true,
          activeTintColor: colors.primary,
          inactiveTintColor: BaseColor.grayColor,
          style: {borderTopWidth: 1},
          labelStyle: {
            fontSize: 12,
            fontFamily: font,
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            title: t('home'),
            tabBarIcon: ({color}) => {
              return <Icon color={color} name="home" size={20} solid />;
            },
          }}
        />
        <BottomTab.Screen
          name="Booking"
          component={Booking}
          options={{
            title: t('booking'),
            tabBarIcon: ({color}) => {
              return <Icon color={color} name="bookmark" size={20} solid />;
            },
          }}
        />
        <BottomTab.Screen
          name="Messenger"
          component={Messenger}
          options={{
            title: t('message'),
            tabBarIcon: ({color}) => {
              return <Icon solid color={color} name="envelope" size={20} solid />;
            },
          }}
        />
        <BottomTab.Screen
          name="Post"
          component={Post}
          options={{
            title: t('news'),
            tabBarIcon: ({color}) => {
              return <Icon color={color} name="copy" size={20} solid />;
            },
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={login ? Profile : Walkthrough}
          options={{
            title: t('account'),
            tabBarIcon: ({color}) => {
              return <Icon solid color={color} name="user-circle" size={20} />;
            },
          }}
        />
      </BottomTab.Navigator>
    );
  }