import { StyleSheet } from 'react-native';
import { colors, hp, wp } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.BLACK.primary,
    },
    videoTitle: {
        fontSize: 20,
        color: colors.WHITE.defaultWhite,
        marginTop: hp(1)
    },
    videoDetailContainer: {
        paddingHorizontal: '3%',
    },
    videoDetails: {
        marginTop: hp(.5),
        color: colors.GRAY.imageContainer
    },
    videoDescription: {
        marginTop: hp(.5),
        color: colors.GRAY.imageContainer
    },
    moreButtonText: {
        color: colors.WHITE.defaultWhite
    },
    moreButton: {
        marginBottom: hp(2)
    }
});

export default styles;
