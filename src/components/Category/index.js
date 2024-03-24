import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Touchable, Cover, Title, Text, Spacer, Box } from '..'
import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const CategoryComponent = ({ category }) => {
    const { navigate } = useNavigation()

    return (
        <Touchable
            width='100%'
            height='200px'
            radius='10px'
            spacing='10px 0'
            onPress={() => navigate('Category', { category })}>
            <Cover
                image={category?.cover}
                width='100%'
                height='100%'>
                <Box
                    width='100%'
                    align='center'
                    justify='center'
                    hasPadding
                    background={utils.toAlpha(colors.black, 70)}>
                    <Title variant='big' bold color='light'>{category?.title}</Title>
                    <Spacer />
                    <Text color='light'>{category?.items} Items</Text>
                </Box>
            </Cover>
        </Touchable>
    )
}

export default CategoryComponent