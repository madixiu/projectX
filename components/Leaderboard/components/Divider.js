import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../misc/colors'

const Divider = () => {
  return (
    <View style={{width:'100%',backgroundColor:'#e0e0e0',marginTop:30}}>

      <View style={styles.container}>
        <View style={styles.ChangeView}>
          <Text style={{fontSize:11,color:colors.BlueMunsell}}>درصد</Text>
        </View>
        <View style={styles.AssetView}>
          <Text style={{fontSize:11,color:colors.BlueMunsell}}>دارایی</Text>
        </View>
      </View>
    </View>
)
}
const styles = StyleSheet.create({
  
  container:{
    flex:1,
    // backgroundColor:'gainsboro',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
 
  },
  AssetView:{
    flexWrap:'wrap',
    justifyContent:'center',
    height:'100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:2,
    paddingBottom:2,
    borderBottomColor: '#aeaeae',
    borderTopColor:'#aeaeae',
    borderStyle:'solid',
    borderTopWidth:1,
    borderBottomWidth:1,
  

  },
  ChangeView:{
    alignItems:'center',
    flexWrap:'wrap',
    justifyContent:'center',
    height:'100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:2,
    paddingBottom:2,
    borderBottomColor: '#aeaeae',
    borderTopColor:'#aeaeae',
    borderStyle:'solid',
    borderTopWidth:1,
    borderBottomWidth:1,

  }
 
});
  export default Divider