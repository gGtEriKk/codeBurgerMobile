import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { colors } from '../../styles/theme.json'
import api from '../../services/api'

import { Touchable } from '../../components'
import Header from '../../components/Header'
import ProductList from '../../components/Product/list'
import Empty from '../../components/Empty'

const Category = ({ navigation, route }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { navigate } = useNavigation()
    const { category } = route?.params

    const getProducts = async () => {
        try {
            setLoading(true)
            setTimeout(async () => {
                const { data: productsData } = await api.get('/products', {
                    params: {
                        categoryId: category?.id
                    }
                })
                setProducts(productsData)
                setLoading(false)
            }, 3000)
        } catch (err) {
            setLoading(false)
            alert(err.message)
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus',() => {
            getProducts()
        })
        return unsubscribe
    }, [navigation])

    return (
        <>
            <Header goBack title={category?.title}
                right={() => (
                    <Touchable onPress={() => navigate('Cart')} width='15%'>
                        <Icon name='bag' size={20} color={`${colors.muted}`} />
                    </Touchable>
                )} />
            {loading && <Empty loading/>}
            {!loading && <ProductList products={products}/>}
        </>
    )
}

export default Category