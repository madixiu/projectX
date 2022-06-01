import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../../../misc/colors';
export default class ListDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>ListDetail</Text> */}
        <View style={styles.ItemTopSection}>
          <View>
            <Text style={{fontFamily:'Vazir-Medium-FD',color: colors.OxfordBlue}}>رتبه ۱</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <MaterialCommunityIcons name="chevron-double-up" size={16} color={colors.Keppel} />
              <Text style={{fontFamily:'Vazir-Medium-FD',color: colors.Keppel}}>12</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{paddingRight:5}}>
                <Text style={{fontFamily:'Vazirmatn-Regular',color: colors.OxfordBlue}}>رمز ارز</Text>
                <Text style={{fontFamily:'Vazir-Medium-FD',color: colors.Keppel}}>+9.3%</Text>
              </View>
              <MaterialCommunityIcons name="bitcoin" size={24} color="black" />
            </View>
          </View>


        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'gainsboro',
    borderStyle:'solid',
    borderWidth:0.5,
    borderRadius: 8,
  },
  ItemTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  }
 });