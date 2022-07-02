import { Text, View,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../../misc/colors';


const SelectionSection3 =() => {
  return (
    <View style={styles.container}>
      <View>

        <TouchableOpacity style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>ارز</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>املاک</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>رمز ارز</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </TouchableOpacity>
 
      </View>
      
      {/*//? second Row */}
      <View>
        <TouchableOpacity style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>صندوق</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </TouchableOpacity>

        <TouchableOpacity style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>صندوق</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </TouchableOpacity>
      
        <TouchableOpacity style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>طلا</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </TouchableOpacity>
      </View>
         
   
   
     

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center', 
    paddingVertical:10,
    paddingHorizontal:10,
    // backgroundColor:'black'
  },
  // insideContainer: {
  //   // paddingHorizontal:15
  //   // flex:1,
  //   // backgroundColor:'red'
  // },
  SelectionViewIcon: {
    flexDirection:'row',
    alignItems:'center',

    
  },
  SelectionViewText: {
  
    fontSize:14,
    fontFamily: 'Vazirmatn-Regular',
    // marginTop: 5
    paddingHorizontal:5,
  },
  SelectionView: {
    flex:1,
    width:'100%',
    alignItems: 'flex-end', 
    paddingVertical:5,
    backgroundColor: 'gainsboro',
    borderStyle:'solid',
    borderColor:'gainsboro',
    elevation:4,
    borderWidth:2,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal:15,
    marginVertical:5,
    // justifyContent:'flex-end'

    // backgroundColor:'red',

  }
})

export default SelectionSection3;