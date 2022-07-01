import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'

export default function FiltersView() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterView}>
        <Text style={styles.filterText}>بازدهی</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.filterView}>
        <Text style={styles.filterText}>هفتگی</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.filterView}>
        <Text style={styles.filterText}>همه دارایی ها</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'cyan',
    width: '80%',
    flexDirection:'row',
    paddingVertical:10,
    // justifyContent:'space-around'
  },
  filterView: {
    flex:1,
    backgroundColor: 'gainsboro',
    marginHorizontal:15,
    borderRadius:5,
    paddingVertical:3,
    alignItems:'center'
  },
  filterText: {
    fontSize:10,
    fontFamily:'Vazirmatn-Regular'
  }
})