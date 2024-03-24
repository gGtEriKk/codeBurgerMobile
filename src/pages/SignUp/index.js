import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppContext } from '../../contexts/app'
import api from "../../services/api";

import { Title, Text, Button, Box, Spacer, Input } from "../../components";

const SignUp = ({ navigation: { navigate, replace } }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { setUser: setUserContext } = useContext(AppContext)

    const createUser = async () => {
        try {
            setLoading(true)
            if (user.name?.length === 0 ||
                user.email?.length === 0 ||
                user.password?.length === 0
            ) {
                alert('Fill all fields!')
                return false
            }
            const { data: loggedUser } = await api.post('/users', user)
            navigate('Login')

            if(!loggedUser){
                setLoading(false)
                alert('Não foi possível concluir o cadastro. Tente novamente!')
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
            <Title color='dark' variant='big'>Create new account</Title>
            <Spacer size='10px' />
            <Text align='center' spacing='0 40px'>Enter your details below</Text>
            <Spacer size='50px' />
            <Input
                editable={!loading}
                placeholder='Name'
                value={user.name}
                onChangeText={name => {
                    setUser({
                        ...user, name
                    })
                }} />
            <Spacer />
            <Input
                editable={!loading}
                placeholder='Email'
                value={user.email}
                onChangeText={email => {
                    setUser({
                        ...user, 
                        email: email?.toLowerCase()
                    })
                }} />
            <Spacer />
            <Input
                editable={!loading}
                placeholder='Password'
                secureTextEntry
                value={user.password}
                onChangeText={password => {
                    setUser({
                        ...user, password
                    })
                }} />

            <Spacer size='50px' />

            {!loading &&
                <>
                    <Button block onPress={() => createUser()}>
                        <Text color='light'>Create new account</Text>
                    </Button>
                    <Spacer size='20px' />
                    <Text underline onPress={() => navigate('Login')}>Back to SignIn</Text>
                </>
            }
            {loading && <ActivityIndicator />}
        </Box>
    );
};

export default SignUp;