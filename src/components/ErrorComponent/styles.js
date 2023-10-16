import { StyleSheet } from 'react-native';
import { hp } from '../../constants';

const styles = StyleSheet.create({
    loaderStyle: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        height: '100%',
        width: "100%"
    },
    brokenImage: {
        alignSelf: "center",
        fontSize: hp(7)
    }
});

export default styles;
