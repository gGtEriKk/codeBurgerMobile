import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native';

import { Box, Text, Touchable, Spacer } from '..';
import { colors } from '../../styles/theme.json'

const Picker = ({ options = [], initialValue = '', title = '', onChange = (value) => { } }) => {
    const [selected, setSelected] = useState('')

    useEffect(() => {
        setSelected(initialValue)
    }, [])

    return (
        <>
            <Text bold color='black'>{title}</Text>
            <Box height='15%' row align='center' fluid justify='space-between'>
                {options?.map(opt => (
                    <Touchable
                        onPress={() => {
                            setSelected(opt?.value)
                            onChange(opt?.value)
                        }}
                        radius='10px'
                        style={[
                            styles.base,
                            styles[selected === opt?.value ? 'checked' : 'unchecked']
                        ]}>
                        <Text
                            bold
                            style={styles[selected === opt?.value ? 'textChecked' : undefined]}>
                            {opt?.label}
                        </Text>
                    </Touchable>
                ))}
            </Box>
        </>
    )
}

const styles = StyleSheet.create({
    base: {
        maxWidth: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    unchecked: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: colors.muted
    },
    checked: {
        backgroundColor: colors.primary
    },
    textChecked: {
        color: colors.light
    }
})

export default Picker;