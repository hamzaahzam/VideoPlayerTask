# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Folder Structure

```plaintext
project/
  ├── src/
  │    ├── assets/
  │    ├── components/
  │    ├── screens/
  │    ├── navigation/
  │    ├── constants/
  │    ├── redux/
  │    ├── ...
  ├── ...
```

# Third Party Packages Information
1. **@react-native-async-storage/async-storage**:
   - **Version**: ^1.19.3
   - **Description**: AsyncStorage is a simple, unencrypted, asynchronous, persistent, key-value storage system for React Native. It is commonly used to store small amounts of data on the device.

2. **@react-navigation/native**:
   - **Version**: ^6.1.8
   - **Description**: React Navigation is a popular library for routing and navigation in React Native applications. @react-navigation/native is a core part of React Navigation, providing the essential navigation components and utilities.

3. **@react-navigation/native-stack**:
   - **Version**: ^6.9.14
   - **Description**: The Stack Navigator is a common navigation method in React Native applications. @react-navigation/native-stack is a package that provides a stack-based navigation system for React Navigation.

4. **@reduxjs/toolkit**:
   - **Version**: ^1.9.7
   - **Description**: Redux Toolkit is an official package recommended by the Redux team to simplify Redux configuration and usage. It provides utilities and abstractions for common Redux patterns.

5. **lodash**:
   - **Version**: ^4.17.21
   - **Description**: Lodash is a widely-used JavaScript utility library that simplifies many common programming tasks. It provides a large collection of functions to work with arrays, objects, and other data types.

6. **react-native-vector-icons**:
    - **Version**: ^10.0.0
    - **Description**: This package allows you to use custom icons in your React Native applications. It includes a collection of popular icon sets and makes it easy to add custom icons to your app.

7. **react-native-video**:
    - **Version**: ^5.2.1
    - **Description**: React Native Video is a library for adding video playback capabilities to your React Native applications. It provides components for embedding and controlling video playback.

8. **react-redux**:
    - **Version**: ^8.1.3
    - **Description**: React Redux is a library that integrates Redux state management with React components. It allows you to manage the application's state and efficiently connect it to your components.

9. **redux**:
    - **Version**: ^4.2.1
    - **Description**: Redux is a predictable state container for JavaScript applications. It is commonly used for managing the application's global state and handling complex data flows.

10. **redux-persist**:
    - **Version**: ^6.0.0
    - **Description**: Redux Persist is a library that adds persistent storage to Redux. It allows you to save and rehydrate the Redux store, enabling data persistence across app sessions.

11. **redux-thunk**:
    - **Version**: ^2.4.2
    - **Description**: Redux Thunk is a middleware for Redux that enables asynchronous actions. It is often used for handling side effects and making asynchronous API requests within Redux actions.

12. **react-native-video-player**:
    - **Description**: I have utilized the "react-native-video-player" component to create a customized UI wrapper for the React Native video component, implementing the necessary features for the given task..

These packages collectively provide a robust foundation for building and managing React Native applications, handling navigation, state management, data storage, and more.

