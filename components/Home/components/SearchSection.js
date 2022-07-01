import { View, TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';


// const changeSearchBoxBorder = () => {

// }
const SearchSection = () => {
  const [text, onChangeText] = React.useState("");
  const [SearchBoxBorderColor,changeSearchBoxBorderColor] = React.useState('gainsboro')
  return (
    <View style={styles.searchBoxView}>
      <Entypo name="magnifying-glass" size={24} color="black" />
      <TextInput 
        style={[styles.input]}
        value={text}
        onChangeText={onChangeText}
       
        placeholder="...جستجو"
        />

     
    </View>
  )
}

const styles = StyleSheet.create({
  searchBoxView: {
    flexDirection:'row',
    marginHorizontal:15,
    paddingHorizontal:5,
    marginTop:10,
    flex:1,
    // width:'100%',
    alignItems:'center',
    borderWidth:1,
    borderColor:'gainsboro',
    borderRadius:10
  },
  input: {
    height: 40,
    flex:1,
    // margin: 12,
    // borderWidth: 1,
    // borderRadius:5,
    // padding: 10,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    alignContent:'flex-end',
    textAlign:'right'

  }
})

export default SearchSection;