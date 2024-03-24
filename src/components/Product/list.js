import React from 'react'

import { ScrollView } from '..'
import ProductComponent from '.'

const ProductList = ({ products }) => {
    return (
        <ScrollView background='light' fluid hasPadding>
            {products?.map(product => (
                <ProductComponent product={product}/>
            ))}
        </ScrollView>
    )
}

export default ProductList