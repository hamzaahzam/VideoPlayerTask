import React from "react";
import { View } from "react-native";
import styles from "./styles";
import { ICON_CONSTANTS } from "../../constants";

// ErrorComponent displays an error icon when something goes wrong.
export const ErrorComponent = () => (
    <View style={ styles.loaderStyle }>
        {/* Display an error icon using Material Icon from react-native-vector-icon */ }
        <ICON_CONSTANTS.MIcon name="broken-image" style={ styles.brokenImage } />
    </View>
);