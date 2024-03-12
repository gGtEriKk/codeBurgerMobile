import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Touchable, Cover, Title, Text, Spacer, Box } from '..'
import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const CategoryComponent = ({ title, description }) => {
    const { navigate } = useNavigation()

    return (
        <Touchable
            width='100%'
            height='200px'
            radius='10px'
            spacing='10px 0'
            onPress={() => navigate('Category')}>
            <Cover
                image='https://topmovies.com.br/wp-content/uploads/2023/08/One-Piece-Criador-expressa-a-importancia-de-um-elenco-feminino-860x430.jpg'
                width='100%'
                height='100%'>
                <Box
                    width='100%'
                    align='center'
                    justify='center'
                    hasPadding
                    background={utils.toAlpha(colors.black, 70)}>
                    <Title variant='big' bold color='light'>{title}</Title>
                    <Spacer />
                    <Text color='light'>{description}</Text>
                </Box>
            </Cover>
        </Touchable>
    )
}

export default CategoryComponent