import React from 'react'

import { ScrollView, Spacer } from '..'
import Order from '.'

const OrderList = ({ orders }) => {
    return (
        <>
            <ScrollView background='light' fluid hasPadding>
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
                <Spacer size='20px'/>
            </ScrollView>

        </>
    )
}

export default OrderList