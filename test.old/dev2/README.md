1.expo init dev2
Choose a template: expo-template-tabs

2.expo eject
? How would you like to eject your app?
  Read more: https://docs.expo.io/versions/latest/expokit/eject/ React Native
We have a couple of questions to ask you about how you'd like to name your app:
? What should your app appear as on a user's home screen? com.shalleryu.dev2
? What should your Android Studio and Xcode projects be called? dev2

3.Using Expo for web in a react-native init project
Create index.web.js
Add to your app.json...
https://github.com/expo/web-examples/blob/master/react-native-init/README.md

4.Using Unimodules in Web
yarn add react-native-unimodules
https://github.com/unimodules/react-native-unimodules

5.yarn add react-native-gesture-handler
https://reactnavigation.org/docs/en/getting-started.html#installation

yarn add --dev jetifier
https://github.com/mikehardy/jetifier

6.A problem occurred evaluating project ':expo-gl-cpp'.
> Cannot get property 'absolutePath' on null object
[gl-cpp] fix Gradle tasks being executed in configuration phase (#4697)

https://github.com/expo/expo/commit/697e4e45eefe937091f8994643e7f2485387c65e

use:
fix\expo-gl-cpp\android

7.Could not resolve all files for configuration ':app:debugRuntimeClasspath'.
> Could not find com.google.android:cameraview:1.0.0.

https://github.com/expo/expo/issues/3639

paste:
maven {
  // expo-camera bundles a custom com.google.android:cameraview
  url "$rootDir/../node_modules/expo-camera/android/maven"
}
as the last dependency in android/build.gradle -> allprojects/repositories

8.Failed to capture fingerprint of output files for task ':expo-av:packageDebugResources' property 'incrementalFolder' during up-to-date check.
> Could not read path

https://github.com/wix/react-native-navigation/issues/4858

cd android
./gradlew clean
cd ..
react-native run-android

9.Execution failed for task ':app:processDebugManifest'.
> Manifest merger failed : Attribute data@scheme at AndroidManifest.xml requires a placeholder substitution but no value for <appAuthRedirectScheme> is provided.

https://github.com/openid/AppAuth-Android/issues/128

Add redirect scheme manifest placeholder
To capture the authorization redirect, add the following property to the defaultConfig in android/app/build.gradle:

android {
  defaultConfig {
    manifestPlaceholders = [
      appAuthRedirectScheme: 'io.identityserver.demo'
    ]
  }
}
The scheme is the beginning of your OAuth Redirect URL, up to the scheme separator (:) character.
https://github.com/FormidableLabs/react-native-app-auth#add-redirect-scheme-manifest-placeholder

10.remove expo by hand and Done.

