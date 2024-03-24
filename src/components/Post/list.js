import React from 'react'
import { Box, ScrollView } from '..';
import Post from '.';

const PostList = ({ posts }) => {
    return (
        <ScrollView fluid>
            <Box>
                {posts?.map(post => (
                    <Post post={post}/>
                ))}
            </Box>
        </ScrollView>
    )
}

export default PostList;