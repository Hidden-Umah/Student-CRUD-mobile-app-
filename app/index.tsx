import { View } from "react-native"
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
            width: 500,
            height: 900,
            backgroundColor: "#212226",
            borderTopLeftRadius: 40,
          }}
        >
        </View>
      </View>
    </View>
  )
}