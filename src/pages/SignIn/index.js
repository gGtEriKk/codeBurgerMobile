import React, { useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import api from "../../services/api";
import { AppContext } from '../../contexts/app'

import { Title, Text, Button, Box, Spacer, Input } from "../../components";

const SignIn = ({ navigation: { navigate, replace } }) => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const { setUser: setUserContext } = useContext(AppContext)

    const requestLogin = async () => {
        try {
            if (user.email?.length === 0 || user.password?.length === 0) {
                alert('Fill all fields!')
                return false
            }

            const { data: users } = await api.get('/users', {
                params: {
                    email: user.email?.toLocaleLowerCase(),
                    password: user.password,
                }
            })
            const [loggedUser] = users
            if (!loggedUser) {
                alert('User not found!')
                return false
            }
            await AsyncStorage.setItem('@user', JSON.stringify(loggedUser))

            setUserContext(loggedUser)
            replace('Feed')
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <Box background='light' hasPadding align='center' justify='center'>
            <Title color='dark' variant='big' bold>LOOKAPP</Title>
            <Spacer size='50px' />
            <Title align='center' bold>SignIn my account</Title>

            <Spacer size='30px' />

            <Input
                placeholder='Email'
                value={user.email}
                onChangeText={email =>
                    setUser({
                        ...user, email
                    })} />
            <Spacer />
            <Input
                placeholder='Password'
                secureTextEntry
                value={user.password}
                onChangeText={password =>
                    setUser({
                        ...user, password
                    })} />

            <Spacer size='50px' />

            <Button block onPress={() => requestLogin()}>
                <Text color='light'>SignIn into my account</Text>
            </Button>
            <Spacer size='20px' />
            <Text underline onPress={() => navigate('Register')}>Create new account</Text>
        </Box>
    );
};

export default SignIn;