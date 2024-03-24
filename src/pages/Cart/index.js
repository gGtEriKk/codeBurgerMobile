import React, { useState, useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import moment from 'moment'
import { AppContext } from '../../contexts/app'

import { colors } from '../../styles/theme.json'
import utils from '../../utils'
import api from '../../services/api'

import { ScrollView, Text, Title, Spacer, Box, Button, Touchable } from '../../components'
import Header from '../../components/Header'
import Tabs from '../../components/Tabs'
import ProductComponent from '../../components/Product'
import PaymentForm from '../../components/Form/payment'
import CongratsModal from '../../components/Modals/congrats'
import Empty from '../../components/Empty'

const Cart = ({ navigation: { navigate } }) => {
    const [tab, setTab] = useState('cart')
    const [showCongrats, setShowCongrats] = useState(false)
    const [loading, setLoading] = useState(false)
    const [creditCard, setCreditCard] = useState({})
    const { cart, DISCOUNT_TAX, DELIVERY_TAX, user, ORDER_NUMBER } = useContext(AppContext)

    const cartIsEmpty = cart?.length === 0
    const orderPrice = cart?.reduce((acc, product) => {
        return acc += product.price
    }, 0)
    const orderDiscount = (orderPrice * DISCOUNT_TAX).toFixed(2)
    const totalOrder = (orderPrice + DELIVERY_TAX - orderDiscount).toFixed(2)

    const buyProduct = async () => {
        try {
            setLoading(true)
            const creditCardValidation = utils.isValidCreditCard(creditCard)

            if (creditCardValidation.error) {
                alert(creditCardValidation.message)
                return false
            }

            const { data: orderData } = await api.post('/orders', {
                userId: user.id,
                step: 'Waiting',
                createdAt: moment().format(),
                orderNumber: ORDER_NUMBER,
                trackingNumber: new Date().getTime(),
                totalValue: totalOrder,
                totalItems: cart?.length
            })

            if (!orderData.id) {
                alert({ message: 'Failed to create order! Try again.' })
                setLoading(false)
                return false
            }
            setShowCongrats(true)
        } catch (error) {
            setLoading(false)
            alert(error.message)
        }
    }

    return (
        <>
            {showCongrats && <CongratsModal />}
            <Header goBack title={tab === 'cart' ? 'Cart' : 'Payment'} />
            {cartIsEmpty && <Empty message='Cart is Empty!' />}
            {!cartIsEmpty &&
                <>
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
                        <Title variant='small' color='black' bold>Order number is {ORDER_NUMBER}</Title>
                        <Spacer size={40} />
                        {tab === 'cart' && (
                            <>
                                {cart?.map(product => (
                                    <ProductComponent product={product} selected />
                                ))}
                                <Spacer size={40} />
                                <Box fluid>
                                    <Box row fluid justify='space-between' align='center'>
                                        <Text variant='big' color='black' >Order:</Text>
                                        <Text color='black' >${(orderPrice)?.toFixed(2)}</Text>
                                    </Box>
                                    <Spacer />
                                    <Box row fluid justify='space-between' align='center'>
                                        <Text variant='big' color='black' >Discount:</Text>
                                        <Text color='secondary' >${orderDiscount}</Text>
                                    </Box>
                                    <Spacer />
                                    <Box row fluid justify='space-between' align='center'>
                                        <Text variant='big' color='black' >Delivery:</Text>
                                        <Text color='black' >${(DELIVERY_TAX)?.toFixed(2)}</Text>
                                    </Box>
                                    <Spacer />
                                    <Box row fluid justify='space-between' align='center'>
                                        <Text variant='big' color='black' bold>Total order:</Text>
                                        <Text color='black' bold>${totalOrder}</Text>
                                    </Box>
                                </Box>
                                <Spacer size={40} />
                                <Button onPress={() => setTab('payment')}>
                                    {!loading && <Text color='light'>Place Order</Text>}
                                    {loading && <ActivityIndicator />}
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
                                    onChange={creditCardData => setCreditCard(creditCardData)} />
                                <Spacer size='20px' />
                                <Button
                                    onPress={() => buyProduct()}><Text color='light'>Confirmation</Text></Button>
                                <Spacer size='50px' />
                            </>
                        )}
                    </ScrollView>
                </>}
        </>
    )
}

export default Cart