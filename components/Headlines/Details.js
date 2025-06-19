import { View, Text, Image, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Footer from '../Footer'
import { useNavigation } from '@react-navigation/native'

const Details = () => {

    const route = useRoute()
    const { item } = route.params
    const navigation = useNavigation()
    return (
        <View style={{ height: '100%' }}>
            <View style={{ padding: 5, backgroundColor: 'black', width: '98%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, alignSelf: 'center', color: 'white' }}>{item.headline}</Text>
            </View>
            <View>
                <Image source={{ uri: item.images[0].url }} width={'98%'} height={220} style={{ alignSelf: 'center' }} />
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>{item.description}</Text>
            </View>
            <ScrollView style={{ width: '100%' }}>

            </ScrollView>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '98%', borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>
                <Text style={{ fontSize: 18, padding: 5 }}>Back</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '98%',
        alignSelf: 'center',
        padding: 2,
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    box2: {
        width: '98%',
        alignSelf: 'center',
        padding: 2,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Details