import React from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";
import { LazyLoadImage } from "../LazyLoadImage";

// ThumbnailCard component that displays a video thumbnail and title
// Props:
// - item: The video item data to display (title, thumbnail, duration)
// - onPress: Function to be called when the card is pressed
// - isNowPlaying: Boolean flag indicating if the video is currently playing
export const ThumbnailCard = ({ item, onPress, isNowPlaying }) => {
    return (
        <View style={ styles.container }>
            {/* Pressable area to trigger the onPress function */ }
            <Pressable onPress={ onPress } style={ styles.imageContainer }>
                {/* LazyLoadImage for the video thumbnail */ }
                <LazyLoadImage style={ styles.imageStyle } source={ { uri: item.thumbnailUrl } } />
                {/* Container for video duration or "Now Playing" indicator */ }
                <View style={ styles.durationContainer }>
                    <Text style={ styles.duration }>
                        { isNowPlaying ? 'Now Playing' : item.duration }
                    </Text>
                </View>
            </Pressable>
            {/* Display the video title */ }
            <Text style={ styles.title }>
                { item.title }
            </Text>
        </View>
    );
};