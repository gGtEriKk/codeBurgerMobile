import React from 'react'
import { Box, Text, ScrollView } from '..';
import Story from '.';

const StoryList = ({ stories }) => {
    return (
        <Box fluid height='300px'>
            <Box row fluid justify='space-between' hasPadding height='60px'>
                <Text color='dark' bold>
                    Stories
                </Text>
                <Text color='danger' variant='small' underline>
                    Show All
                </Text>
            </Box>
            <ScrollView horizontal style={{
                paddingLeft: 20,
            }}>
                {stories?.map(story => <Story story={story}/>)}
            </ScrollView>
        </Box>
    )
}

export default StoryList;