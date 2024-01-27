import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding, Search, CountryDetail, Recommended, PlaceDetails, HotelDetail, HotelList, HotelSearch, SelectRoom, Payments, Settings } from './screens';
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
        <Stack.Screen name='CountryDetail' component={CountryDetail} options={{ headerShown: false }} />
        <Stack.Screen name='Recommended' component={Recommended} options={{ headerShown: false }} />
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{ headerShown: false }} />
        <Stack.Screen name='HotelDetail' component={HotelDetail} options={{ headerShown: false }} />
        <Stack.Screen name='HotelList' component={HotelList} options={{ headerShown: false }} />
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={ {headerShown: false}}/>
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={ {headerShown: false}}/>
        <Stack.Screen name='Payments' component={Payments} options={ {headerShown: false}}/>
        <Stack.Screen name='Settings' component={Settings} options={ {headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}