import { StyleSheet } from 'react-native';
import { colors, hp } from '../../constants';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.BLACK.description,
        marginBottom: hp(2),
        borderRadius: 7,
        width: "95%",
        alignSelf: "center",
        shadowColor: colors.BLACK.defaultBlack,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    imageContainer: {
        backgroundColor: colors.WHITE.defaultWhite,
        height: hp(20),
        overflow: "hidden",
    },
    imageStyle: {
        height: '100%',
        width: "100%"
    },
    title: {
        marginTop: hp(1),
        color: colors.WHITE.defaultWhite
    },
    durationContainer: {
        position: "absolute",
        right: 10,
        bottom: 10,
        backgroundColor: colors.BLACK.opacityBlack,
        padding: 5,
        borderRadius: 3
    },
    duration: {
        color: colors.WHITE.defaultWhite
    }
});

export default styles;
