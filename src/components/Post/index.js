import React from 'react'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { Text, Box, Cover, Touchable, Spacer } from '..';
import { colors } from '../../styles/theme.json'

const Post = () => {
    return (
        <Box fluid hasPadding>
            <Box row align='center'>
                <Cover image='https://i.pinimg.com/736x/23/31/bf/2331bf4032f0237bc4ce5e0f876cfd2a.jpg'
                    circle
                    height='50px'
                    width='50px' />
                <Box spacing='0 0 0 20px'>
                    <Text color='black' bold>Zoro Sola</Text>
                    <Text variant='small'>20 Minutes ago</Text>
                </Box>
                <Touchable align='flex-end' width='10%'>
                    <Icon name='options' size={15} color={`${colors.muted}`} />
                </Touchable>
            </Box>
            <Cover
                image='https://quartelgeneral.com/wp-content/uploads/2023/08/Roronoa-Zoro-One-Piece.jpg'
                width={'100%'}
                height={'200px'}
                spacing='10px 0'
                radius='10px'
            />
            <Box fluid row align='center'>
                <Box fluid row align='center'>
                    {Array.from(Array(3)).map(img => (
                        <Cover
                            image='https://geekdama.com/wp-content/uploads/2021/02/one-piece-sanji-postcover.jpg'
                            circle
                            width='30px'
                            height='30px'
                            border={`1px solid ${colors.dark}`}
                            spacing='0 -15px 0 0' />
                    ))}
                    <Text spacing='0 0 0 25px'>Liked by 10,098</Text>
                </Box>
                <Box row justify='flex-end'>
                    <Touchable width='24px' onPress={() => alert('You liked this post')}>
                        <Icon name='heart' size={24} color={`${colors.danger}`}
                        />
                    </Touchable>
                    <Touchable width='24px' spacing='0 15px' onPress={() => alert('Post a comment')} >
                        <Icon name='bubble' size={24} color={`${colors.black}`}
                        />
                    </Touchable>
                    <Touchable width='24px' onPress={() => alert('Share this post...')} >
                        <Icon name='share' size={24} color={`${colors.secondary}`}
                        />
                    </Touchable>
                </Box>
            </Box>
            <Spacer />
            <Text color='black'>
                Interview: Shoe Designer John Fluevog On New Book, Spirituality And ‘Slow Fashion’
            </Text>
        </Box>
    )
}

export default Post;