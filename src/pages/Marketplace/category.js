import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { Touchable } from '../../components'
import { colors } from '../../styles/theme.json'

import Header from '../../components/Header'
import ProductList from '../../components/Product/list'

const Category = () => {
    return (
        <>
            <Header title='Category X'
                right={() => (
                    <Touchable onPress={() => alert('Suas compras')} width='15%'>
                        <Icon name='bag' size={20} color={`${colors.muted}`} />
                    </Touchable>
                )} />
                <ProductList/>
        </>
    )
}

export default Category