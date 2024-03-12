import React from "react";

import { Title, Text, Button, Box, Spacer } from "../../components";

const Home = ({ navigation: {navigate} }) => {
  return (
    <Box background='dark' hasPadding align='center' justify='center'>
      <Title color='light' variant='big' bold>LOOKAPP</Title>
      <Spacer size='10px' />
      <Text color='light' align='center' spacing='0 40px'>Stay on top of the fashion world
        and buy your favorite looks.</Text>
      <Spacer size='300px' />
      <Button block onPress={() => navigate('Login')}>
        <Text color='light'>SignIn my account</Text>
      </Button>
      <Spacer size='20px' />
      <Text color='light' underline onPress={() => navigate('Register')}>Create new account</Text>
    </Box>
  );
};

export default Home;
