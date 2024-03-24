import React, { useState, useEffect } from "react";

import api from '../../services/api'

import { Box, Spacer, ScrollView, Text } from '../../components'
import StoryList from "../../components/Story/list";
import Header from "../../components/Header";
import PostList from "../../components/Post/list";
import Empty from "../../components/Empty";

export const Feed = ({ navigation }) => {
    const [feed, setFeed] = useState({
        stories: [],
        posts: []
    })
    const [loading, setLoading] = useState(false)

    const getFeed = async () => {
        try {
            setLoading(true)
            setTimeout(async () => {
                const { data: feedData } = await api.get('/feed')
                setFeed(feedData)
                setLoading(false)
            }, 3000)
        } catch (err) {
            setLoading(false)
            alert(err.message)
        }
    }

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getFeed()
        })
        return unsubscribe
    }, [navigation])

    return (
        <Box background='light' align='center'>
            <Header title={'Explore'} />
            {loading &&
                <Empty loading message='Failed to load Feed!' />
            }
            {!loading &&
                <ScrollView>
                    <StoryList stories={feed?.stories} />
                    <Spacer />
                    <PostList posts={feed?.posts} />
                </ScrollView>
            }
        </Box>
    )
}

export default Feed;
