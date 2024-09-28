import * as React from 'react';
import { Animated, View, TouchableOpacity, StyleSheet,Text,Image } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { FontAwesome5 } from '@expo/vector-icons';
import LineChartView from './LineChart/LineChartView'
import PieChartView from './PieChart/PieChartView'
import Statistics from './Statistics/Statistics'
const LineChartRoute = () => (
  <LineChartView />
);
const PieChartRoute = () => (
  <PieChartView />
  // <View><Text>pie</Text></View>
);
const StatisticsRoute = () => (
  <Statistics />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 2,
    routes: [
      // { key: 'first', title: 'Line Chart',icon:'chart-line',index:0 },
      // { key: 'second', title: 'Pie Chart' ,icon:'chart-pie',index:1},
      // { key: 'third', title: 'Statistics',icon:'file-invoice-dollar',index:2}
      { key: 'Left', title: 'عملکرد',icon:'file-invoice-dollar',index:0},
      { key: 'Middle', title: 'نمودار پای' ,icon:'chart-pie',index:1},
      { key: 'Right', title: 'نمودار خطی',icon:'chart-line',index:2 },
    ],
  };


  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          // const iconColor = props.position.interpolate({
          //   inputRange,
          //   outputRange: inputRange.map((inputIndex) =>
          //     inputIndex === i ? 'black' : 'red'
          //   )
          // });

          return (
            <TouchableOpacity
              key={route.title}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <FontAwesome5 name={route.icon} size={13}  />
              <Animated.Text style={{ opacity,fontSize:13,marginLeft:5, fontFamily:'Vazirmatn-Regular' }}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    // Left: LineChartRoute,
    // Middle: PieChartRoute,
    // Right: StatisticsRoute
    // first: FirstRoute,
    // second: SecondRoute,
    // third: ThirdRoute
    Left: StatisticsRoute,
    Middle: PieChartRoute,
    Right: LineChartRoute
  });

  render() {
    return (
      <View style={{flex:1,paddingHorizontal:15}}>
      
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    // marginTop:1
  },
  tabItem: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'gainsboro',
    borderColor:'black',
    borderStyle:'solid',
    borderRadius:5,
    paddingVertical: 7,
    paddingHorizontal:1,
    marginHorizontal:2,
    marginVertical:5
  },
});
