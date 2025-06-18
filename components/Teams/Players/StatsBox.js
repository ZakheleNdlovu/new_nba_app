import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StatsBox = ({ load, err, statistics }) => {

    if (load) {
        return (
            <Text>loading</Text>
        )
    }

    if (err) {
        return (
            <Text>Error: {err}</Text>
        )
    }
    return (
        <View style={{ width: '100%' }}>
            <View style={{ width: '99%', alignItems: 'center', alignSelf: 'center', padding: 5, borderColor: 'gray', borderTopWidth: 1 }}>

                <View style={styles.row}>
                    <View style={{ width: '30%' }}>
                        <Text>Points</Text>
                    </View>
                    <View>
                        <Text>: {statistics.name}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {

    },
    row: {
        width: '98%',
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 5,
        marginBottom: 1,
        borderColor: 'lightgray',
        borderBottomWidth: 1
    },
    stats: {
        borderColor: 'lightgray',
        borderWidth: 1
    }
})

export default StatsBox