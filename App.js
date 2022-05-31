import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from './misc/colors';
import Home from './components/Home/Home'
import List from './components/List/List'


const Tab = createBottomTabNavigator();
export default function App() {
  let [fontsLoaded, error] = useFonts({
    'Vazir-Medium-FD': require('./assets/fonts/Vazir-Medium-FD.ttf'),
    'Vazirmatn-Medium': require('./assets/fonts/Vazirmatn-Medium.ttf'),
    'Vazirmatn-Regular': require('./assets/fonts/Vazirmatn-Regular.ttf'),
    'Vazirmatn-SemiBold': require('./assets/fonts/Vazir-Medium-FD.ttf')

  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarShowLabel: false,tabBarActiveBackgroundColor:'gainsboro',tabBarInactiveBackgroundColor:'white',tabBarActiveTintColor:colors.OxfordBlue,tabBarInactiveTintColor:colors.CadetGrey, headerShown: false }}>
          <Tab.Screen name="List" component={List} options={{  tabBarIcon: ({focused,color,size}) => (
              <FontAwesome5 name="chart-bar" color={color} size={16} />
              )}} />
          <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({focused,color,size}) => (
              // <FontAwesome5 name="home" color={color} size={16} />
              <Ionicons name="md-home" color={color} size={16} />

          )}} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // width:'500',

    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
