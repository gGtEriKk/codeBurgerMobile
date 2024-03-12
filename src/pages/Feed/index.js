import React from "react";
import { Box, Spacer, ScrollView } from '../../components'

import StoryList from "../../components/Story/list";
import Header from "../../components/Header";
import PostList from "../../components/Post/list";

export const Feed = () => {
    return (
        <Box background='light' align='center'>
            <Header title={'Explore'} />
            <ScrollView>
                <StoryList />
                <Spacer />
                <PostList />
            </ScrollView>
        </Box>
    )
}

export default Feed;
