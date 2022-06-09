import React, { Component } from 'react'
import { Text, View, StyleSheet,ScrollView } from 'react-native'
import AssetSection from './components/AssetSection'
import SelectionSection from './components/SelectionSection'
import BestList from './components/BestList/BestList'
import { colors } from '../../misc/colors'
import { switchRoute } from '../../redux/routeSlice'
import { useSelector, useDispatch } from 'react-redux'; 
import TopBar from '../TopBar/TopBar'




// const dispatch = useDispatch();
export class Home extends Component {
  
  constructor(){
    super();
  }
  componentDidMount(){
    console.log("home monted");
    console.log(this.props.route);

  }
  render() {
    return (

      <View style={{flex:1}}>
        <TopBar />
        <ScrollView style={[styles.container]}>
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
          <View style={styles.BestListDivider}>
            <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 12,color: colors.Keppel}}>مشهاده همه</Text>
            <Text style={{fontFamily:'Vazirmatn-Regular',fontSize: 16,color: colors.OxfordBlue}}>برترین ها</Text>
          </View>
          <View>
            <BestList />
          </View>
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