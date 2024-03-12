import React, { useState } from 'react'

import { ScrollView, Text, Title, Spacer, Box, Button, Touchable } from '../../components'
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import ProductComponent from '../../components/Product'
import { colors } from '../../styles/theme.json'
import utils from '../../utils'
import PaymentForm from '../../components/Form/payment'
import CongratsModal from '../../components/Modals/congrats'

const Cart = () => {
    const [tab, setTab] = useState('cart')
    const [showCongrats, setShowCongrats] = useState(false)

    return (
        <>
            {showCongrats && <CongratsModal />}
            <Header goBack title='Cart' />
            <Tabs tabs={[
                { label: 'CART', value: 'cart' },
                { label: 'PAYMENT', value: 'payment' }
            ]}
                active={tab}
                onChange={(value) => setTab(value)}
            />
            <ScrollView
                hasPadding
                background='light'>
                <Spacer size={20} />
                <Title variant='small' color='black' bold>Order number is 458765342</Title>
                <Spacer size={40} />
                {tab === 'cart' && (
                    <>
                        {Array.from(Array(3))?.map(cat => (
                            <ProductComponent
                                cover='https://i.pinimg.com/736x/98/85/5e/98855ebf432e59695f88a720503d7f26.jpg'
                                brand='Raf Simons'
                                title='Large striped cardigan'
                                price='$1080'
                                selected />
                        ))}
                        <Spacer size={40} />
                        <Box fluid>
                            <Box row fluid justify='space-between' align='center'>
                                <Text variant='big' color='black' >Order:</Text>
                                <Text color='black' >$3240</Text>
                            </Box>
                            <Spacer />
                            <Box row fluid justify='space-between' align='center'>
                                <Text variant='big' color='black' >Discount:</Text>
                                <Text color='secondary' >$-324.00</Text>
                            </Box>
                            <Spacer />
                            <Box row fluid justify='space-between' align='center'>
                                <Text variant='big' color='black' >Delivery:</Text>
                                <Text color='black' >$10.00</Text>
                            </Box>
                            <Spacer />
                            <Box row fluid justify='space-between' align='center'>
                                <Text variant='big' color='black' bold>Total order:</Text>
                                <Text color='black' bold>$2,916.00</Text>
                            </Box>
                        </Box>
                        <Spacer size={40} />
                        <Button onPress={() => setTab('payment')}>
                            <Text color='light'>Place Order</Text>
                        </Button>
                        <Spacer size={40} />
                    </>
                )}
                {tab === 'payment' && (
                    <>
                        <Box
                            row
                            fluid
                            justify='space-between'
                            align='center'
                            spacing='0 0 10px 0'
                            style={{
                                borderBottomWidth: 1,
                                borderColor: utils.toAlpha(colors.muted, 40),
                                paddingBottom: 10
                            }}>
                            <Text bold variant='big' color='black'>Shipping address</Text>
                            <Touchable align='flex-end' width='50px'><Text color='danger'>Change</Text></Touchable>
                        </Box>
                        <Text variant='big' color='dark'>
                            Tiana Rosser, 4517 Washington Ave Manchester, Kentucky 39495 United States
                        </Text>
                        <Spacer size='50px' />
                        <Box
                            row
                            fluid
                            justify='space-between'
                            align='center'
                            spacing='0 0 10px 0'
                            style={{
                                borderBottomWidth: 1,
                                borderColor: utils.toAlpha(colors.muted, 40),
                                paddingBottom: 10
                            }}>
                            <Text bold variant='big' color='black'>Delivery details</Text>
                            <Touchable align='flex-end' width='50px'><Text color='danger'>Change</Text></Touchable>
                        </Box >
                        <Text variant='big' color='dark'>Standard Delivery</Text>
                        <Text variant='big' color='dark'>Saturday 27 - Tuesday 30</Text>
                        <Text variant='big' color='dark'>Cost: $10</Text>
                        <Spacer size='50px' />
                        <PaymentForm
                            onChange={creditCardData => console.log(creditCardData)} />
                        <Spacer size='20px' />
                        <Button
                            onPress={() => setShowCongrats(true)}><Text color='light'>Confirmation</Text></Button>
                        <Spacer size='50px' />
                    </>
                )}
            </ScrollView>
        </>
    )
}

export default Cart