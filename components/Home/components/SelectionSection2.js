import { Text, View,StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../../misc/colors';


const SelectionSection2 =() => {
  return (
    <View>
      <View style={styles.container}>

       <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <FontAwesome5 name="chart-line" color={colors.OxfordBlue} size={16} />
          </View>
          <Text style={styles.SelectionViewText}>بازار بورس</Text>
        </View>

        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <MaterialCommunityIcons name="gold" color={colors.OxfordBlue} size={16} />
          </View>
          <Text style={styles.SelectionViewText}>طلا</Text>

        </View>
        <View style={styles.SelectionView}>

          <View style={styles.SelectionViewIcon}>
            <FontAwesome5 name="city" color={colors.OxfordBlue} size={14} />
          </View>
          <Text style={styles.SelectionViewText}>ملک و مسکن</Text>

        </View>
      </View>

      {/*//? second Row */}
      <View style={styles.container}>
        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <FontAwesome5 name="chart-line" color={colors.OxfordBlue} size={16} />
          </View>
          <Text style={styles.SelectionViewText}>بازار بورس</Text>
        </View>

        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <MaterialCommunityIcons name="gold" color={colors.OxfordBlue} size={16} />
          </View>
          <Text style={styles.SelectionViewText}>طلا</Text>

        </View>
        <View style={styles.SelectionView}>

          <View style={styles.SelectionViewIcon}>
            <FontAwesome5 name="city" color={colors.OxfordBlue} size={14} />
          </View>
          <Text style={styles.SelectionViewText}>ملک و مسکن</Text>

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
  SelectionViewIcon: {
    borderColor: 'gainsboro',
    borderStyle:'solid',
    borderWidth:2,
    borderRadius: 12,
    padding: 15,
    backgroundColor: '#f6f7f8'
  },
  SelectionViewText: {
  
    fontSize:12,
    fontFamily: 'Vazirmatn-Regular',
    marginTop: 5
  },
  SelectionView: {
  
    alignItems: 'center', 
  }
})

export default SelectionSection2;