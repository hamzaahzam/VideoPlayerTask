import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    preloadingPlaceholder: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: 64,
        height: 64,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playArrow: {
        color: 'white',
    },
    video: Platform.Version >= 24 ? {} : {
        backgroundColor: 'black',
    },
    controls: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        height: 48,
        marginTop: -48,
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextVideoContainer: {
        position: "absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        right: 0,
        bottom: 60,
        padding: 10
    },
    nextVideoText: {
        color: 'white'
    },
    playControl: {
        color: 'white',
        padding: 8,
    },
    extraControl: {
        color: 'white',
        padding: 8,
    },
    seekBar: {
        alignItems: 'center',
        height: 30,
        flexGrow: 1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginLeft: -10,
        marginRight: -5,
    },
    seekBarFullWidth: {
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 0,
        marginTop: -3,
        height: 3,
    },
    seekBarProgress: {
        height: 3,
        backgroundColor: '#F00',
    },
    seekBarKnob: {
        width: 20,
        height: 20,
        marginHorizontal: -8,
        marginVertical: -10,
        borderRadius: 10,
        backgroundColor: '#F00',
        transform: [{ scale: 0.8 }],
        zIndex: 1,
    },
    seekBarBackground: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        height: 3,
    },
    overlayButton: {
        flex: 1,
    },
    activeDurationText: {
        paddingLeft: 8,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0
    },
    durationText: {
        color: 'white'
    }
});

export default styles;