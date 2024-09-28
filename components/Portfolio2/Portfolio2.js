import {  View } from 'react-native'
import React, { Component } from 'react'
import AssetView from '../Portfolio/components/AssetView.js/AssetView'
import AssetList from './components/AssetList'
import BuyandSellButton from './components/BuyandSellButton'

export default class Portfolio2 extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <AssetView />
        <AssetList />
        <BuyandSellButton />
      </View>
    )
  }
}

