import React, { Component } from 'react'
import { Text, View, StyleSheet,Dimensions } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../../../misc/colors';
import {LineChart} from "react-native-chart-kit";

const maxWidth = Dimensions.get("window").width/1.6
const chartConfig = 
  {
    backgroundGradientFrom: "#0000",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#000",
    backgroundGradientToOpacity: 0,
    // backgroundColor: "#f2f2f2",
    // backgroundGradientOpacity: 0,
    // backgroundGradientFrom: "#f2f2f2",
    // backgroundGradientTo: "#f2f2f2",
    // fillShadowGradient:"#402cd3",
    // fillShadowGradientFrom:"#fff",
    // fillShadowGradientTo:"#fff",
    // fillShadowGradientOpacity:0,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: () => `rgb(30,204,151)`, // optional
    // labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      // borderRadius: 10
    },
    // propsForDots: {
    //   r: "6",
    //   strokeWidth: "2",
    //   stroke: "#ffa726"
    // }
  }


export default class ListDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ItemTopSection}>
          <View>
            <Text style={{fontFamily:'Vazir-Medium-FD',color: colors.OxfordBlue}}>رتبه ۱</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <MaterialCommunityIcons name="chevron-double-up" size={16} color={colors.Keppel} />
              <Text style={{fontFamily:'Vazir-Medium-FD',color: colors.Keppel}}>12</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{paddingRight:5}}>
                <Text style={{fontFamily:'Vazirmatn-Regular',color: colors.OxfordBlue}}>رمز ارز</Text>
                <Text style={{fontFamily:'Vazir-Medium-FD',color: colors.Keppel}}>+9.3%</Text>
              </View>
              <MaterialCommunityIcons name="bitcoin" size={24} color="black" />
            </View>
          </View>
        </View>
        {/* line Chart */}
        <View style={{alignItems:'center'}}>
          <LineChart
            withDots={false}
            withShadow={false}
            withInnerLines={false}
            withVerticalLines={false}
            withHorizontalLines={false}
            withVerticalLabels={false}
            withHorizontalLabels={false}
            // flatColor={true}
            data={{
              // labels: ["January", "February", "March", "April", "May", "June"],
              datasets: [{
                    data: [ 100,200,150,400,300, 450, 380, 500, 650, 430,700 ],
                    
                    strokeWidth: 3 // optional
                  }],
            }}
            width={maxWidth} // from react-native
            height={maxWidth/2.3}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              // marginVertical: 8,
              paddingRight:maxWidth/4,
              // paddingLeft:0,
              borderRadius: 18
            }}
          />
        </View>
        {/* end of line Chart */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gainsboro',
    borderStyle:'solid',
    borderWidth:3,
    borderRadius: 24,
    marginRight: 10,
    maxWidth: maxWidth
  },
  ItemTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    
  }
});