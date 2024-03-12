import React from 'react'
import { Box, ScrollView } from '..';
import Post from '.';

const PostList = () => {
    return (
        <ScrollView fluid>
            <Box>
                {Array.from(Array(25))?.map(item => (
                    <Post/>
                ))}
            </Box>
        </ScrollView>
    )
}

export default PostList;