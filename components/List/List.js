import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>List</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {

    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default List