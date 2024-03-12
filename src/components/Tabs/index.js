import React from 'react'

import { Touchable, Text, Box } from '../../components'
import { colors } from '../../styles/theme.json'

const Tabs = ({ tabs = [], active = '', onChange = () => { } }) => {
    const activeTabStyle = {
        borderBottomWidth: 3,
        borderColor: colors.primary,
    }

    return (
        <Box 
        row
        background='light'
        height={65}
        >
            {tabs?.map(tab => (
                <Touchable
                    onPress={() => onChange(tab.value)}
                    hasPadding
                    align='center'
                    style={[
                        active === tab.value ? activeTabStyle : undefined
                    ]}
                >
                    <Text
                        color={active === tab.value ? 'danger' : undefined}
                        bold={active === tab.value ? 'bold' : 'normal'}>
                        {tab.label}
                    </Text>
                </Touchable>
            ))}
        </Box>
    )
}

export default Tabs