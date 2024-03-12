import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Box, Cover, Text, Touchable } from '..'

const ProductComponent = ({ cover, brand, title, price, selected = false }) => {
    const { navigate } = useNavigation()

    return (
        <Touchable
            align='center'
            onPress={() => navigate('Product')}
            spacing='0 0 10px 0'
            row
            style={{
                paddingBottom: 20
            }}>
            <Cover image={cover} width='100px' height='100px' radius='5px' />
            <Box fluid style={{
                paddingLeft: 20
            }}>
                {!selected && <Text color='black'>{brand}</Text>}
                {selected &&
                    <Box fluid row justify='space-between' spacing='0 0 20px 0'>
                        <Text color='black' bold>{title}</Text>
                        <Text color='black'>{price}</Text>
                    </Box>
                }
                {selected &&
                    <Box fluid>
                        <Text color='black' bold>Size: <Text>M</Text></Text>
                        <Text color='black' bold>Color: <Text>Blue</Text></Text>
                        <Box fluid row justify='space-between'>
                            <Text color='black' bold>Quantity: <Text>1</Text></Text>
                            <Touchable align='flex-end' width='35%'><Text color='primary'>Remove</Text></Touchable>
                        </Box>
                    </Box>
                }
                {!selected &&
                    <Box fluid row align='flex-end' justify='space-between'>
                        <Text color='black'>{price}</Text>
                        <Touchable align='flex-end' width='35%'><Text color='primary'>Add to cart</Text></Touchable>
                    </Box>
                }
            </Box>
        </Touchable>
    )
}

export default ProductComponent