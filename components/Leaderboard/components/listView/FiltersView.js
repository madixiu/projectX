import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';


export default function FiltersView() {
  const [visibleModal,setVisibleModal]=React.useState(false);
  const [modalMode,setModalMode] = React.useState(0)
  return (
    <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>

      <View style={styles.container}>
        <TouchableOpacity style={styles.filterView} onPress={() => {setVisibleModal(true) ,setModalMode(0)}}>
          <Text style={styles.filterText}>بازدهی</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterView} onPress={() => {setVisibleModal(true) ,setModalMode(1)}}>
          <Text style={styles.filterText}>هفتگی</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterView} onPress={() => {setVisibleModal(true) ,setModalMode(2)}}>
          <Text style={styles.filterText}>همه دارایی ها</Text>
        </TouchableOpacity>
      </View>

      <Modal
          onBackdropPress={()=> setVisibleModal(false)}
          onBackButtonPress={()=> setVisibleModal(false)}
          isVisible={visibleModal}
          style={{justifyContent: 'flex-end',margin: 0, }}>
          <ModalView modal={modalMode} setVisibleModal={setVisibleModal}/>
      </Modal>
    </View>
  )
}

function ModalView({modal,setVisibleModal}) {
  if(modal == 0)
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalText}>بازدهی</Text>
      </View>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>هفتگی</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>ماهانه</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>سالانه</Text>
      </TouchableOpacity>

    </View>
  )
  if(modal == 1)
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalText}>بازه</Text>
      </View>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>هفتگی</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>ماهانه</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>سالانه</Text>
      </TouchableOpacity>
    </View>
  )
  if(modal == 2)
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalHeader}>
        <Text style={styles.modalText}>نوع دارایی</Text>
      </View>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>همه</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>ETF</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>صندوق درآمد ثابت</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>سهام</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>ارز دیجیتال</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.modalContent}>
        <Text style={styles.modalText}>ملک</Text>
      </TouchableOpacity>
    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    // backgroundColor:'cyan',
    width: '80%',
    flexDirection:'row',
    paddingVertical:10,
    // justifyContent:'space-around'
  },
  filterView: {
    flex:1,
    backgroundColor: 'gainsboro',
    marginHorizontal:15,
    borderRadius:5,
    paddingVertical:5,
    alignItems:'center'
  },
  filterText: {
    fontSize:10,
    fontFamily:'Vazirmatn-SemiBold',
    // fontWeight:'bold',
  },

  //? Modal Section ********
  modalContainer: {
    width:'100%',
    // height:100,
    backgroundColor: 'white',
    // padding: 22,
    justifyContent: 'center',
   
  },
  modalHeader: {
    paddingVertical:20,
    paddingHorizontal:20,
    justifyContent:'center',
    width:'100%',
    backgroundColor:'gainsboro'
  },
  modalContent:{
    paddingVertical:20,
    paddingHorizontal:20,
    alignItems: 'flex-end',
    borderBottomColor:'gainsboro',
    borderBottomWidth:1
  },
  modalText: {
    fontFamily:'Vazirmatn-Regular',
    fontSize:13
  }
})