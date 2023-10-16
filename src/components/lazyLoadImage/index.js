import React, { useState, useRef, useCallback, useMemo } from "react";
import { Animated, View } from "react-native";
import { colors } from "../../constants";
import { LoaderComponent } from "../LoaderComponent";
import { ErrorComponent } from "../ErrorComponent";

// LazyLoadImage component for asynchronously loading and displaying images with optional loading and error components.
export const LazyLoadImage = (props) => {
    const {
        loaderColor = 'black',
        renderErrorComponent = <ErrorComponent />,
        renderLoaderComponent = <LoaderComponent loaderColor={ loaderColor } />
    } = props;

    // State for tracking loading and error states
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    // Animated opacity value for fade-in effect
    const opacity = useRef(new Animated.Value(0));

    // Callback function when the image is successfully loaded
    const onLoad = useCallback(() => {
        Animated.timing(opacity.current, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setIsLoading(false);
    }, []);

    // Callback function when an error occurs during image loading
    const onError = useCallback(() => {
        setIsLoading(false);
        setIsError(true);
    }, []);

    // Function to interpolate the scale of the image for a visual effect
    const scale = useCallback(() =>
        opacity.current.interpolate({
            inputRange: [0, 1],
            outputRange: [0.85, 1],
        }), []);

    // Computed image styles, including opacity, scale, and background color
    const imageStyle = useMemo(() => {
        return {
            ...props.style,
            opacity: opacity.current,
            transform: [{ scale: scale() }],
            backgroundColor: colors.WHITE.background,
        };
    });

    return (
        <View>
            <Animated.Image
                { ...props }
                onLoad={ onLoad }
                onError={ onError }
                style={ imageStyle }
            />
            { isLoading ? renderLoaderComponent : null }
            { isError ? renderErrorComponent : null }
        </View>
    );
};
