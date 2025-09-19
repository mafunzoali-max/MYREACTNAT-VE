import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/abdoul.jpeg')}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>ABDOUL JOVIAL BEACH</Text>

        <Link href="/contact" asChild>
          <Pressable style={styles.link}>
            <Text style={{ color: 'white' }}>contact us </Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 120,
  },
  link: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 5,
  },
});