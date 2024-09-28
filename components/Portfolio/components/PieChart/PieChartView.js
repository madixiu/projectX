import React from 'react'
import {View} from 'react-native'
import CustomPieChart from "./CustomPieChart";

const PieChartView = () => {

   const chartData = [{
      name: 'DOGE',
      total: 4.495,
      color: '#14213d',
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
   },{
      name: 'DOT',
      total: 3.187,
      color: '#fca311',
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
   },{
      name: 'ONE',
      total: 1.949,
      color: '#118ab2',
      legendFontColor: "#7F7F7F",
      legendFontSize: 12,
   }]

   return (
      <View style={{backgroundColor:'gainsboro', borderRadius:5,paddingBottom:10}}>
         <CustomPieChart data={chartData} accessor="total" absolute={false} />
      </View>
   )
}

export default PieChartView