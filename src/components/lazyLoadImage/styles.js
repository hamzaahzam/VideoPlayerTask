import { StyleSheet } from 'react-native';
import { colors, hp } from '../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE.defaultWhite,
        height: hp(20),
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        overflow: "hidden",
        marginBottom: hp(2)
    },
    loaderStyle: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    brokenImage: {
        alignSelf: "center",
        fontSize: hp(7)
    }
});

export default styles;
