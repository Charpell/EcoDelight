import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DarkModeProvider, useDarkMode} from 'react-native-dark-mode';
import {useTheme, BaseSetting} from '@config';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {useSelector} from 'react-redux';

import Main from './main'
import {Loading,Filter,FlightFilter,Search,SearchHistory,PreviewImage,SelectCruise,CruiseFilter,EventFilter,SelectDarkOption,SelectFontOption,NotFound} from '@screens'


const RootStack = createStackNavigator()

export default function Navigator() {
    const storeLanguage = useSelector(state => state.application.language);
    const {theme, colors} = useTheme();
    const isDarkMode = useDarkMode();
  
    const forFade = ({current, closing}) => ({
      cardStyle: {
        opacity: current.progress,
      },
    });
  
    useEffect(() => {
      i18n.use(initReactI18next).init({
        resources: BaseSetting.resourcesLanguage,
        lng: storeLanguage ?? BaseSetting.defaultLanguage,
        fallbackLng: BaseSetting.defaultLanguage,
      });
      StatusBar.setBackgroundColor(colors.primary, true);
      StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
    }, []);
  
    return (
      <DarkModeProvider>
        <NavigationContainer theme={theme}>
          <RootStack.Navigator
            mode="modal"
            headerMode="none"
            initialRouteName="Loading">
            <RootStack.Screen
              name="Loading"
              component={Loading}
              options={{gestureEnabled: false}}
            />
            <RootStack.Screen name="Main" component={Main} />
            <RootStack.Screen name="Filter" component={Filter} />
            <RootStack.Screen name="FlightFilter" component={FlightFilter} />
            <RootStack.Screen name="BusFilter" component={NotFound} />
            <RootStack.Screen name="Search" component={Search} />
            <RootStack.Screen name="SearchHistory" component={SearchHistory} />
            <RootStack.Screen name="PreviewImage" component={PreviewImage} />
            <RootStack.Screen name="SelectBus" component={NotFound} />
            <RootStack.Screen name="CruiseFilter" component={CruiseFilter} />
            <RootStack.Screen
              name="SelectDarkOption"
              component={SelectDarkOption}
              gestureEnabled={false}
              options={{
                cardStyleInterpolator: forFade,
                cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
              }}
            />
            <RootStack.Screen
              name="SelectFontOption"
              component={SelectFontOption}
              gestureEnabled={false}
              options={{
                cardStyleInterpolator: forFade,
                cardStyle: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </DarkModeProvider>
    );
  }
  