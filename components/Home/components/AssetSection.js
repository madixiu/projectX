import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '../../../misc/colors'
export default class AssetSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontFamily: 'Vazirmatn-Regular', fontSize:20, color:colors.OxfordBlue}}>سلام علیرضا👋</Text>
        <Text style={{fontFamily: 'Vazirmatn-Regular', fontSize:10,color:colors.OxfordBlue}}>موجودی شما</Text>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontFamily: 'Vazirmatn-Regular', fontSize:10,paddingRight:5,color:colors.OxfordBlue}}>ریال</Text>
          <Text style={{fontFamily: 'Vazir-Medium-FD', fontSize:20,color:colors.OxfordBlue}}>51,427,020</Text>
        </View>
        <View style={styles.percentView}>
          <Text style={{fontFamily: 'Vazir-Medium-FD', fontSize:10,color: '#39d2a3'}}>9.3%</Text>
          <Ionicons name="arrow-up" color={'#39d2a3'} size={12} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignContent: 'flex-end', 
    // justifyContent: 'flex-end',
    alignItems:'flex-end',
    paddingRight: 10,
    paddingBottom: 10,
    borderColor: 'gainsboro',
    borderStyle:'solid',
    borderWidth:0.5,
    borderRadius: 8,

    // alignItems: 'center',
    // justifyContent: 'center',
  },
  percentView: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingRight: 5,
    paddingLeft: 5,

    padding: 1,
    borderColor: '#0c8e66',
    borderStyle:'solid',
    borderWidth:0.5,
    borderRadius: 15,
    backgroundColor:'#ddf8f0'
  }
})