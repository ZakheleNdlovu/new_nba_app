import { View, Text, Button, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from './TeamDetailsF/Header'
import Statistics from './TeamDetailsF/Statistics'
import Footer from '../Footer'

const TeamDetails = () => {

    const [details, setDetails] = useState([])
    const [error, setError] = useState('')
    const [season, setSeason] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()
    const route = useRoute()
    const { item } = route.params

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await fetch(`https://sports.core.api.espn.com/v2/sports/basketball/leagues/nba/seasons/2025/types/2/teams/${item.team.id}/statistics`)
                const data = await response.json()
                setDetails(data.splits)
            } catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchStats()

    }, [])

    if (loading) {
        return (
            <View style={{ width: '99%', alignItems: 'center', height: '99%', justifyContent: 'center' }}>
                <Image source={{ uri: item.team.logos[1].href }} width={400} height={400} />
            </View>
        )
    }
    if (error) {
        return (
            <View style={{ width: '98%', alignItems: 'center' }}>
                <Text>Error:{error}</Text>
            </View>
        )
    }


    return (
        <View style={{ height: '100%' }}>
            <View >
                <Header item={item} />
            </View>

            <ScrollView >
                <Statistics item={details} />
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '98%', borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>
                    <Text style={{ fontSize: 18, padding: 5 }}>Back</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default TeamDetails