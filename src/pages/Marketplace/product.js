import React, { useState, useEffect, useContext } from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { StretchyScrollView } from 'react-native-stretchy'
import { AppContext } from '../../contexts/app'

import { Box, Title, Touchable, Text, Spacer, Button } from '../../components'
import Header from '../../components/Header'
import Picker from '../../components/Picker'

import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const Product = ({ navigation, route }) => {
    const [size, setSize] = useState(null)
    const { product } = route?.params
    const { addToCart, cart } = useContext(AppContext)

    useEffect(() => {
        setSize(product?.sizes?.[0]?.value)
    }, [product])

    return (
        <>
            <Header
                goBack
                title={product?.title}
                right={() => (
                    <Touchable onPress={() => navigation.navigate('Cart')} width='15%'>
                        <Icon name='bag' size={20} color={`${colors.muted}`} />
                    </Touchable>
                )} />
            <StretchyScrollView image={{
                uri: product?.cover
            }}
                imageOverlay={
                    <Box background={utils.toAlpha(colors.dark, 40)}></Box>
                }
                foreground={
                    <Box hasPadding justify='flex-end'>
                        <Title bold color='light' variant='big'>{product?.price}</Title>
                    </Box>
                }>
                <Box hasPadding background='light'>
                    <Text color='black' bold>{product?.type}</Text>
                    <Spacer size='30px' />
                    <Title bold variant='big' width='80%'>{product?.title}</Title>
                    <Spacer size='30px' />
                    <Text color='black'>{product?.description}</Text>
                    <Spacer />
                    <Text color='black'>And over and over again, this is the text.</Text>
                    <Spacer size='40px' />
                    <Picker
                        onChange={(value) => setSize(value)}
                        title='Size'
                        options={product?.sizes}
                        initialValue={product?.sizes?.[0]?.value} />
                    <Spacer size='40px' />
                    <Button block
                        onPress={() => {
                            addToCart({ ...product, size })
                            navigation.navigate('Cart')
                        }}><Text color='light'>Add to cart</Text></Button>
                    <Spacer size='40px' />
                </Box>
            </StretchyScrollView>
        </>
    )
}

export default Product