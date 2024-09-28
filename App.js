import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Provider } from 'react-redux';
import { store } from './redux/store'
import { useSelector, useDispatch } from 'react-redux'; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from './misc/colors';
// import TopBar from './components/TopBar/TopBar';
import Home from './components/Home/Home'
import Leaderboard from './components/Leaderboard/Leaderboard'
import Portfolio from './components/Portfolio/Portfolio';
import Portfolio2 from './components/Portfolio2/Portfolio2';
import { switchTheme } from './redux/themSlice';


const Tab = createBottomTabNavigator();

export default function App () {
// console.log(StatusBar.currentHeight);

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export function Navigator() {

  return (
    <NavigationContainer >
    <Tab.Navigator initialRouteName="Portfolio2" screenOptions={{tabBarShowLabel: true,tabBarActiveBackgroundColor:'gainsboro',tabBarInactiveBackgroundColor:'white',tabBarActiveTintColor:colors.OxfordBlue,tabBarInactiveTintColor:colors.CadetGrey, headerShown: false,tabBarLabelPosition: 'below-icon',tabBarLabelStyle:styles.tabBarLabelStyle }}>
    <Tab.Screen name="Portfolio2"  component={Portfolio2} options={{ tabBarIcon: ({focused,color,size}) => (
          <FontAwesome5 name="chart-pie" color={color} size={16} />
      ),tabBarLabel: 'سبد دارایی' }} />
      <Tab.Screen name="Portfolio"  component={Portfolio} options={{ tabBarIcon: ({focused,color,size}) => (
          <FontAwesome5 name="chart-pie" color={color} size={16} />
      ),tabBarLabel: 'سبد دارایی' }} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} options={{  tabBarIcon: ({focused,color,size}) => (
          <FontAwesome5 name="chart-bar" color={color} size={16} />
          ),tabBarLabel: 'بازار'}} />
      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({focused,color,size}) => (
          <Ionicons name="home" color={color} size={16} />
      ),tabBarLabel: 'خانه'}} />
    </Tab.Navigator>
  </NavigationContainer>
  )

}



export function Main() {

  // initialize action dispatcher
  const dispatch = useDispatch();

  // get the current theme
  let theme = useSelector(state => state.theme);


  const colorScheme = useColorScheme();
  if (colorScheme !== theme.value) 
    dispatch(switchTheme(colorScheme))
    
  

  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
       
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Vazir-Medium-FD': require('./assets/fonts/Vazir-Medium-FD.ttf'),
          'Vazirmatn-Medium': require('./assets/fonts/Vazirmatn-Medium.ttf'),
          'Vazirmatn-Regular': require('./assets/fonts/Vazirmatn-Regular.ttf'),
          'Vazirmatn-SemiBold': require('./assets/fonts/Vazirmatn-SemiBold.ttf')});
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
    
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
 
      <SafeAreaView style={[styles.container]} onLayout={onLayoutRootView}>
          <StatusBar style="light" translucent={false}/>

          <Navigator />
      </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:StatusBar.currentHeight
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  tabBarLabelStyle: {
    fontFamily:'Vazirmatn-SemiBold',
    fontSize:12,
    // marginTop:0
  }
});
