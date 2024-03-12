import React from 'react'

import { Box, Button, Cover, Spacer, Text, Title } from '..'

const CongratsModal = () => {
    return (
        <Box
            style={{
                position: 'absolute',
                zIndex: 9999,
                width: '100%',
                height: '100%'
            }}
            background='light'
            hasPadding
            align='center'
            justify='center'>
            <Box align='center' justify='center'>
                <Cover
                    width='200px'
                    height='200px'
                    source={require('../../../assets/congrats-img-1.png')}
                    background='transparent' />
                <Spacer size='50px' />
                <Title bold variant='big'>Congratulations!</Title>
                <Text variant='big' align='center' hasPadding>
                    Your items are on the way
                    and should arrive shortly
                </Text>
            </Box>
            <Button block>
                <Text color='light'>Track your order</Text>
            </Button>
        </Box>
    )
}

export default CongratsModal