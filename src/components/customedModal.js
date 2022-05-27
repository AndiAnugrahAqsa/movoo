import React, { useState, useRef } from "react";
import { View, Pressable, StyleSheet, Modal, Dimensions } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Index = ({ isShowModal, toggle, children }) => {
  const defaultModalHeight = Dimensions.get("window").height-120;
  const [modalHeight, setModalHeight] = useState(defaultModalHeight);


  const handleTouchMove = e => {
    const pageY = e.nativeEvent.pageY;
    setModalHeight(defaultModalHeight - pageY + 80);
  }

  const handleTouchEnd = e => {
    const pageY = e.nativeEvent.pageY;
    defaultModalHeight - pageY < 300 ? closeModal() : setModalHeight(defaultModalHeight)
  }

  const closeModal = () => {
    toggle();
    setModalHeight(defaultModalHeight);
  }

  return (
    <View
      style={styles.centeredView}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={isShowModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { height: modalHeight }]}>
            <View style={styles.modalHeader} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <View />
              <View style={styles.modalMinimize} />
              <Pressable
                style={{ position: "absolute", right: 10, top: 4 }}
                onPress={() => toggle()}
              >
                <MaterialIcons name="close" size={27} />
              </Pressable>
            </View>
            <View>
              {children}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}


const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    position: "relative",
    height: "100%",
  },
  modalView: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    position: "absolute",
    bottom: 80,
  },
  modalHeader: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: "#aea9ba"
  },
  modalMinimize: {
    height: 10,
    width: 60,
    backgroundColor: "#0000003f",
    borderRadius: 5,
  },
});


export default Index;