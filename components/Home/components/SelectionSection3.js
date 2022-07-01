import { Text, View,StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../../misc/colors';


const SelectionSection3 =() => {
  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>

        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>ارز</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </View>
        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>املاک</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </View>

        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>رمز ارز</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </View>
 
      </View>
      
      {/*//? second Row */}
      <View style={styles.insideContainer}>
        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>صندوق</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </View>

        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>صندوق</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </View>
      
        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <Text style={styles.SelectionViewText}>طلا</Text>
            <MaterialCommunityIcons name="bitcoin" color={colors.OxfordBlue} size={24} />
          </View>

        </View>
      </View>
         
   
   
     

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center', 
    paddingVertical:10
  },
  culomnContainer: {
    // flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  SelectionViewIcon: {
    flexDirection:'row',
    alignItems:'center',
    backgroundColor: 'gainsboro',
    borderStyle:'solid',
    borderColor:'gainsboro',
    elevation:10,
    borderWidth:2,
    borderRadius: 8,
    padding: 15,
    flex:1,
    width:'100%',
    justifyContent:'flex-end'
  },
  SelectionViewText: {
  
    fontSize:14,
    fontFamily: 'Vazirmatn-Regular',
    // marginTop: 5
    paddingHorizontal:5,
  },
  SelectionView: {
  
    alignItems: 'center', 
    paddingVertical:5

  }
})

export default SelectionSection3;