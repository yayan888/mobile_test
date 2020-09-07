import React from "react"
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "native-base"
import { logOutAction } from "../action"

const Account = ({ navigation }) => {
    const dispatch = useDispatch()
    return (
        <View style={styles.root}>
            <Button
                rounded
                light
                onPress={() => navigation.navigate("Menu")}
                style={styles.button}>
                <Text>Go To Menu</Text>
            </Button>
            <Button
                rounded
                light
                onPress={() => navigation.navigate("Home")}
                style={styles.button}>
                <Text>Go To Home</Text>
            </Button>
            <Button
                rounded
                light
                onPress={() => dispatch(logOutAction())}
                style={styles.button}>
                <Text>
                    Logout
                </Text>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        alignSelf: "center",
        marginVertical: 6,
        backgroundColor: '#48dbfb',
        padding: 20
    }
})

export default Account