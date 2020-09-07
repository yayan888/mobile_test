import React from 'react'
import {Button} from "native-base"
import {createDrawerNavigator} from "@react-navigation/drawer"

// import screen
import Account from "../screen/account"


const DrawerNav = () =>{
    const Drawer = createDrawerNavigator()
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Account" component={Account}/>
            {/* <Button>Logout</Button> */}
        </Drawer.Navigator>
    )
}

export default DrawerNav