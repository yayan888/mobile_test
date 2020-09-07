import React from "react"
import {View, Text, StyleSheet, Image} from "react-native"

const Splash = () =>{
    return(
        <View style={styles.root}>
        <Image source={{ uri: "https://image.flaticon.com/icons/png/512/2760/2760147.png" }} style={{ height: 175, width: 175}} /> 
            <Text>CORONA APPS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop:20,
        backgroundColor: "#ea8685"
    },
    button:{
        alignSelf: "center",
        padding: 15
    }
})

export default Splash