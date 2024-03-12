import React from "react";
import { Title, Text, Button, Box, Spacer, Input } from "../../components";

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SignIn = ({ navigation: { navigate, replace } }) => {
    return (
        <Box background='light' hasPadding align='center' justify='center'>
            <Title color='dark' variant='big' bold>LOOKAPP</Title>
            <Spacer size='50px' />
            <Title align='center' bold>SignIn my account</Title>

            <Spacer size='30px' />

            <Input placeholder='Email' />
            <Spacer />
            <Input placeholder='Password' secureTextEntry />

            <Spacer size='50px' />

            <Button block>
                <Text color='light' onPress={() => replace('Feed')}>SignIn into my account</Text>
            </Button>
            <Spacer size='20px' />
            <Text underline onPress={() => navigate('Register')}>Create new account</Text>
        </Box>
    );
};

export default SignIn;