import React, { useContext } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { AppContext } from '../../contexts/app'

import { Box, Cover, Text, Touchable } from '..'

const ProductComponent = ({ product, selected = false }) => {
    const { navigate } = useNavigation()
    const { removeFromCart } = useContext(AppContext)

    return (
        <Touchable
            align='center'
            onPress={() => navigate('Product', { product })}
            spacing='0 0 10px 0'
            row
            style={{
                paddingBottom: 20
            }}>
            <Cover image={product?.cover} width='100px' height='100px' radius='5px' />
            <Box fluid style={{
                paddingLeft: 20
            }}>
                {!selected && <Text color='black'>{product?.brand}</Text>}
                {!selected &&
                    <Box fluid row justify='space-between' spacing='0 0 20px 0'>
                        <Text color='black' bold>{product?.title}</Text>
                    </Box>
                }
                {selected &&
                    <Box fluid row justify='space-between' spacing='0 0 20px 0'>
                        <Text color='black' bold>{product?.title}</Text>
                        <Text color='black'>{product?.price}</Text>
                    </Box>
                }
                {selected &&
                    <Box fluid>
                        <Text color='black' bold>Size: <Text>{product?.size}</Text></Text>
                        <Text color='black' bold>Color: <Text>Blue</Text></Text>
                        <Box fluid row justify='space-between'>
                            <Text color='black' bold>Quantity: <Text>1</Text></Text>
                            <Touchable
                                align='flex-end'
                                width='35%'><Text
                                    color='primary'
                                    onPress={() => Alert.alert('Sure ou want to remove?',
                                        'This product will be removed from cart!',
                                        [
                                        {
                                            text: 'Cancel', style: 'cancel'
                                        },
                                        {
                                            text: 'Remove', style: 'destructive',
                                            onPress: () => removeFromCart(product.id)
                                        }
                                        ])}>Remove</Text></Touchable>
                        </Box>
                    </Box>
                }
                {!selected &&
                    <Box fluid row align='flex-end' justify='space-between'>
                        <Text color='black'>{product?.price}</Text>
                        <Touchable
                            align='flex-end'
                            width='35%'
                            onPress={() => navigate('Cart')}><Text color='primary'>Add to cart</Text></Touchable>
                    </Box>
                }
            </Box>
        </Touchable>
    )
}

export default ProductComponent