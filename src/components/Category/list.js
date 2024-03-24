import React from 'react'

import { ScrollView } from '..'
import CategoryComponent from '.'

const CategoryList = ({ categories }) => {
    return (
        <ScrollView background='light' fluid style={{
            paddingTop: 20,
            paddingRight: 20,
            paddingLeft: 20
        }}>
            {categories?.map(category => (
                <CategoryComponent category={category} />
            ))}
        </ScrollView>
    )
}

export default CategoryList