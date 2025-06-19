import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import HComp from './HComp'
import Footer from '../Footer'

const Headlines = () => {

    const [news, setNews] = useState([])
    const [header, setHeader] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const navigation = useNavigation()

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/news?limit=50')
                const data = await response.json()
                setNews(data.articles)
                setHeader(data)

            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false)
            }
        }
        fetchNews()
    }, [])

    if (loading) {
        return (
            <View style={{ height: '95%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>loading</Text>
            </View>
        )
    }

    if (error) {
        return (
            <View style={{ height: '95%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Text>Error: {error}</Text>
            </View>
        )
    }

    return (
        <View style={{ height: '100%' }}>
            <View style={{ height: '5%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'black' }}>
                <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'white' }}>{header.header}</Text>
            </View>
            <HComp data={news} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ width: '98%', borderColor: 'black', borderWidth: 1, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>
                <Text style={{ fontSize: 18, padding: 5 }}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Headlines