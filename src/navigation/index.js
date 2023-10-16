import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './navigationRef';
import { VideoDetail, VideoList } from '../screens';

const Stack = createNativeStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
    animationEnabled: false,
});
export const Navigation = () => {
    return (
        <NavigationContainer ref={ navigationRef }>
            <Stack.Navigator>
                <Stack.Screen name="VideoList" component={ VideoList } options={ navOptionHandler } />
                <Stack.Screen name="VideoDetail" component={ VideoDetail } options={ navOptionHandler } />
            </Stack.Navigator>
        </NavigationContainer>
    );
};