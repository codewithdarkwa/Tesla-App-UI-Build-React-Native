import React,{useState} from 'react'
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
import MenuItem from './MenuItem';

const HeaderItems = () => {
  const [isLocked,setLocked]=useState(true);

  const CheckedLock = () => {
      if (isLocked) {
          setLocked(false);
      }
      else
      setLocked(true);
  }

    return (
        <>
        <View style={styles.headerContainer}>
        <ImageBackground 
        source={require('../assets/background.png')}
        style={{
            width:"100%",
            height:"100%",
            resizeMode:"cover",
            position:"absolute",
            marginTop:15
        }}/>
            <View style={styles.header}>
                <TouchableOpacity>
            <AntDesign name="setting" size={24} color="black" style={{color:"#fff"}}/>
            </TouchableOpacity>
            <Text style={styles.text}>Darkwa</Text>
            <TouchableOpacity>
            <AntDesign name="gift" size={24 } color="black" style={{color:"#fff"}}/>
            </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:"row",
                alignItems: "center",
                justifyContent: "center"
            }}>
             <Image source={require('../assets/battery.png')} 
             style={{height:26,width:70}}
             />
            <Text style={{color:"#fff",fontSize:35,fontWeight:"bold"}}>150 mi</Text>
            </View>
            <View style={{
             alignItems: "center",
            }}>
              <Text style={{
              color:"#fff",
              fontSize:20,
              fontWeight:"bold"
              }}>Parked</Text>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent: "center",
                marginTop:150
            }}>
                <TouchableOpacity>
                 <View style={styles.icon}>
                    <FontAwesome5 name="fan" size={24} color="white"/>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity>
                 <View style={styles.icon}>
                    <FontAwesome5 name="key" size={24} color="white"/>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity onPress={CheckedLock}>
                 <View style={styles.icon}>
                  {isLocked?<FontAwesome5 name="lock" color="#fff" size={24}/>:<FontAwesome5 name="unlock" color="#fff"  size={24}/> }
                 </View>
               </TouchableOpacity>
            </View>
            <ScrollView >
               {/* MenuItems */}
              <MenuItem />
              </ScrollView>
        </View>
        </>  
    )
}

export default HeaderItems

const styles = StyleSheet.create({
    headerContainer:{
    width:"100%",
    height:"100%",
    },
    header:{
        marginTop:50,
        marginLeft:20,
        marginRight:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
        alignItems:"center",
        justifyContent:"center",

    },
    icon:{
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:50,
        padding:18,
        marginLeft:20
        
    }
})
