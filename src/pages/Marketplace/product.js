import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { StretchyScrollView } from 'react-native-stretchy'

import { Box, Title, Touchable, Text, Spacer, Button } from '../../components'
import Header from '../../components/Header'
import Picker from '../../components/Picker'

import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const Product = () => {
    return (
        <>
            <Header
                goBack
                title='Striped cardigan'
                right={() => (
                    <Touchable onPress={() => alert('Suas compras')} width='15%'>
                        <Icon name='bag' size={20} color={`${colors.muted}`} />
                    </Touchable>
                )} />
            <StretchyScrollView image={{
                uri: 'https://i.pinimg.com/736x/98/85/5e/98855ebf432e59695f88a720503d7f26.jpg'
            }}
                imageOverlay={
                    <Box background={utils.toAlpha(colors.dark, 40)}></Box>
                }
                foreground={
                    <Box hasPadding justify='flex-end'>
                        <Title bold color='light' variant='big'>$1080</Title>
                    </Box>
                }>
                <Box hasPadding background='light'>
                    <Text color='black' bold>Shirts</Text>
                    <Spacer size='30px' />
                    <Title bold variant='big' width='80%'>A.P.C. Collection Spring 2015</Title>
                    <Spacer size='30px' />
                    <Text color='black'>Enjoy the beauty of italian cotton all over your body. This item will fit your body and warm you up all over and during spring. This item will fit your body and warm you up all over and during spring.</Text>
                    <Spacer />
                    <Text color='black'>And over and over again, this is the text.</Text>
                    <Spacer size='40px' />
                    <Picker
                        onChange={value => alert(value)}
                        title='Size'
                        options={[
                            { label: 'XS', value: 'XS' },
                            { label: 'S', value: 'S' },
                            { label: 'M', value: 'M' },
                            { label: 'L', value: 'L' },
                            { label: 'XL', value: 'XL' },
                            { label: 'XXL', value: 'XXL' }
                        ]}
                        initialValue='M' />
                    <Spacer size='40px' />
                    <Button block><Text color='light'>Add to cart</Text></Button>
                </Box>
            </StretchyScrollView>
        </>
    )
}

export default Product