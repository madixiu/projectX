import { Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import AssetSection from './components/AssetSection'
import SelectionSection from './components/SelectionSection'
import BestList from './components/BestList/BestList'
import { colors } from '../../misc/colors'
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
        <View style={styles.BestListDivider}>
          <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 12,color: colors.Keppel}}>مشهاده همه</Text>
          <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 16,color: colors.OxfordBlue}}>برترین ها</Text>
        </View>
        <View>
          <BestList />
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
  },
  BestListDivider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:20
  }
})
export default Home