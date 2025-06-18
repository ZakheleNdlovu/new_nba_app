import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const Header = ({ item }) => {

    const [players, setPlayers] = useState([])
    const [team, setTeam] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch(`https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams/${item.team.id}?enable=roster,projection,stats`)
                const data = await response.json()
                setPlayers(data.team.athletes)
                setTeam(data.team)
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }

        fetchPlayers()
    }, [])

    if (item.team.logos[0]) {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Players', {
                team: team,
                play: players,
                error: error,
                loading: loading,
            })}>
                <ImageBackground source={{ uri: item.team.logos[0].href }} width={'90%'} height={350} borderRadius={10} style={{ width: '98%', height: 350, alignSelf: 'center' }}>
                    <View style={{ width: '100%', alignItems: 'center', height: 350, backgroundColor: 'black', opacity: .8, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>{item.team.displayName}</Text>
                        <Text style={{ color: 'white' }}>Tap to see roster</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <ImageBackground width={'90%'} height={350} style={{ width: '100%', height: 350 }}>
                <View style={{ width: '100%', alignItems: 'center', height: 350, backgroundColor: 'black', opacity: .8, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>{item.team.displayName}</Text>
                </View>
            </ImageBackground>
        )
    }
}

export default Header