import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HComp = ({ data }) => {

    const navigation = useNavigation()
    return (
        <View style={{ height: '92%' }}>
            <FlatList data={data} renderItem={({ item }) => {
                if (item.images) {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('HDetails', { item: item })}>
                            <View style={styles.container}>

                                <View style={{ padding: 4, width: '20%' }}>
                                    <Image source={{ uri: item.images[0].url }} width={60} height={60} />
                                </View>
                                <View style={{ width: '78%' }}>
                                    <Text style={styles.header}>{item.headline}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }



            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '99%',
        borderColor: 'gray',
        borderBottomWidth: 1,
        padding: 3,
        marginBottom: 3
    },
    header: {
        fontSize: 16,

    }
})

export default HComp