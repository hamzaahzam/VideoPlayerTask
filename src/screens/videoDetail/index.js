import React, { useState, useCallback } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, FlatList } from 'react-native';
import { hp, videoDetailStrings, wp } from '../../constants';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedVideo, updateList, videoListReducer } from '../../redux/videoListSlice';
import { ThumbnailCard, CustomVideoPlayer } from '../../components';
import { debounce, cloneDeep } from 'lodash';

export const VideoDetail = () => {
  // Select videoList and selectedVideo from the Redux store
  const { videoList, selectedVideo } = useSelector(videoListReducer);
  const dispatch = useDispatch();

  // State to toggle the video description expansion
  const [showDescription, setShowDescription] = useState(false);

  // Function to toggle the video description expansion
  const toggleTextExpansion = () => {
    setShowDescription(!showDescription);
  };

  // Function to handle video item press
  const handleVideoPress = (item) => {
    // Check if the selected video is not the same as the item clicked
    if(selectedVideo?.id !== item.id) {
      dispatch(setSelectedVideo(item));
    }
  };

  // Callback function to save the playback position with debounce
  const savePlaybackPosition = useCallback(
    debounce((event) => {
      // Create a deep clone of videoList
      const list = cloneDeep(videoList);
      const index = list.findIndex((obj) => obj.id === selectedVideo.id);

      // Update the playback position in the vieolist present in redux
      if(index !== -1) {
        list[index].playBackPosition = Math.round(event.currentTime) === Math.round(event.seekableDuration)
          ? 0
          : event.currentTime;
        dispatch(updateList(list));
      }
    }, 500),
    [selectedVideo.id, videoList]
  );

  // Function to move to the next video in the list
  const moveToNextVideo = () => {
    // Create a deep clone of videoList
    const list = cloneDeep(videoList);
    const index = list.findIndex((obj) => obj.id === selectedVideo.id);

    if(index !== -1) {
      // Calculate the index of the next video to play
      const nextVideoToPlay = index + 1 === list.length ? 0 : index + 1;
      dispatch(setSelectedVideo(videoList[nextVideoToPlay]));
    }
  };

  // Function to render each video item in the list
  const renderVideoItem = ({ item, index }) => (
    <ThumbnailCard
      onPress={ () => handleVideoPress(item) }
      index={ index }
      item={ item }
      selectedVideo={ selectedVideo }
      isNowPlaying={ selectedVideo.id === item.id }
    />
  );

  return (
    <View style={ styles.container }>
      <SafeAreaView />

      {/* Custom video player */ }
      <CustomVideoPlayer
        video={ { uri: selectedVideo.videoUrl } }
        autoplay={ true }
        videoWidth={ wp(100) }
        videoHeight={ hp(25) }
        thumbnail={ { uri: selectedVideo.thumbnailUrl } }
        startNextVideo={ moveToNextVideo }
        onProgress={ savePlaybackPosition }
        selectedVideo={ selectedVideo }
      />

      {/* Video details section */ }
      <View style={ styles.videoDetailContainer }>
        <Text style={ styles.videoTitle }>{ selectedVideo.title }</Text>
        <Text style={ styles.videoDetails }>
          { `${selectedVideo.views} ${videoDetailStrings.views} ${selectedVideo.uploadTime}` }
        </Text>
        <Text style={ styles.videoDescription }>
          { `${showDescription ? selectedVideo.description : `${selectedVideo.description.slice(0, 10)}...`}` }
        </Text>
        { selectedVideo.description.length > 10 && (
          <TouchableOpacity style={ styles.moreButton } onPress={ toggleTextExpansion }>
            <Text style={ styles.moreButtonText }>{ showDescription ? `${videoDetailStrings.less}` : `${videoDetailStrings.less}` }</Text>
          </TouchableOpacity>
        ) }
      </View>

      {/* List of videos using FlatList */ }
      <FlatList
        data={ videoList }
        renderItem={ renderVideoItem }
        keyExtractor={ (item, index) => `${item.id}-${index}` }
      />
    </View>
  );
};