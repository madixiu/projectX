import React, { Component } from 'react'
import {View, StyleSheet,FlatList} from 'react-native'
import TopBar from '../TopBar/TopBar'
import FiltersView from './components/listView/FiltersView'
// import Divider from './components/Divider'
// import ListComponent from './components/listView/ListComponent'
import Item from './components/listView/Item'
import axios from 'axios'
export class Leaderboard extends Component {

  constructor(){
    super();
    this.state = { commodityData:[]}
  }
  componentDidMount(){
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
      // console.log(data);
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <TopBar />
        <FiltersView />
        {/* <Divider /> */}
        <View style={styles.listView}>
          <FlatList
            data = {this.state.commodityData}
            renderItem={({item}) => {
              return <Item name={item.item} change={item.return} />
            }}
          ></FlatList>
        </View>
        {/* <Item /> */}
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
  listView: {
    flex:1,
    width:"100%"
  }

})
export default Leaderboard