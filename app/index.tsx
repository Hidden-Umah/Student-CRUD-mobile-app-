import { View, Text, TouchableOpacity, useWindowDimensions , Image} from "react-native"
import SideBar from "@/components/sidebar"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useEffect, useState, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import students from "../assets/images/students.png"
import { Animated , Easing} from "react-native";
import { RelativePathString, useRouter } from "expo-router";

import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';






export default function Home() {


  const { width, height } = useWindowDimensions()
  const [showSidebar, setShowSidebar] = useState(true);
  const insets = useSafeAreaInsets()
  const SIDEBAR_WIDTH = width * 0.22
  const ICON_SIZE = SIDEBAR_WIDTH * 0.8
  const router = useRouter()


  const sidebarItems = [
    { id: 1, icon: <AntDesign name="user-add" size={26} color="#09090f" />, backgroundColor: "#d2f17bff" , route : "/create" as RelativePathString },
    { id: 2, icon: <Ionicons name="people-outline" size={26} color="#09090f" />, backgroundColor: "#7bb8f1ff" , route :"/read" as RelativePathString },
    { id: 3, icon: <Feather name="edit-2" size={26} color="white" />, backgroundColor: "#f8b02bff" , route :"/update" as RelativePathString },
    { id: 4, icon: <MaterialCommunityIcons name="delete-outline" size={30} color="white" />, backgroundColor: "#eb4343ff" , route :"/delete" as RelativePathString},
  ]

  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(()=>{
    slideAnim.setValue(300)
    Animated.timing(slideAnim , {
      toValue: 0 ,
      duration : 600 ,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true
    }).start()
  } , [showSidebar])

  function handleSidebar() {
    setShowSidebar(!showSidebar)
  }

  return (
    <View style={{
      paddingTop: 50,
      backgroundColor: "#09090f",
      flexDirection: "row",
      flex: 1,
      height: height
    }}>
      {showSidebar && <SideBar />}
      <View style={{ flex: 1 }}>
        <View style={{
          height: showSidebar ? (height * 0.955) - insets.bottom - insets.top : height*1 ,
          backgroundColor: "#212226",
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 10,
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 30,
          borderTopRightRadius : showSidebar ? 0 : 40 
        }}>

          <View style={{
            width: width * 0.6,
            height: 40,
            borderRadius: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            marginBottom: 20
          }}>

            <View style={{
              width: width * 0.4,
              height: 40,
              backgroundColor: "#09090f",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center"
            }}> 
              <Text style={{ color: "white", fontSize: 15, fontWeight: "800" }}>Welcome</Text>
            </View>


            <TouchableOpacity onPress={handleSidebar}>
              <View>
                {showSidebar
                  ? <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
                  : <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
                }
              </View>
            </TouchableOpacity>

          </View>

          <Image source={students}
           style={{ width: showSidebar? width*0.7 : width*0.9  , height : 400 ,  borderRadius: 20 }}>

          </Image>

          <Animated.View style={{ transform: [{ translateY : slideAnim}] , display: "flex" , alignItems : "center" , padding: 20}} >
            <Text style={{ marginTop : 20 , fontSize: 20 , fontWeight: 900 , color: 'white'}}>Student CRUD App</Text>
            <Text style={{ marginTop : 10 , fontSize: 14, fontWeight: 400 , color: '#858585ff'}}>A mobile app to manage student records offline; add, view, edit and delete students with their photo, details and course info, all stored directly on your device.</Text>

            {
              !showSidebar && 
              <View style={{ height: 70 , width: width*0.9 , marginTop: 20 , display: 'flex' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'space-evenly'}}>
                {sidebarItems.map((item ,index) => (
                  <TouchableOpacity
                   key={index} 
                   onPress={()=> router.push(item.route)}
                   style={{ width: ICON_SIZE, height: ICON_SIZE, backgroundColor: item.backgroundColor, borderRadius: 22, alignItems: "center", justifyContent: "center" }}>
                    {item.icon}
                  </TouchableOpacity>
                ))}
              </View>
            }
          </Animated.View>


        </View>
      </View>
    </View>
  )
}