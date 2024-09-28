import { View, Text,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { FontAwesome5,Entypo } from '@expo/vector-icons';
import data from '../../../assets/PortfolioData2.json'
const AssetList = () => {

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        
        <View style={styles.cellView}>
          <Text style={styles.listHeaderCellText}>بازده دارایی در سبد</Text>
        </View>
        <View style={styles.cellView}>
          <Text style={styles.listHeaderCellText}>بازده هفتگی</Text>
        </View>
        <View style={styles.cellView}>
          <Text style={styles.listHeaderCellText}>درصد از سبد</Text>
        </View>
        <View style={styles.cellView}>
          <Text style={styles.listHeaderCellText}>دارایی</Text>
        </View>
        <View style={styles.cellView}>
          {/* <Text>h5</Text> */}
        </View>


      </View>
      <FlatList
            data = {data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              return <ListDetail asset={item.asset} balancePercent={item.balancePercent}
              weekReturn={item.weekReturn} assetReturn={item.assetReturn}
              />
            }}
          ></FlatList>
    </View>
  )
}


const ListDetail = ({asset,balancePercent,weekReturn,assetReturn}) => {
  return(
    <View style={styles.itemContainer}>
      <View style={styles.cellView}>
        <Change input={assetReturn}/>
      </View>
      <View style={styles.cellView}>
        <Change input={weekReturn}/>
      </View>
      <View style={styles.cellView}>
        <Text style={styles.cellText}>%{balancePercent}</Text>
      </View>
      <View style={styles.cellView}>
        <Text style={styles.cellText}>{asset}</Text>
      </View>
      <View style={[styles.cellView,{alignItems:'center',}]}>
        <FontAwesome5 name={"bitcoin"} size={24} color={"#111"} />
      </View>
    </View>
  )
}

const Change = ({input}) => {
  if(input != null)
  return (
    <View style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',}}>
      <Entypo name={input<0 ? "triangle-down" : "triangle-up"} size={16} color={input<0 ? 'red' : 'green'} />
      <Text style={[styles.cellText,{color: input<0 ? 'red' : 'green'}]}>{input}%</Text>
    </View>
  )
  else return (<View></View>)
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:10,

    // borderBottomColor:'gainsboro'

    // width:'100%'
  },
  listHeader: {
    flexDirection:'row',
    borderBottomColor:'gainsboro',
    borderBottomWidth:1,
    justifyContent:'flex-end',
    paddingHorizontal:5

    // width:'100%'
  },
  listHeaderCellText: {
    fontFamily:'Vazir-Medium-FD',
    fontSize:10
  },
  itemContainer: {
    flexDirection:'row',
    // justifyContent:'space-around', //! temp
    borderBottomColor:'gainsboro',
    borderBottomWidth:1,

    paddingVertical:10,
    paddingHorizontal:5

  },
  cellView: {
    flex:1,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  cellText: {
    fontFamily:'Vazir-Medium-FD',
    fontSize:13
  }
})
export default AssetList