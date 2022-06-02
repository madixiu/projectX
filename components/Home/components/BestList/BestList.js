import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import ListDetail from './components/ListDetail';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
export class BestList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          inverted={true}
          // contentContainerStyle={{ padding: 10 }}
          keyExtractor={item => item.id}
          renderItem={(item) => {
            return <ListDetail />
          }} />
        {/* <ListDetail /> */}
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   flexDirection:'row',
   padding: 10,
   justifyContent: 'flex-start'
 }
 
});
export default BestList