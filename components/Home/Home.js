import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import SearchSection from './components/SearchSection'
import AssetSection from './components/AssetSection'
import SelectionSection from './components/SelectionSection'
import SelectionSection2 from './components/SelectionSection2'
import SelectionSection3 from './components/SelectionSection3'
import BestList from './components/BestList/BestList'
import { colors } from '../../misc/colors'
import TopBar from '../TopBar/TopBar'



export class Home extends Component {
  
  constructor(){
    super();
  }
  // componentDidMount(){
  // }
  render() {
    return (

      <View style={{flex:1}}>
        <TopBar />
        <ScrollView style={[styles.container]}>
          <View>
            <SearchSection />
          </View>
          {/* <View style={styles.AssetSection}>
            <AssetSection />
          </View> */}
          {/* <View style={styles.SelectionSection}>
            <SelectionSection />
          </View> */}
          {/* <View style={styles.SelectionSection}>
            <SelectionSection2 />
          </View> */}
          <View style={styles.SelectionSection}>
            <SelectionSection3 />
          </View>
          <View style={styles.BestListDivider}>
            <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 12,color: colors.Keppel}}>مشهاده همه</Text>
            <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 16,color: colors.OxfordBlue}}>برترین ها</Text>
          </View>
          <View>
            <BestList />
          </View>
          {/* <View style={styles.BestListDivider}>
            <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 12,color: colors.Keppel}}>مشهاده همه</Text>
            <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 16,color: colors.OxfordBlue}}>برترین ها</Text>
          </View>
          <View>
            <BestList />
          </View> */}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop:30,
    // marginTop:30,
    // backgroundColor:'black'
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
  darkContainer: {
    backgroundColor: '#242c40',
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
    // padding:20
    paddingLeft:20,
    paddingRight: 20,
    paddingTop:20 
  }
})
export default Home