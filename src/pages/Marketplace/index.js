import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import api from '../../services/api'

import Header from '../../components/Header'
import { Touchable, Text } from '../../components'
import { colors } from '../../styles/theme.json'
import CategoryList from '../../components/Category/list'
import Empty from '../../components/Empty'

const Marketplace = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        try {
            setLoading(true)
            setTimeout(async () => {
                const { data: categoriesData } = await api.get('/categories')
                setCategories(categoriesData)
                setLoading(false)
            }, 3000)
        } catch (err) {
            setLoading(false)
            alert(err.message)
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getCategories()
        })
        return unsubscribe
    }, [navigation])

    return (
        <>
            <Header title={'Categories'}
                right={() => (
                    <Touchable onPress={() => navigation.navigate('Cart')} width='15%'>
                        <Icon name='bag' size={20} color={`${colors.muted}`} />
                    </Touchable>
                )} />
            {loading && <Empty loading />}
            {!loading && <CategoryList categories={categories} />}
        </>
    )
}

export default Marketplace