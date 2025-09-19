import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Appearance, ActivityIndicator, View } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
console.log(theme)
 return (
  <>
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.headerBackground },

        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="(beach)" options={{ headerShown: true }} /> */}
      <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: true }} />
      <Stack.Screen name="contact" options={{ title: 'Contact Us', headerTitle: 'beach boys' }} />
      <Stack.Screen name="menu" options={{ title: 'Menu', headerTitle: 'contact us' }} />
    </Stack>
    
    <StatusBar style="auto" />
  </>
);

}