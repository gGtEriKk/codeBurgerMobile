import React, { useState, useRef, useEffect } from 'react'
import SegmentedPicker from 'react-native-segmented-picker';

import { Text, Title, Box, Spacer, Input, Touchable } from '..'

const PaymentForm = ({ onChange = creditCard => { } }) => {
    const picker = useRef(null)

    const [data, setData] = useState({
        holder_name: '',
        credit_card: '',
        valid_date: '',
        cvv: '',
    })

    useEffect(() => {
        onChange(data)
    }, [data])

    return (
        <>
            <SegmentedPicker
                ref={picker}
                onConfirm={(data) =>
                    setData({...data, valid_date: `${data.month}/${data.year}`})}
            options={[
                {
                    key: 'month',
                    items: [
                        { label: 'Option 1', value: 'option_1' },
                        { label: 'Option 2', value: 'option_2' },
                    ],
                },
                {
                    key: 'year',
                    items: [
                        { label: 'Option 3', value: 'option_3' },
                    ],
                },
            ]}
            />
            <Box>
                <Title variant='small'>Select and enter your payment details</Title>
                <Spacer />
                <Text color='dark'>By continuing you agree to our <Text color='danger'>Terms</Text></Text>
                <Spacer size='30px' />
                <Input
                    placeholder='Holder name'
                    value={data.holder_name}
                    onChangeText={holder_name => setData({ ...data, holder_name })} />
                <Spacer size='20px' />
                <Input
                    placeholder='Credit Card Number'
                    value={data.credit_card}
                    onChangeText={credit_card => setData({ ...data, credit_card })} />
                <Spacer size='20px' />
                <Touchable
                    onPress={() => picker.current.show(picker)}
                    width='100%'>
                    <Input
                        pointerEvents='none'
                        editable={false}
                        placeholder='03/2029' />
                </Touchable>
                <Spacer size='20px' />
                <Box row align='center'>
                    <Box spacing='0 10px 0 0'>
                        <Input
                            placeholder='CVV'
                            value={data.cvv}
                            onChangeText={cvv => setData({ ...data, cvv })} />
                    </Box>
                    <Box>
                        <Text>3 or 4 digits usually found on the signature strip</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default PaymentForm