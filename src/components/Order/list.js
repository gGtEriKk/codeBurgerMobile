import React from 'react'

import { ScrollView, Spacer } from '..'
import Order from '.'

const OrderList = () => {
    return (
        <>
            <ScrollView background='light' fluid hasPadding>
                {Array.from(Array(4))?.map(ord => (
                    <Order />
                ))}
                <Spacer size='20px'/>
            </ScrollView>

        </>
    )
}

export default OrderList