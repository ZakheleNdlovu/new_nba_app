import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Footer from '../../Footer'


const Players = () => {

    const route = useRoute()
    const { team, play, error, loading } = route.params
    const navigation = useNavigation()

    if (error) {
        return (
            <Text>Error:{error}</Text>
        )
    }

    if (loading) {
        return (
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text>loading</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerTxt}>{team.displayName}</Text>
            </View>
            <FlatList style={{ height: '95%' }} data={play} renderItem={({ item }) => {
                if (item) {
                    if (item.headshot) {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('PlayerDetails', {
                                player: item,
                            })}>
                                <View style={{ flexDirection: 'row', padding: 2, borderColor: 'lightgray', borderBottomWidth: 1, marginBottom: 2, alignItems: 'center' }}>
                                    <View style={{ width: '20%', alignItems: 'center' }}>
                                        <Image source={{ uri: item.headshot.href }} width={50} height={50} />
                                    </View>
                                    <View style={{ width: '60%' }}>
                                        <Text>{item.displayName}</Text>
                                    </View>
                                    <Text>{item.position.abbreviation}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                    else {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('PlayerDetails', {
                                player: item,
                                load: loading
                            })}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 2, borderColor: 'lightgray', borderBottomWidth: 1, marginBottom: 2 }}>
                                    <View style={{ height: 45, width: '20%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'gray' }}>Photo</Text>
                                    </View>
                                    <View style={{ width: '60%' }}>
                                        <Text>{item.displayName}</Text>
                                    </View>
                                    <Text>{item.position.abbreviation}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }

            }} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    header: {
        width: '99%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dotted',
        alignSelf: 'center'
    },
    headerTxt: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default Players