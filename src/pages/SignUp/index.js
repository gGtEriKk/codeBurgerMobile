import React from "react";

import { Title, Text, Button, Box, Spacer, Input } from "../../components";

const SignUp = ({ navigation: { navigate } }) => {
    return (
        <Box background='light' hasPadding align='center' justify='center'>
            <Title color='dark' variant='big'>Create new account</Title>
            <Spacer size='10px' />
            <Text align='center' spacing='0 40px'>Enter your details below</Text>

            <Spacer size='50px' />

            <Input placeholder='Name' />
            <Spacer />
            <Input placeholder='Email' />
            <Spacer />
            <Input placeholder='Password' secureTextEntry />

            <Spacer size='50px' />

            <Button block onPress={() => alert('Conta criada com sucesso!!!')}>
                <Text color='light'>Create new account</Text>
            </Button>
            <Spacer size='20px' />
            <Text underline onPress={() => navigate('Login')}>Back to SignIn</Text>
        </Box>
    );
};

export default SignUp;