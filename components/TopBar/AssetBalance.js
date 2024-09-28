import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function AssetBalance() {
  return (
    <View style={styles.container}>
      {/* <Text>AssetBalance</Text> */}
      <View style={styles.bottomView}>
        <Text style={styles.textLabel}>ریال</Text>
        <Text  style={styles.textBalance}>51,427,020</Text>
        <Text style={styles.textLabel}>کل دارایی</Text>


      </View>
      <View style={styles.bottomView}>
        <Text style={styles.textLabel}>ریال</Text>
        <Text style={styles.textBalance}>42,701</Text>
        <Text style={styles.textLabel}>موجودی</Text>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width:'100%',
    flex:1,
    backgroundColor:'gainsboro',
    // backgroundColor:'#f2f2f2',

    elevation:3,
    borderColor:'white',
    borderStyle:'solid',
    borderWidth:0.5,
    borderRadius:10,
    // padding:4,
    paddingHorizontal:4,
   
  },
  bottomView: {
    flex:1,
    // width:'100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center'
  },
  textLabel: {
    fontSize: 10,
    fontFamily: 'Vazirmatn-Regular',
    marginHorizontal: 3
  },
  textBalance: {
    fontSize: 12,
    fontFamily: 'Vazir-Medium-FD',
  }
})