import React from 'react'
import { View,Text,StyleSheet,Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const Statistics = () => {

return(
     <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'gainsboro',paddingHorizontal:10,paddingVertical:15,borderRadius:5}}>
        <View>
          <Text style={styles.textFD}>- 33.20</Text>
          <View style={{flexDirection:'row',alignItems:'center'}}>
             <Entypo name="triangle-down" size={16} color="#ff006b" />
             <Text style={[{fontSize:11,color:'#ff006b'},styles.textFD]}>24.04%</Text>
          </View>
        </View>
        <Text style={{color:'#5a647a',fontFamily:'Vazirmatn-Regular'}}>مجموع سود/زیان</Text>
      </View>
      <View style={{flexDirection:'row',marginTop:6}}>
      
   
        <View style={{flex:1,backgroundColor:'gainsboro',marginRight:3,borderRadius:5,paddingTop:20}}>
          <View style={{flexDirection:'row',alignItems:'center',paddingBottom:20,paddingRight:10,justifyContent:'flex-end'}}>
            <Text style={{marginRight:5,fontSize:13,fontWeight:"bold"}}>Harmony</Text>
            <Image source={{uri :"https://s2.coinmarketcap.com/static/img/coins/32x32/3945.png" }} style={                                        {height:30,width:30}} />
          </View>
          <View style={{paddingRight:10,paddingBottom:15,alignItems:'flex-end'}}>
            <Text style={[{fontSize:12,color:'#5f6375'},styles.text]}>بدترین عملکرد</Text>
            <Text style={[{fontSize:12,color:'#333',marginTop:5},styles.textFD]}>- 18.05</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
              <Entypo name="triangle-down" size={16} color="#ff006b" />
              <Text style={[{fontSize:12,color:'#ff006b'},styles.textFD]}>90.34%</Text>
            </View>
          </View>
        </View>

        <View style={{flex:1,backgroundColor:'gainsboro',marginLeft:3,borderRadius:5,paddingTop:20}}>
          <View style={{flexDirection:'row',alignItems:'center',paddingBottom:20,paddingRight:10,justifyContent:'flex-end'}}>
            <Text style={{marginRight:5,fontSize:13,fontWeight:"bold"}}>The Sandbox</Text>
            <Image source={{uri :"https://s2.coinmarketcap.com/static/img/coins/32x32/6210.png" }} style={{height:30,width:30}} />
          </View>
          <View style={{paddingRight:10,paddingBottom:15,alignItems:'flex-end'}}>
            <Text style={[{fontSize:12,color:'#5f6375'},styles.text]}>بهترین عملکرد</Text>
            <Text style={[{fontSize:12,color:'#333',marginTop:5},styles.textFD]}>+ 2.975</Text>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
              <Entypo name="triangle-up" size={16} color="#00e3a5" />
              <Text style={[{fontSize:12,color:'#00e3a5'},styles.textFD]}>9.04%</Text>

            </View>

          </View>
        </View>
      </View>
   </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height:"40%",
    borderRadius:5
  },
  text: {
    fontFamily:'Vazirmatn-Regular'
  },
  textFD:{
    fontFamily:'Vazir-Medium-FD'

  }
});

export default Statistics;