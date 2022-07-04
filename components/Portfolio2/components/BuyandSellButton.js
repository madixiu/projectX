import React from 'react'
import { View, Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'
import Modal from 'react-native-modal';
import Slider from '@react-native-community/slider';
import seperator from '../../../misc/numberSeperator'
export default function BuyandSellButton() {
  const totalBalance = 128255300
  // const [orderMode,setOrderMode] = React.useState("buy");
  const [visibleModal,setVisibleModal]=React.useState(false);
  const [sliderValue,setSliderValue] = React.useState(20);
  const  SliderWidth = Dimensions.get('window').width * 0.6

  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',width:'100%',justifyContent: 'center',}}>
        <TouchableOpacity style={[{backgroundColor:'#ff1075',marginLeft:"20%",borderTopStartRadius:15,borderBottomStartRadius:15},styles.buttonCell]}
          onPress={()=> setVisibleModal(true)}
        >
          <Text style={styles.text}>فروش</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[{backgroundColor:'green',marginRight:"20%",borderBottomEndRadius:15,borderTopEndRadius:15},styles.buttonCell]}
          onPress={()=> setVisibleModal(true)}
        >
          <Text style={styles.text}>خرید</Text>
        </TouchableOpacity>
      </View>
      <Modal 
        onBackdropPress={()=> setVisibleModal(false)}
        onBackButtonPress={()=> setVisibleModal(false)}
        isVisible={visibleModal}>
        
        <View style={styles.modalContainer}>
          <View style={{width:'100%',flexDirection:'row',borderTopRightRadius:15,borderTopLeftRadius:15}}>
            <View style={[styles.modalTabs,{borderRightColor:'#eee',borderRightWidth:1,backgroundColor:'red',borderTopLeftRadius:15}]}>
              <Text style={styles.text}>فروش</Text>
            </View>
            <View style={[styles.modalTabs,{borderLeftColor:"#eee",borderLeftWidth:1,backgroundColor:'green',borderTopRightRadius:15}]}>
              <Text style={styles.text}>خرید</Text>

            </View>
            
          </View>
          <View style={{paddingVertical:15}}>
            <Text style={{fontFamily:'Vazirmatn-SemiBold'}}>مقدار خرید</Text>
          </View>
          <View style={{paddingVertical:15}}>
          <Slider
              style={{width: SliderWidth, height: 40}}
              value={sliderValue}
              onValueChange={(val)=> setSliderValue(val.toFixed(2))}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#000000"
            />
          </View>
          <View style={{paddingVertical:5,flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
            <Text style={{fontFamily:'Vazirmatn-SemiBold'}}>وجه نقد</Text>
            <Text style={{marginHorizontal:3,fontFamily:'Vazir-Medium-FD'}}>%{sliderValue}</Text>
            <Text style={{fontFamily:'Vazirmatn-SemiBold'}}>خرید بیتکوین به میزان</Text>

          </View>
          <View style={{flexDirection:'row',paddingVertical:5,justifyContent: 'center',alignItems: 'center',}}>
            <Text style={{fontFamily:'Vazirmatn-SemiBold'}}>تومان</Text>
            <Text style={{marginHorizontal:3,fontFamily:'Vazir-Medium-FD'}}>{orederCalc(totalBalance,sliderValue)}</Text>
            <Text style={{fontFamily:'Vazirmatn-SemiBold'}}>معادل</Text>

          </View>
          <TouchableOpacity style={{marginVertical:20,paddingHorizontal:50,paddingVertical:5,backgroundColor:'gainsboro',borderRadius:5}}
            onPress={() => setVisibleModal(false)}
          >
            <Text style={{fontFamily:'Vazirmatn-SemiBold'}}>تایید</Text>
          </TouchableOpacity>

        </View>

      </Modal>
    </View>
  )
}


const orederCalc = (totalBalance,sliderValue) => {
  return seperator((totalBalance*(sliderValue/100)).toFixed(0))
}
const styles = StyleSheet.create({
  container: {
    // flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor:'red',
    marginBottom:15,
    // marginTop:"70%"
  },
  buttonCell: {
    flex:1,
    alignItems: 'center',
    paddingVertical:12,
  },
  text: {
    fontFamily:'Vazirmatn-SemiBold',
    color:'white'
  },
  modalContainer: {
    width:'100%',
    alignItems: 'center',
    // height:100,
    backgroundColor: 'white',
    borderRadius:15,
    // padding: 22,
    justifyContent: 'center',
   
  },
  modalTabs: {
    flex:1,
    alignItems: 'center',
    paddingVertical:15
  }
})