import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Search, Detail, Recommended } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Cera Pro Regular": require('./assets/fonts/regular.otf'),
    "Cera Pro Medium": require('./assets/fonts/medium.otf'),
    "Cera Pro Bold": require('./assets/fonts/bold.otf'),
    "Cera Pro Light": require('./assets/fonts/light.otf'),
    "Cera Pro Extra Bold": require('./assets/fonts/xtrabold.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='Detail' component={Detail} options={{ headerShown: false }} />
        <Stack.Screen name='Recommended' component={Recommended} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}