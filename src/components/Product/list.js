import React from 'react'

import { ScrollView } from '..'
import ProductComponent from '.'

const ProductList = () => {
    return (
        <ScrollView background='light' fluid hasPadding>
            {Array.from(Array(25))?.map(cat => (
                <ProductComponent
                    cover='https://i.pinimg.com/736x/98/85/5e/98855ebf432e59695f88a720503d7f26.jpg'
                    brand='Raf Simons'
                    title='Large striped cardigan'
                    price='$1080' />
            ))}
        </ScrollView>
    )
}

export default ProductList