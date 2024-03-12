import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import Header from '../../components/Header'
import { Box, Text, Touchable } from '../../components'
import { colors } from '../../styles/theme.json'
import CategoryList from '../../components/Category/list'

const Marketplace = () => {
    return (
        <>
            <Header title={'Categories'}
                right={() => (
                    <Touchable onPress={() => alert('Suas compras')} width='15%'>
                        <Icon name='bag' size={20} color={`${colors.muted}`} />
                    </Touchable>
                )} />
            <CategoryList/>
        </>
    )
}

export default Marketplace