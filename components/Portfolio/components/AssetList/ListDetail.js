import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { Entypo } from '@expo/vector-icons';

const holdingCalculator = (holding,price) => {
  return (holding*price).toFixed(3)
}
const holdingPercentCalculator = (holding,price,balance) => {
  return (((holding*price)/balance)*100).toFixed(2)
}

const holding = (holding,price,balance,filterSwitch) => {
  if (filterSwitch == 0)
  return '$'+holdingCalculator(holding,price)
  else
  return holdingPercentCalculator(holding,price,balance)+'%'
}
const ListDetail = (props) => {

  return(
    <View style={styles.container}>
      <View style={{flex:2}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Image source={{uri :props.logo}} style={{height:22,width:22}} />
          <View style={{marginLeft:7}}>
          
            <Text style={styles.firstRowText}>{props.name}</Text>
            <Text style={styles.secondRowText}>{props.symbol}</Text>
          </View>
        </View>
      </View>
      <View style={{flex:1,alignItems:'flex-end'}}>
        <Text style={styles.firstRowText}>${props.price}</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <Entypo name={props.change>=0 ? "triangle-up" : "triangle-down"} size={16} color={props.change>=0 ? '#00e3a5':'#ff006c'} />
          <Text style={{fontSize:12,color:props.change>=0 ? '#00e3a5':'#ff006c' }}>{Math.abs(props.change)}%</Text>      

        </View>
      </View>
      <View style={{flex:1,alignItems:'flex-end'}}>
        <Text style={styles.firstRowText}>{holding(props.holding,props.price,props.balance,props.filterSwitch)}</Text>
        <Text style={styles.secondRowText}>{props.symbol}{props.holding}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    paddingVertical:15,
    borderBottomWidth:0.5,
    borderBottomColor:'#d1e3ea',
    paddingHorizontal:10,
  },
  firstRowText: {
    fontSize:13,
    fontWeight:'bold',
    marginBottom:3
  },
  secondRowText: {
    fontSize:12,
    color:'#333'
  }
})
export default ListDetail
