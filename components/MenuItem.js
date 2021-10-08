import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { ListItemBase } from 'react-native-elements/dist/list/ListItemBase'

const MenuItem = () => {

    const items = [
      {
          id:1,
          icon: "music",
          title:"Media"
      },
      {
        id:2,
        icon: "clock",
        title:"Software updates"
    },
    {
        id:3,
        icon: "thermometer-half",
        title:"Climate"
    },
    {
        id:4,
        icon: "car",
        title:"control"
    },
    {
        id:5,
        icon: "charging-station",
        title:"charging"
    },
    {
        id:6,
        icon: "location-arrow",
        title:"charging"
    },
    {
        id:7,
        icon: "shopping-bag",
        title:"upgrades"
    },
    {
        id:8,
        icon: "key",
        title:"phone key"
    },
    ]
    return (
       
        
        <View style={styles.MenuItems} 
         style={{marginTop:20,
            marginLeft:20,
            marginRight:20
        }}
        >
            {items.map((item,index)=>
            <TouchableOpacity key={index}>
               <View style={{
                 marginTop:15,
                 marginBottom:15,
                 flexDirection:"row",
                 alignItems: "center"
               }}>
              <FontAwesome5 name={item.icon} size={24} color="#fff"/>
               <View style={{ flexGrow:1  }}>
              <Text style={{ color:"#fff",fontSize:20,fontWeight:"bold",marginLeft:15,textTransform:"uppercase"}}>{item.title}</Text>
               </View>
              <FontAwesome5 name="chevron-right" size={24} color="#eee" />
              </View>
              </TouchableOpacity>
        )} 
           </View>
           
    )
}

export default MenuItem

const styles = StyleSheet.create({
    MenuItems:{

    }
})
