import React from 'react'
import { View, Text, Image } from 'react-native'
import CardMenu from '../component/cardMenu'

class Menu extends React.Component {
    state = {}
    render() {
        return (
            <View>
            <Text style ={{color:'#c44569', fontSize:20, paddingTop:20, paddingLeft:18 }}>Healt Tips</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 5, marginTop: 10, width: "100%" }}>
                    <CardMenu icons={require('../image/wash-your-hands.png')} names={'wash your hand'} />
                    <CardMenu icons={require('../image/hand-wash.png')} names={'Wash Service'} />
                    <CardMenu icons={require('../image/patient.png')} names={'Patient'} />
                    <CardMenu icons={require('../image/medicine.png')} names={'Medicine'} />
                    <CardMenu icons={require('../image/distance.png')} names={'Social Distancing'} />
                    <CardMenu icons={require('../image/hospital.png')} names={'Hospital'} />
                </View>
            </View>

        )

    }
}

export default Menu