import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppContext } from "../../contexts/app";

import { Title, Text, Button, Box, Spacer } from "../../components";

const Home = ({ navigation: { navigate, replace } }) => {
  const { setUser } = useContext(AppContext)
  const [loading, setLoading] = useState(true)

  const checkLogged = async () => {
    // AsyncStorage.clear()
    setLoading(true)

    const loggedUser = await AsyncStorage.getItem('@user')
    if (loggedUser) {
      setUser(JSON.parse(loggedUser))
      replace('Feed')
    } else {
      setLoading(false)
    }
  }

  useEffect(() => {
    checkLogged()
  }, [])

  return (
    <Box fluid background='dark' hasPadding>
      <Box fluid align='center' justify='center'>
        <Title color='light' variant='big' bold>LOOKAPP</Title>
        <Spacer size='10px' />
        <Text color='light' align='center' spacing='0 40px'>Stay on top of the fashion world
          and buy your favorite looks.</Text>
        {loading &&
          <>
            <Spacer size='40px' />
            <ActivityIndicator size='large' color='#fff' />
          </>
        }
      </Box>
      {!loading &&
        <Box fluid align='center' justify='center'>
          <Button block onPress={() => navigate('Login')}>
            <Text color='light'>SignIn my account</Text>
          </Button>
          <Spacer size='20px' />
          <Text color='light' underline onPress={() => navigate('Register')}>Create new account</Text>
        </Box>
      }
    </Box>
  );
};

export default Home;
