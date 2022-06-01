import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import ListDetail from './components/ListDetail';
export class BestList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListDetail />
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   padding: 10,
 }
 
});
export default BestList