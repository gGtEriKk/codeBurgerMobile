import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { Title, Box, Spacer, Text } from '..'
import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const Order = () => {
    return (
        <>
            <Box radius='5px' fluid style={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: utils.toAlpha(colors.muted, 40)
            }}>
                <Box row hasPadding fluid justify='space-between'>
                    <Text color='warning' variant='small'><Icon name='clock' />IN PROGRESS</Text>
                    <Text color='gray50' variant='small'>May 13, 2016 5:08 PM</Text>
                </Box>
                <Box fluid hasPadding style={{
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: utils.toAlpha(colors.muted, 40)
                }}>
                    <Title bold>Order №1947034</Title>
                    <Text>Tracking number:   <Text color='dark'>IW3475453455</Text></Text>
                </Box>
                <Box row hasPadding>
                    <Box>
                        <Text variant='small'>VALUE OF ITEMS</Text>
                        <Text color='dark'>$80.58</Text>
                    </Box>
                    <Box>
                        <Text variant='small'>QUANTITY</Text>
                        <Text color='dark'>20 pairs</Text>
                    </Box>
                </Box>
            </Box >
            <Spacer size='20px'/>
        </>
    )
}

export default Order