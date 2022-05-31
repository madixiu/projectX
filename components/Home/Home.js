import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AssetSection from './components/AssetSection'
import SelectionSection from './components/SelectionSection'
export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.AssetSection}>
          <AssetSection />
        </View>
        <View style={styles.SelectionSection}>
          <SelectionSection />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  AssetSection: {
    padding: 10,
    alignContent: 'flex-end', 
    justifyContent: 'flex-end'
  },
  SelectionSection: {
    padding: 10,
    
    alignContent: 'center', 
    justifyContent: 'center'
    
  }
})
export default Home