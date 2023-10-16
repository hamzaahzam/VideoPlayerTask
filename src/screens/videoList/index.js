import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedVideo, videoListReducer } from '../../redux/videoListSlice';
import styles from './styles';
import { ThumbnailCard } from '../../components';
import { navigate } from '../../navigation/navigationRef';

export const VideoList = () => {
    // Select the videoList from the Redux store
    const { videoList } = useSelector(videoListReducer);

    // Get the dispatch function to update the Redux store
    const dispatch = useDispatch();

    // Function to handle when a video is pressed
    const handleVideoPress = (item) => {
        // Dispatch an action to set the selected video in Redux
        dispatch(setSelectedVideo(item));

        // Navigate to the "VideoDetail" screen
        navigate("VideoDetail");
    };

    // Function to render each video item in the list
    const renderVideoItem = ({ item, index }) => (
        <ThumbnailCard
            index={ index }
            item={ item }
            onPress={ () => handleVideoPress(item) }
        />
    );

    return (
        <SafeAreaView style={ styles.container }>
            <FlatList
                data={ videoList }
                renderItem={ renderVideoItem }
                keyExtractor={ (item, index) => `${item.id}-${index}` }
            />
        </SafeAreaView>
    );
};

