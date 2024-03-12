import React from 'react'

import { ScrollView } from '..'
import Category from '.'

const CategoryList = () => {
    return (
        <ScrollView background='light' fluid style={{
            paddingTop: 20,
            paddingRight: 20,
            paddingLeft: 20
        }}>
            {Array.from(Array(25))?.map(cat => (
                <Category title='Women' description='3456 ITEMS'/>
            ))}
        </ScrollView>
    )
}

export default CategoryList