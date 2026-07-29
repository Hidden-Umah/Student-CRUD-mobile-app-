import { View, Text, Image, useWindowDimensions } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import studentImage from "../assets/images/student.jpeg"

export default function SideBar() {

  

  const { width, height } = useWindowDimensions()
  const SIDEBAR_WIDTH = width * 0.22
  const ICON_SIZE = SIDEBAR_WIDTH * 0.8
  const insets = useSafeAreaInsets()

  return (
    <View style={{
      width: SIDEBAR_WIDTH,
      height: height,
      backgroundColor: "#09090f",
      paddingTop: 30,
      alignItems: "center",
      gap: 20,
      position: "relative"
    }}>
      <View style={{ width: ICON_SIZE, height: ICON_SIZE, backgroundColor: "#d2f17bff", borderRadius: 22, alignItems: "center", justifyContent: "center" }}>
        <AntDesign name="user-add" size={26} color="#09090f" />
      </View>
      <View style={{ width: ICON_SIZE, height: ICON_SIZE, backgroundColor: "#7bb8f1ff", borderRadius: 22, alignItems: "center", justifyContent: "center" }}>
        <Ionicons name="people-outline" size={26} color="#09090f" />
      </View>
      <View style={{ width: ICON_SIZE, height: ICON_SIZE, backgroundColor: "#f8b02bff", borderRadius: 22, alignItems: "center", justifyContent: "center" }}>
        <Feather name="edit-2" size={26} color="white" />
      </View>
      <View style={{ width: ICON_SIZE, height: ICON_SIZE, backgroundColor: "#eb4343ff", borderRadius: 22, alignItems: "center", justifyContent: "center" }}>
        <MaterialCommunityIcons name="delete-outline" size={30} color="white" />
      </View>

      
      <View style={{
        position: "absolute",
        height: 70,
        width: width * 0.85,
        backgroundColor: "#424242ff",
        bottom: insets.bottom +40 ,
        left: SIDEBAR_WIDTH * 0.3,
        zIndex: 5,
        borderRadius: 40,
        flexDirection: "row"
      }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={studentImage}
            style={{ width: 80, height: 80, borderRadius: 40, marginRight: 5, marginLeft: -5 }}
          />
          <View style={{ alignItems: "flex-start", justifyContent: "center", gap: 6 }}>
            <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: "800", color: "white" }}>Student CRUD APP</Text>
            <Text style={{ marginLeft: 10, color: "#9b9b9bff", fontSize: 12 }}>Offline student records manager app</Text>
          </View>
        </View>
      </View>
    </View>
  )
}