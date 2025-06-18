import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import item from '../Teams'

const Statistics = ({ item }) => {
    if (item) {
        return (
            <View style={styles.box}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>Total Season Statistics</Text>
                <View style={styles.container}>

                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[2].stats[11].displayName} </Text>
                        </View>
                        <Text>: {item.categories[2].stats[11].displayValue}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[1].stats[6].displayName} </Text>
                        </View>
                        <Text>: {item.categories[1].stats[6].value}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[2].stats[0].displayName} </Text>
                        </View>
                        <Text>: {item.categories[2].stats[0].value}</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[0].stats[2].displayName} </Text>
                        </View>
                        <Text>: {item.categories[0].stats[2].value}</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[0].stats[0].displayName} </Text>
                        </View>
                        <Text>: {item.categories[0].stats[0].value}</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[2].stats[5].displayName} </Text>
                        </View>
                        <Text>: {item.categories[2].stats[5].displayValue} %</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[2].stats[13].displayName} </Text>
                        </View>
                        <Text>: {item.categories[2].stats[13].displayValue} %</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[2].stats[7].displayName} </Text>
                        </View>
                        <Text>: {item.categories[2].stats[7].displayValue} %</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={{ width: '50%' }}>
                            <Text>{item.categories[2].stats[18].displayName} </Text>
                        </View>
                        <Text>: {item.categories[2].stats[18].value}</Text>
                    </View>
                </View>


            </View>
        )
    }
    else {
        return (
            <View style={{ width: '98%', alignItems: 'center', alignSelf: 'center' }}>
                <Text style={{ fontSize: 20, textDecorationLine: 'underline' }}>No Statistics available.</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dotted',
        width: '100%',
        alignSelf: 'center',
        padding: 2,
        marginBottom: 2,
        marginTop: 2
    },
    box: {
        borderWidth: 1,
        borderColor: 'black',
        borderStyle: 'dotted',
        width: '98%',
        alignSelf: 'center',

    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: 'lightgray',
        borderBottomWidth: 1,
        marginBottom: 3,
        padding: 2
    }
})

export default Statistics