# 📜 Basic Overview

This project is an attempt at the React Native Engineer coding task for Gerald to implement an animated `Drawer Navigation`

## App Preview

![app preview](./src//assets/preview.mp4).

# 🛠 Tech Details

This project was built primarily with `React Native CLI`, `Typescript`, `react-navigation` (stack, drawer and bottom tabs), and `react-native-reanimated`

Other tools used for maintaining a standard project workflow and structure include `eslint` for linking and `prettier` for code formatting and the `yarn` for package management.

## ⚙️ Setting up & Running the Project

- After cloning the project, run `$ cd animated-drawer-rn`
- Install all the js dependencies using `$ yarn` or `$ yarn install`

```
💡 If you'll be running on an iOS Simulator, you should consider running `cd ios && pod install`
in the root of the project to install all native pods right after the previous step
```

- Now you can start the project by running either `$ yarn ios` or `$ yarn android` in the root of the project to run the project in your iOS Simulator or Android Emulator

### Available Scripts

In the project directory, you can run

#### yarn start

Runs the metro bundler for the app.
Open the app previously installed on your simulator to view it.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### yarn test

Launches the test runner in the interactive watch mode.

#### yarn ios|android

Builds the app, installs it on your simulator and also runs the metro server.

#### yarn run lint

Check if the code follows the ESLint configuration

## 🧱 Project Structure

### The top level directory structure is as follows:

- [@types](src%2F%40types) - Contains Interfaces, enum, types, declarations
- [assets](src%2Fassets) - Contains global static assets such as images, svgs, brand logo, etc.
- [components](src%2Fcomponents) - Contains globally shared/reusable components, such as layout (navigation components, headers), buttons etc
- [constants](src%2Fconstants) - Contains the global app constants (like ui constants, shared styles, etc)
- [hooks](src%2Fhooks) - Contains custom hooks for the app
- [navigation](src%2Fnavigation) - Contains all navigations and their wrappers for the app for the app (Drawer, Stack, Tabs etc)
- [screens](src%2Fscreens) - The majority of the app would be contained here as it holds all the screen components for the various modules of the app
- [utilities](src%2Futilities) - Contains utilities [functions], helpers, and the likes
- [services](src%2Fservices) - Would contain the API related services for the app

# ⚡️ Walkthrough of my solution

- As previously mentioned in the previous sections of this README, I made use of react-navigation's Drawer, Stack and Tab navigations to achieve the required navigations of the app.

- As for the animation of the drawer navigation itself, to implement the given design (the gif), I was able to achieve the transformations (rotate and translate) of the main drawer screen scene and the drawer content wrapper by using `react-native-reanimated` 2's `useAnimatedStyle` hook while interpolating over the value for the `drawerProgress`.

- As for the behavior of drawer list itself seemingly hiding behind the scene, I was able to achieve a similar effect by simply overriding the value of the `drawerType` screen option for the drawer navigator and setting its value to `back`.

- Breaking down the Drawer Navigation into different parts made it considerably easier to manage the different parts of the entire component while also applying the appropriate styles and animations to each of them. In my solution, I made a few components to achieve the desired behavior some of the key ones being:
  - [CustomDrawer](src/navigation/Drawer/CustomDrawer.tsx) being the customized implementation of the main drawer content (this component holds the menu items for the drawer navigation)
  - [DrawerScreen](src/components/layout/navigation/drawer/DrawerPageLayout/DrawerScreen.tsx) - Is a Layout wrapper for the main scene for the different screens in the drawer navigator (the layout being the basic structure of the screen) and wraps the main screen components
  - [DrawerPageLayout](src/components/layout/navigation/drawer/DrawerPageLayout/DrawerScreen.tsx) - Is an animation wrapper I created for the DrawerScreen.
