import React from 'react'

import Header from '../../components/Header'
import OrderList from '../../components/Order/list'

const Orders = () => {
    return (
        <>
            <Header title='Orders' />
            <OrderList />
        </>
    )
}

export default Orders