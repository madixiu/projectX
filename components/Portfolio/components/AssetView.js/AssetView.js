import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';


const AssetView = () => {

return(
  <View style={styles.container}>
    <Text style={[{color:'#5a647a'},styles.text]}>مجموع سبد دارایی</Text>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:7}}>
      <View style={styles.percentChip}>
       <Entypo name="triangle-up" size={16} color="#00e3a4" />
       <Text style={[{fontSize:13,color:'#333'},styles.textFD]}>0.57%</Text>
      </View>
      <Text style={[{fontSize:23},styles.textFD]}>128,255,300</Text>
      
    </View>
    <View style={{alignItems:'flex-end'}}>

      <Text style={[{fontSize:12,color:'#00c288'},styles.textFD]}>+ 0.05517 (24h)</Text>
    </View>
  </View>
)

}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    // flexWrap:'wrap',

    // backgroundColor:'gainsboro',
    paddingHorizontal:15,
    // paddingBottom:0
  },
  percentChip: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgba(212,255,239,0.7)',
    borderRadius:7,
    paddingVertical:6,
    paddingHorizontal:7
  },
  text: {
    fontFamily:'Vazirmatn-SemiBold'
  },
  textFD: {
    fontFamily:'Vazir-Medium-FD'
  }
});

export default AssetView;