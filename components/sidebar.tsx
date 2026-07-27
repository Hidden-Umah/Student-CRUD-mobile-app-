import { View, Text, Image } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import studentImage from "../assets/images/student.jpeg"

export default function SideBar() {
  return (
    <View
      style={{
        width: 90,
        height: 900,
        backgroundColor: "#09090f",
        paddingTop: 30,
        display:"flex",
        alignItems: "center",
        gap: 20,
        position: "relative"
      }}
    >
        <View style={{ width: 70 , height:70 , backgroundColor: "#d2f17bff" , borderRadius: 22, display: "flex" , alignItems:"center" ,justifyContent:"center"}}><AntDesign name="user-add" size={26} color="#09090f" /></View>
        <View style={{ width: 70 , height:70 , backgroundColor: "#7bb8f1ff" , borderRadius: 22, display: "flex" , alignItems:"center" ,justifyContent:"center"}}><Ionicons name="people-outline" size={26} color="#09090f" /></View>
        <View style={{ width: 70 , height:70 , backgroundColor: "#f8b02bff" , borderRadius: 22, display: "flex" , alignItems:"center" ,justifyContent:"center"}}><Feather name="edit-2" size={26} color="white" /></View>
        <View style={{ width: 70 , height:70 , backgroundColor: "#eb4343ff" , borderRadius: 22, display: "flex" , alignItems:"center" ,justifyContent:"center"}}><MaterialCommunityIcons name="delete-outline" size={30} color="white" /></View>

        <View style={{ position: "absolute" , height: 70 , width: 320 , backgroundColor: "#424242ff" , top : 665 , left:20 , zIndex:5 , borderRadius: 40 , display: "flex" , flexDirection: "row"}}>
            <View style={{ display: "flex" , flexDirection: "row" , alignItems: "center" , justifyContent:"space-between"}}>
                <Image
                 source={studentImage}
                 style={{width:80 , height: 80 ,borderRadius:40, marginRight: 5,  marginLeft: -5}}></Image>
                <View style={{ width: "auto" ,height:70 , display:"flex" , alignItems:"flex-start", justifyContent:"center" , gap:6}}>
                    <Text style={{ fontSize:18 , marginLeft: 10, fontWeight: 800 , color:"white"}}>Student CRUD APP</Text>
                    <Text style={{marginLeft: 10, color:"#9b9b9bff"}}>Offline student records manager app</Text>
                </View>
            </View>
        </View>
    </View>
  )
}