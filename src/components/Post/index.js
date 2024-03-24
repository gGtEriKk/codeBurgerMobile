import React from 'react'
import moment from 'moment'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

import { colors } from '../../styles/theme.json'

import { Text, Box, Cover, Touchable, Spacer } from '..';

const Post = ({ post }) => {
    return (
        <Box fluid hasPadding>
            <Box row align='center'>
                <Cover image={post?.owner?.photo}
                    circle
                    height='50px'
                    width='50px' />
                <Box spacing='0 0 0 20px'>
                    <Text color='black' bold>{post?.owner?.username}</Text>
                    <Text variant='small'>{moment(post?.createdAt).fromNow()}</Text>
                </Box>
                <Touchable align='flex-end' width='10%'>
                    <Icon name='options' size={15} color={`${colors.muted}`} />
                </Touchable>
            </Box>
            <Cover
                image={post?.cover}
                width={'100%'}
                height={'200px'}
                spacing='10px 0'
                radius='10px'
            />
            <Box fluid row align='center'>
                <Box fluid row align='center'>
                    {post?.likeInfos?.photos?.map(photo => (
                        <Cover
                            image={photo}
                            circle
                            width='30px'
                            height='30px'
                            border={`1px solid ${colors.dark}`}
                            spacing='0 -15px 0 0' />
                    ))}
                    <Text spacing='0 0 0 20px'>{post?.likeInfos?.description}</Text>
                </Box>
                <Box row justify='flex-end'>
                    <Touchable width='24px' onPress={() => alert('You liked this post')}>
                        <Icon name='heart' size={24} color={colors[post?.isLiked ? 'primary' : 'muted']}
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
                {post?.description}
            </Text>
        </Box>
    )
}

export default Post;