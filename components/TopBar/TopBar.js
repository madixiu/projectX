import { View,Image, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import BuySellButton from './BuySellButton'
import AssetBalance from './AssetBalance'

// const height = PixelRatio.getPixelSizeForLayoutSize(30)
const logoSize = Math.round(Dimensions.get('screen').height * 0.06)
export default function TopBar() {
  return (
    <View style={styles.container}>
      <View style={styles.ViewLogo}>
        <Image source={require('../../assets/WhaleLogo.png')} 
          style={styles.logo}
        />

      </View>
   
      {/* <Text>{height}</Text> */}
      <View style={styles.AssetBalanceView}>
        {/* <Text>{logoSize}</Text> */}
        <AssetBalance />

      </View>
      <View style={styles.BuySellButtonView}>

        <BuySellButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex:1,
    flexDirection: 'row',
    backgroundColor:"#dcdcdc",
    alignItems:'center',
    // justifyContent:'space-between',
    width: '100%',
    height:'8%',
    // height:64,

    elevation: 10
  },
  logo: {
    width: logoSize,
     height: logoSize,
    //  padding:50
  },
  ViewLogo: {
    flex:1,
    padding:2,
    marginLeft:4
  },
  AssetBalanceView:{
    flex:2,
    alignItems:'center',
    paddingVertical:5
  },
  BuySellButtonView: {
    flex:1,
    alignItems:'flex-end'
  }
})