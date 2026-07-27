import { View, Text } from "react-native"
import SideBar from "@/components/sidebar"


export default function Home() {
  return (
    <View
      style={{
        paddingTop: 50,
        backgroundColor: "#09090f",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <SideBar />
      <View>
        <View
          style={{
            width: 270,
            height: 700,
            backgroundColor: "#212226",
            borderTopLeftRadius: 40,
            borderBottomLeftRadius: 10,
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            paddingTop: 30
          }}
        >
            <View style={{ width: 200 , height : 40 , backgroundColor:"#09090f" , borderRadius: 20 ,display: "flex" , alignItems:"center"  , justifyContent:"center"}}>
                <Text style={{ color:"white" , fontSize: 15 , fontWeight:800}}>Welcome</Text>
            </View>

        </View>
      </View>
    </View>
  )
}