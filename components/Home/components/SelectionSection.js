import { Text, View,StyleSheet } from 'react-native'
import React, { Component } from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { colors } from '../../../misc/colors';

export default class SelectionSection extends Component {
  render() {
    return (
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

        <View style={styles.SelectionView}>
          <View style={styles.SelectionViewIcon}>
            <FontAwesome5 name="money-check-alt" color={colors.OxfordBlue} size={14} />
          </View>
          <Text style={styles.SelectionViewText}>سهام</Text>

        </View>

        {/* <Text>SelectionSection</Text> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center', 
    // justifyContent: 'center',
    alignItems:'center',
    // paddingRight: 10,
    paddingBottom: 10,
    paddingTop:10, 
    // paddingRight:10,
    // paddingLeft:10,
    borderColor: 'gainsboro',
    borderStyle:'solid',
    borderWidth:0.5,
    borderRadius: 8,

    // alignItems: 'center',
    // justifyContent: 'center',
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
  
    // borderColor: 'gainsboro',
    // borderStyle:'solid',
    // borderWidth:0.5,
    // borderRadius: 12,
    // padding: 15,
    // backgroundColor: '#f6f7f8'
  }
})