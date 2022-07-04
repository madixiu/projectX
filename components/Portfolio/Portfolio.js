import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
// import Constants from 'expo-constants';
import TabViewExample from './components/TabView'
// You can import from local files
import AssetView from './components/AssetView.js/AssetView'
import AssetList from './components/AssetList/AssetList'
// or any pure javascript modules available in npm
 class Portfolio extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AssetView />
        <TabViewExample />
        <AssetList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})
export default Portfolio