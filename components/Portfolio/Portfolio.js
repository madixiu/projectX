import { Text, View, StyleSheet } from 'react-native'
import React from 'react'

 class Portfolio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Portfolio</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center'
  }
})
export default Portfolio