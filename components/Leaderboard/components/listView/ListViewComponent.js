import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const ListViewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{marginRight:10}}>section</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'pink',
    width:'100%',
    
    alignItems:'flex-end',
    marginTop:10,
  }
})
export default ListViewComponent