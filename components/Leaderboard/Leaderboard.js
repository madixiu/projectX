import React, { Component } from 'react'
import {View, StyleSheet} from 'react-native'
import Divider from './components/Divider'
// import ListComponent from './components/listView/ListComponent'
import ListViewComponent from './components/listView/ListViewComponent'
import axios from 'axios'
export class Leaderboard extends Component {

  constructor(){
    super();
    this.state = { commodityData:[]}
  }
  componentDidMount(){
    console.log("list monted");

    this.getCommodityData()
  }
  getCommodityData(){
    axios.get('http://162.55.15.105:3000/View_Main_Commodities_SecondSource',{
      headers: {
      'accept-profile': 'commodity'
      }
    }).then (response => {
      let data = response.data
      this.setState({commodityData: data})
      console.log(data);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Divider />
        <ListViewComponent />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,  
    alignItems: 'center',
    // justifyContent: 'center',
  },

})
export default Leaderboard