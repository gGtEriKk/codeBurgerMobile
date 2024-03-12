import React from 'react'
import { Cover, Text, Touchable, Box } from '..';
import { colors } from '../../styles/theme.json'

const Story = () => {
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
                image='https://e0.pxfuel.com/wallpapers/300/198/desktop-wallpaper-one-piece-top-ultra-one-piece-background-one-piece-season-1-thumbnail.jpg'>
                <Box justify='space-between'
                    fluid
                    hasPadding
                    background={`${colors.dark}80`}>
                    <Cover image='https://sm.ign.com/ign_br/screenshot/default/blob_hbbk.jpg'
                        circle
                        border={`1px solid ${colors.warning}`}
                        height='40px' 
                        width='40px'/>
                    <Box
                        height='40px'
                        justify='flex-end'>
                        <Text color='light' bold>luffyGear5</Text>
                        <Text color='light' variant='small'>2 min ago</Text>
                    </Box>
                </Box>
            </Cover>
        </Touchable>
    )
}

export default Story;