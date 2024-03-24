import React from 'react'
import moment from 'moment';

import { colors } from '../../styles/theme.json'

import { Cover, Text, Touchable, Box } from '..';

const Story = ({ story }) => {
    return (
        <Touchable
            onPress={() => alert('View Story')}
            background='blue'
            radius='10px'
            height='200px'
            spacing='0 10px 0 0'
            width='150px'>
            <Cover
                width='100%'
                height='100%'
                image={story?.cover}>
                <Box justify='space-between'
                    fluid
                    hasPadding
                    background={`${colors.dark}80`}>
                    <Cover image={story?.owner?.photo}
                        circle
                        border={`1px solid ${colors.warning}`}
                        height='40px' 
                        width='40px'/>
                    <Box
                        height='40px'
                        justify='flex-end'>
                        <Text color='light' bold>{story?.owner?.username}</Text>
                        <Text color='light' variant='small'>{moment(story?.createdAt).fromNow()}</Text>
                    </Box>
                </Box>
            </Cover>
        </Touchable>
    )
}

export default Story;