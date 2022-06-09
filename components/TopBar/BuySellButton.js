import { View, Text,StyleSheet ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function BuySellButton() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.buyView}>
        <Text style={styles.buyText}>خرید</Text>
      </View>
      <View style={styles.sellView}>
        <Text style={styles.buyText}>فروش</Text>
      </View>
      {/* <Text>BuySellButton</Text> */}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight:4,
    // elevation:10,
    // backgroundColor: 'red',
    // padding: 2,
    // borderRadius: 15,
    // borderBottomEndRadius:15,

  },
  buyView: {
    backgroundColor: '#1ecc97',
    // borderRadius: 15,
    borderTopLeftRadius:5,
    borderBottomLeftRadius:5,
    paddingHorizontal:7 ,
    paddingVertical: 2,
    elevation:10,


  },
  sellView: {
    backgroundColor: 'red',
    // borderRadius: 15,
    borderTopRightRadius:5,
    borderBottomRightRadius:5,
    paddingHorizontal:5 ,
    paddingVertical: 2,
    elevation:10,


  },
  buyText: {
    color: 'white',
    fontFamily: 'Vazirmatn-Regular'
  }
})