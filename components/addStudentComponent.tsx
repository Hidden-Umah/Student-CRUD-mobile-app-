import { View , Text  , TextInput , Image, TouchableOpacity, ScrollView } from "react-native"
import * as ImagePicker from "expo-image-picker"
import { useWindowDimensions } from "react-native"
import { useState } from "react"
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Modal } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import BlurView from "expo-blur"

export default function AddStudents() {


  const [image , setImage ] = useState<string | null>(null)
  const { width , height } = useWindowDimensions()
  const [gender, setGender] = useState("")

  const [course, setCourse] = useState("Course")
  const [ visibility , setVisibility ] = useState(false)

  function handleCourseSelection( selectedCourse: string){
    setVisibility(false)
    setCourse(selectedCourse)

  }

  const options = [
    "Computer Science",
    "Information Technology",
    "Software Engineering",
    "Data Science",
    "Cybersecurity",
    "Computer Engineering",
    "Information Systems",
    "Artificial Intelligence",
  ]

  async function pickImage(){
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing:true ,
      aspect:[1,1],
      quality:1
    })

    if(!result.canceled){
      setImage(result.assets[0].uri)
    }
  }

  return (
    
    <View style={{  alignItems:"flex-start" , width: width*0.9 , paddingTop:20 , paddingBottom:20 }}>




      <Text style={{ fontSize: 20 , color: "white" , marginBottom:10, fontWeight:600 , marginLeft:8}}>Student Image</Text>
      <TouchableOpacity
        onPress={pickImage}
        style={{ width: width * 0.9, height: 150, backgroundColor: image ?"#212226" : "#09090f", marginBottom:35,borderRadius: 13, borderWidth: image ? 0 : 2, borderColor: "#444", alignItems: "center", justifyContent: "center" , borderStyle:"dashed"}}
      >
        {image
          ? <Image source={{ uri: image }} style={{ width: width * 0.4, height: width*0.4, borderRadius: width*0.2 }} />
          : <View style={{ width:width*0.7 , height:150 , display:"flex" , alignItems: "center" , justifyContent:"center"}}>
              <Entypo name="upload-to-cloud" size={74} color="#969696ff" />
              <Text style={{ color: "#969696ff", fontSize: 17 }}>Tap to pick an image</Text>
            </View>
        }
      </TouchableOpacity>



      

      <Text style={{ fontSize: 20 , color: "white" , marginBottom:10, fontWeight:600 , marginLeft:8}}>Student Name</Text>
      <TextInput placeholder="eg: Umah Asank" placeholderTextColor="#969696ff" style={{ width: width*0.9 , height : 45 , backgroundColor: "#09090f" , fontSize:17,borderRadius:13 ,borderWidth:2, paddingLeft:15 , fontWeight:600 , color:"white" , borderColor:"#444" , marginBottom:30}}/>

      <Text style={{ fontSize: 20 , color: "white" , marginBottom:10, fontWeight:600 , marginLeft:8}}>Student Email</Text>
      <TextInput placeholder="eg: example@email.com" placeholderTextColor="#969696ff" style={{ width: width*0.9 , height : 45 , backgroundColor: "#09090f" , fontSize:17,borderRadius:13 ,borderWidth:2, paddingLeft:15 , fontWeight:600 , color:"white" , borderColor:"#444", marginBottom:30}}/>

      <Text style={{ fontSize: 20 , color: "white" , marginBottom:10, fontWeight:600 , marginLeft:8}}>Student ID</Text>
      <TextInput placeholder="eg: 22330098" placeholderTextColor="#969696ff" style={{ width: width*0.9 , height : 45 , backgroundColor: "#09090f" , fontSize:17,borderRadius:13 ,borderWidth:2, paddingLeft:15 , fontWeight:600 , color:"white" , borderColor:"#444", marginBottom:30}}/>

      <Text style={{ fontSize: 20 , color: "white" , marginBottom:10, fontWeight:600 , marginLeft:8}}>Student Gender</Text>
      <View style={{ width: width*0.9 , height:35 , display:"flex" ,gap:20,marginLeft:10, flexDirection:"row" , alignItems:"center" ,  marginBottom:30 }}>
        {["Male" , "Female " , "Other"].map((option)=>(
          <TouchableOpacity
            key={option}
            onPress={()=> setGender(option)}
            style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 10 }}
          >
            <View style={{ width:22 , height:22 , borderRadius:11  , borderWidth:2 , borderColor: option ? "#969696ff":"#444",justifyContent:"center" , alignItems:"center" , }}>
              {gender ===option && (
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: "#6949f7ff" }} />
              )}
            </View>
            <Text style={{ color: "white", fontSize: 16 }}>{option}</Text>

          </TouchableOpacity>
        ))}
      </View>



      <Text style={{ fontSize: 20 , color: "white" , marginBottom:10, fontWeight:600 , marginLeft:8}}>Student Course</Text>
      <TouchableOpacity
        onPress={() =>setVisibility(true)}
      >
        <View style={{ width: width*0.9 , height: 40 , backgroundColor:"#444", display:"flex" , flexDirection:"row" , alignItems:"center" ,justifyContent:"center", borderRadius:16 , gap:10 , position:"relative"}}>
          <Text style={{ fontSize: 17 , color: "white" , fontWeight:600 , marginLeft:8}}>{course}</Text> 
          <SimpleLineIcons name="arrow-down" size={15} color="white" />

          
          <Modal
            visible={visibility}
            animationType="slide"
            onRequestClose={()=> setVisibility(false)}
          >
            <View style={{ flex: 1 , backgroundColor:"#444" , display:"flex" ,alignItems:"center" , justifyContent:"center"}}>

              <View style={{  position: "relative", backgroundColor:"#444" , display:"flex",marginBottom:10 ,flexDirection:"row",alignItems:"center" , justifyContent:"space-evenly"}}>
                <Ionicons name="school" size={24} color="white" />
                <Text style={{ fontSize: 24 , color: "white" , fontWeight:600 , marginLeft:8}}>Student Courses</Text> 

                <TouchableOpacity style={{ position:"absolute" , top: -30 , left:210}} onPress={()=> setVisibility(false)}>
                  <AntDesign name="close-circle" size={24} color="white"  />
                </TouchableOpacity>
              </View>

              <View style={{ borderRadius: 20 , overflow:"hidden" ,}}>
                { options.map ((option)=> (
                  <TouchableOpacity  key={option}
                    onPress={()=> handleCourseSelection(option)}
                  >
                    <View style={{ padding:10,width:width*0.7, backgroundColor:"#252525ff" }}>
                      <Text style={{ fontSize: 17 , color: "white" , fontWeight:600 , marginLeft:8}}>{option}</Text> 
                    </View>
                  </TouchableOpacity>
                  
                ))}
              </View>

            </View>

          </Modal>
        </View>
      </TouchableOpacity>

      




      
      

      

    </View>
  )
}