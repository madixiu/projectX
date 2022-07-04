import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import data from '../../../../assets/PortfolioData.json';
import ListDetail from './ListDetail';

const BalanceCalculator = () => {
  let balance = 0;
  for (let item of data) {
    balance += item.price * item.holding;
  }
  return balance;
};
const HoldingDataSorted = (switchHolding) => {
  // console.log(switchHolding);
  let dataChanged = [...data];
  if (switchHolding == 0) return dataChanged;
  else return dataChanged.reverse();
};

const AssetList = () => {
  const [switchSelected, setSwitch] = React.useState(0);
  const [switchHolding, setSwitchHolding] = React.useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <View style={{}}>
          <Text style={{ fontSize: 15,fontWeight:'bold' }}>Your Assets</Text>
        </View>
        <View style={styles.switchView}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: switchSelected == 0 ? '#fff' : 'rgba(0,0,0,0)',
              },
              styles.switchItem,
            ]}
            onPress={() => setSwitch(0)}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>$</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: switchSelected == 1 ? '#fff' : 'rgba(0,0,0,0)',
              },
              styles.switchItem,
            ]}
            onPress={() => setSwitch(1)}>
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>%</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderBottomColor: '#d1e3ea',
          borderBottomWidth: 1,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}>
        <View style={{ flex: 2, alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 12 }}>Asset</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={{ fontSize: 12 }}>Price</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <TouchableOpacity
            style={{ flexDirection: 'row' }}
            onPress={() =>
              switchHolding == 0 ? setSwitchHolding(1) : setSwitchHolding(0)
            }>
            <Text style={{ fontSize: 12, marginRight: 4 }}>Holdings</Text>
            <FontAwesome5
              name={switchHolding == 0 ? 'caret-down' : 'caret-up'}
              size={16}
              color="#222"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          data={HoldingDataSorted(switchHolding)}
          renderItem={({ item }) => {
            // return <Text>{item.name}</Text>
            return (
              <ListDetail
                name={item.name}
                symbol={item.symbol}
                price={item.price}
                change={item.change}
                holding={item.holding}
                logo={item.logo}
                balance={BalanceCalculator()}
                filterSwitch={switchSelected}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1
    // backgroundColor: 'gainsboro', // temporary
    // paddingHorizontal:10
  },
  switchView: {
    // flex:1,
    // flexWrap:'wrap',
    backgroundColor: '#d1e3ea',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
  switchItem: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 3,
    borderRadius: 20,
  },
});

export default AssetList;
