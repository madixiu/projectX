import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

const LineChartView = () => {
  
  return (
    <View style={{borderRadius:5,justifyContent:'center',alignItems:'center',backgroundColor:'gainsboro'}}>
    
      <LineChart
          // backgroundColor="transparent"
          withDots={false}
          withInnerLines={false}
          withVerticalLabels={false}
          // flatColor={true}
          yAxisLabel='$'
          data={{
            // labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
                color: () => `#ff006c`,

                // color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
              },
            ],
          }}
          width={Dimensions.get('window').width-(Dimensions.get('window').width*0.13) } // from react-native
          height={220}
          chartConfig={{
            backgroundColor: 'gainsboro',
            backgroundGradientFrom: 'gainsboro',
            backgroundGradientTo: 'gainsboro',
            // backgroundGradientFrom: '#fff',
            // backgroundGradientTo: '#fff',
            fillShadowGradientFrom:'#ff006c',
            fillShadowGradientTo:'gainsboro',
            decimalPlaces: 2, // optional, defaults to 2dp
            fontFamily:'Vazir-Medium-FD',
            color: () => `#333`,
            style: {
              fontFamily:'Vazirmatn-Regular',
              // borderRadius: 16,
            },
            propsForLabels:{
              fontFamily:'Vazir-Medium-FD',
              // fontWeight:''
              },
          propsForVerticalLabels:{
             fontFamily:'Vazir-Medium-FD'
          },
          // propsForVerticalLabels:{
          //   fontFamily:'Vazir-Medium-FD'

          // },
            propsForBackgroundLines: {
                strokeDasharray: "" // solid background lines with no dashes
            }
          }}
   
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 5,
            // backgroundColor:'red'
          }}
        />
    </View>
    
  )
}

export default LineChartView