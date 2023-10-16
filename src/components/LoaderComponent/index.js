import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

// LoaderComponent displays an activity indicator (loading spinner).
// Props:
export const LoaderComponent = ({ loaderColor }) => (
    <View style={ styles.loaderStyle }>
        {/* ActivityIndicator component with a specified size and color */ }
        <ActivityIndicator size="large" color={ loaderColor } />
    </View>
);