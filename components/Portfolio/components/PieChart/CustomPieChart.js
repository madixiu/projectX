import React, { useMemo } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PieChart } from "react-native-chart-kit";

const CustomPieChart = ({ data, accessor, absolute }) => {
   // Order by asscesor value

   const sortedData = useMemo(() => {
      return data.sort((a, b) => b[accessor] - a[accessor]);
   }, data);

   const percentages = useMemo(() => {
      // Get the total value of all dataitems
      const grandTotal = data.reduce((acum, item) => acum + item[accessor], 0);

      return data.reduce((acum, item) => {
         const percentageOfDataItem = (item[accessor] * 100) / grandTotal;
         return {
            ...acum,
            [item.name]: percentageOfDataItem.toFixed(2),
         };
      }, {});
   }, [absolute, data, accessor]);

   return (
      <View>
         <PieChart
            data={data}
            width={Dimensions.get("window").width}
            height={220}
            chartConfig={{
               backgroundColor: "#ffffff",
               backgroundGradientFrom: "white",
               backgroundGradientTo: "white",
               decimalPlaces: 2, // optional, defaults to 2dp
               color: (opacity = 1) => `rgba(54,64,81, ${opacity})`,
            }}
            accessor={accessor}
            backgroundColor="transparent"
            hasLegend={false}
            paddingLeft={Dimensions.get("window").width / 5}
         />
         <View>
            <View style={styles.legend}>
               {sortedData.map((dataItem) => (
                  <View style={styles.legendItem} key={dataItem.name}>
                     <FontAwesome name="circle" size={16} color={dataItem.color} />
                     <View style={{alignItems:'flex-start',paddingHorizontal:2,marginLeft:3}}>
                     <Text style={{fontSize:12}}>{dataItem.name}</Text>
                     <Text style={styles.legendItemValue}>
                        {absolute
                           ? dataItem[accessor]
                           : `${percentages[dataItem.name]}%`}
                     </Text>
                     </View>
                  </View>
               ))}
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   legend: {
      // flex:1,
      width:'100%',
      // backgroundColor:'gainsboro',
      // marginHorizontal: 10,
      paddingHorizontal:10,
      // paddingBottom:15,
      flexDirection: 'row',
      justifyContent:'space-around'
   },
   legendItem: {
      flexDirection: "row",
   },
   legendItemValue: {
      // marginHorizontal: 5,
      fontSize:11
   },
});

export default CustomPieChart;
