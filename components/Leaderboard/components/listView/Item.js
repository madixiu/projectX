import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React,{useState} from 'react'
import { FontAwesome,Entypo } from '@expo/vector-icons';
import correctName from '../../../../misc/nameCorrection';
import { LineChart } from 'react-native-chart-kit';

const Item = (props) => {

  const [chartParentWidth, setChartParentWidth] = useState(0);
  const [chartParentHeight, setChartParentHeight] = useState(0);
  const onLayout=(event)=> {
    const {height, width} = event.nativeEvent.layout;
    setChartParentWidth(width);
    setChartParentHeight(height);
    console.log(height);
    console.log(width);
  }
  const maxWidth = Dimensions.get("window").width/4
  const chartConfig = {
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
  }



  return (
    <View style={{paddingHorizontal:5,width:'100%',paddingVertical:2}}>

    <View style={styles.container}>
      <View style={styles.changeView}>

        <Text style={[styles.changeText,{color: props.change<0 ? 'red' : 'green'}]}>%{props.change}</Text>
        <Entypo name={props.change<0 ? "triangle-down" : "triangle-up"} size={16} color={props.change<0 ? 'red' : 'green'} />
      </View>
      {/* //? chartView */}
      <View style={styles.chartView} onLayout={onLayout}>
        {/* <Text>nemudar</Text>         */}
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
                    
                    strokeWidth: 2 // optional
                  }],
            }}
            width={chartParentWidth/3} // from react-native
            height={chartParentWidth/(3*1.66)}
            // yAxisLabel="$"
            // yAxisSuffix="k"
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            bezier
            style={{
              flex:1,
              justifyContent:'center',
              alignItems:'center',
              alignContent:'center',
              paddingHorizontal:5,
              // marginVertical: 8,
              // paddingRight:maxWidth/2,
              // paddingBottom:maxWidth/10,
              // paddingTop:0,
              paddingBottom:7,
              // marginRight:30,
              paddingRight:0,
              borderRadius: 18
            }}
          />
      </View>
      <View style={styles.titleView}> 
        <Text style={styles.nameText}>{correctName(props.name)}</Text>
        <FontAwesome name="bitcoin" size={16} color="black" />
      </View>

    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor:'gainsboro',
    width:'100%',
    alignItems:'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    elevation:1,
    // paddingHorizontal: 10,
    // marginRight: 5,
    // height: 50 //! should be removed

  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:10,
    flex:1,
    justifyContent:'flex-end'

  },
  changeView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:10,
    flex:1

  },
  changeText: {
    fontFamily: 'Vazir-Medium-FD',
    fontSize: 13,
  },
  nameText: {
    fontFamily: 'Vazirmatn-Regular',
    marginRight: 5,
    fontSize: 11
  },
  chartView: {
    flex:2,
    // minHeight:50,
    justifyContent:'center',
    alignItems:'center'
  }
})
export default Item;