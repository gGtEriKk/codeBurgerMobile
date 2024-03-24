import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'

import { Title, Box, Spacer, Text } from '..'
import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const Order = ({ order }) => {
    const stepEnum = {
        waiting: {
            icon: 'clock',
            color: 'warning'
        },
        delivered: {
            icon: 'check',
            color: 'secondary'
        },
        canceled: {
            icon: 'close',
            color: 'danger'
        }
    }

    const stepData = stepEnum[order?.step]

    return (
        <>
            <Box radius='5px' fluid style={{
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: utils.toAlpha(colors.muted, 40)
            }}>
                <Box row hasPadding fluid justify='space-between'>
                    <Text
                        color={stepData?.color}
                        variant='small'>
                        <Icon name={stepData?.icon} color={colors[stepData?.color]} /> {order?.step?.toUpperCase()}
                    </Text>
                    <Text color='gray50' variant='small'>
                        {moment(order?.createdAt).format('DD/MM/YY HH:mm')}
                    </Text>
                </Box>
                <Box fluid hasPadding style={{
                    borderStyle: 'solid',
                    borderBottomWidth: 1,
                    borderTopWidth: 1,
                    borderColor: utils.toAlpha(colors.muted, 40)
                }}>
                    <Title bold>Order №{order?.orderNumber}</Title>
                    <Text>Tracking number:   <Text color='dark'>{order?.trackingNumber}</Text></Text>
                </Box>
                <Box row hasPadding>
                    <Box>
                        <Text variant='small'>VALUE OF ITEMS</Text>
                        <Text color='dark'>{order?.totalValue}</Text>
                    </Box>
                    <Box>
                        <Text variant='small'>QUANTITY</Text>
                        <Text color='dark'>{order?.totalItems}</Text>
                    </Box>
                </Box>
            </Box >
            <Spacer size='20px' />
        </>
    )
}

export default Order