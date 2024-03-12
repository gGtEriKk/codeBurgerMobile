import React from "react";
import { SafeAreaView, StatusBar, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { Box, Title, Touchable } from '../'
import { colors } from '../../styles/theme.json'
import utils from '../../utils'

const Header = ({ title = 'Explore', right = null, goBack = false }) => {
    const navigation = useNavigation();

    // fluid height='80px' justify='center' border={`1px solid ${colors.muted}50`}

    return (
        <View style={{
            borderBottomWidth: 1,
            borderStyle: 'solid',
            borderBottomColor: utils.toAlpha(colors.muted, 40),
            backgroundColor: colors.light
        }}>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Touchable
                    hasPadding
                    width='15%'
                    align='center'
                    onPress={() => navigation[!goBack ? 'openDrawer' : 'goBack']()}>
                    <Icon name={!goBack ? 'menu' : 'arrow-left'} size={20} color={`${colors.muted}`} />
                </Touchable>
                <Box align='center'><Title>{title}</Title></Box>
                {right ? right() : <Touchable hasPadding width='15%'></Touchable>}
            </SafeAreaView>
        </View>
    )
}

export default Header