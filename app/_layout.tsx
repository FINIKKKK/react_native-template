import React from 'react';
import {useFonts} from 'expo-font';
import {SplashScreen, Stack} from 'expo-router';
import {Provider} from "react-redux";
import {store} from "~store/store";

export {ErrorBoundary} from 'expo-router';

export const unstable_settings = {
    initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

/**
 * Базовый шаблон ----------------
 */
export default function RootLayout() {
    // Подключение шрифтов
    const [loaded, error] = useFonts({
        Bold: require('../assets/fonts/Circe-Bold.ttf'),
        Regular: require('../assets/fonts/Circe-Regular.ttf'),
        Light: require('../assets/fonts/Circe-Light.ttf'),
    });

    // Обработка ошибок загрузки шрифтов
    React.useEffect(() => {
        if (error) throw error;
    }, [error]);
    React.useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);
    if (!loaded) {
        return null;
    }

    return <RootLayoutNav/>;
}

// Все экраны приложения
const RootLayoutNav = () => {
    return (
        <Provider store={store}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
            </Stack>
        </Provider>
    );
};
