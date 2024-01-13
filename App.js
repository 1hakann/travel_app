import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {

  const [fontsLoaded] = useFonts({
    "Cera Pro Regular": require('./assets/fonts/regular.otf'),
    "Cera Pro Medium": require('./assets/fonts/medium.otf'),
    "Cera Pro Bold": require('./assets/fonts/bold.otf'),
    "Cera Pro Light": require('./assets/fonts/light.otf'),
    "Cera Pro Extra Bold": require('./assets/fonts/xtrabold.otf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={ styles.textStyle }>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    fontFamily: "Cera Pro Bold",
    fontSize: 18,
  }
});
