import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import StatsBox from './StatsBox'

const PlayerDetails = () => {

    const route = useRoute()
    const { player, load } = route.params

    if (load) {
        if (player.headshot) {
            return (
                <View style={{ width: '99%', alignItems: 'center', height: '99%', justifyContent: 'center' }}>
                    <Image source={{ uri: player.headshot.href }} width={400} height={400} />
                </View>
            )
        }
        else {
            return <Text>loading...</Text>
        }
    }

    if (player.position) {
        if (player.headshot) {
            if (player.draft) {
                return (
                    <View style={{ height: '99%', width: '100%' }}>
                        <View style={{ height: '30%', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: player.headshot.href }} width={130} height={130} />
                        </View>
                        <ScrollView style={{ height: '69%' }}>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Name</Text>
                                </View>
                                <View>
                                    <Text>: {player.displayName}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Age</Text>
                                </View>
                                <View>
                                    <Text>: {player.age}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Position</Text>
                                </View>
                                <View>
                                    <Text>: {player.position.name}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Height</Text>
                                </View>
                                <View>
                                    <Text>: {player.displayHeight}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Weight</Text>
                                </View>
                                <View>
                                    <Text>: {player.displayWeight}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Jersey no.</Text>
                                </View>
                                <View>
                                    <Text>: {player.jersey}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Years active (NBA)</Text>
                                </View>
                                <View>
                                    <Text>: {player.experience.years}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Drafted</Text>
                                </View>
                                <View>
                                    <Text>: {player.draft.displayText}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Home Town</Text>
                                </View>
                                <View>
                                    <Text>: {player.birthPlace.city}, {player.birthPlace.state}</Text>
                                </View>
                            </View>

                        </ScrollView>

                    </View>
                )
            }
            else {
                return (
                    <View style={{ height: '99%', width: '100%' }}>
                        <View style={{ height: '30%', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: player.headshot.href }} width={130} height={130} />
                        </View>
                        <ScrollView style={{ height: '69%' }}>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Name</Text>
                                </View>
                                <View>
                                    <Text>: {player.displayName}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Age</Text>
                                </View>
                                <View>
                                    <Text>: {player.age}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Position</Text>
                                </View>
                                <View>
                                    <Text>: {player.position.name}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Height</Text>
                                </View>
                                <View>
                                    <Text>: {player.displayHeight}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Weight</Text>
                                </View>
                                <View>
                                    <Text>: {player.displayWeight}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Jersey no.</Text>
                                </View>
                                <View>
                                    <Text>: {player.jersey}</Text>
                                </View>
                            </View>
                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Years active (NBA)</Text>
                                </View>
                                <View>
                                    <Text>: {player.experience.years}</Text>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={{ width: '30%' }}>
                                    <Text>Home Town</Text>
                                </View>
                                <View>
                                    <Text>: {player.birthPlace.city}, {player.birthPlace.state}</Text>
                                </View>
                            </View>

                        </ScrollView>

                    </View>
                )
            }
        }
        else {

            return (
                <View style={{ height: '99%', width: '100%' }}>
                    <View style={{ height: '30%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 30, color: 'gray' }}>Photo</Text>
                    </View>
                    <ScrollView style={{ height: '69%' }}>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Name</Text>
                            </View>
                            <View>
                                <Text>: {player.displayName}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Age</Text>
                            </View>
                            <View>
                                <Text>: {player.age}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Position</Text>
                            </View>
                            <View>
                                <Text>: {player.position.name}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Height</Text>
                            </View>
                            <View>
                                <Text>: {player.displayHeight}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Weight</Text>
                            </View>
                            <View>
                                <Text>: {player.displayWeight}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Jersey no.</Text>
                            </View>
                            <View>
                                <Text>: {player.jersey}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <View style={{ width: '30%' }}>
                                <Text>Years active (NBA)</Text>
                            </View>
                            <View>
                                <Text>: {player.experience.years}</Text>
                            </View>
                        </View>

                    </ScrollView>

                </View>
            )

        }
    }

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

export default PlayerDetails