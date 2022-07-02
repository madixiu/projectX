import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const BottomModal = (props) => {
  const [visibleModal,setVisibleModal]=useState(props.modal);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterView} onPress={()=> setVisibleModal(true)}>
        <Text>All Coins</Text>
      </TouchableOpacity>
      <Modal
          onBackdropPress={()=> setVisibleModal(false)}
          onBackButtonPress={()=> setVisibleModal(false)}
          isVisible={visibleModal}
          style={styles.modal}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text>Header</Text>
              </View>
              <TouchableOpacity>
                <Text>Top 100</Text>
              </TouchableOpacity>
            <TouchableOpacity onPress={() => setVisibleModal(false)}>
                <View style={styles.filterView}>
                  <Text>Close</Text>
                </View>
              </TouchableOpacity>
            </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  filterView: {
    // borderWidth:1,
    backgroundColor: 'gainsboro',
    borderRadius:15,
    padding:5,

  },
  modalContent: {
    width:'100%',
    height:100,
    backgroundColor: 'white',
    // padding: 22,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0, 
  },
  modalHeader: {
    flex:1,
    paddingLeft:5,
    height:90,
    justifyContent:'center',
    // flexDirection:'row',
    width:'100%',
    backgroundColor:'#222'
  }

 
});

export default BottomModal;