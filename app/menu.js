import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { Colors } from '@/constants/Colors';

import {MENU_İTEMS} from '@/constants/Menuİtems';
import {MENU_İMAGES} from '@/constants/Menuİmages';   
export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
  // bring above defined the styles
  const styles = createStyles(theme, colorScheme);

  // define container for the app
  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

  return (
    <Container style={styles.container}>
      <FlatList
        data={MENU_İTEMS}
        //keyExtractor is f for to pull data from data item above and its item wiill have its own key this is used when you don't have a proper key in object
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.title}>{item.description}</Text>
            <Image source={MENU_İMAGES[item.id-1]} style={styles.image} />
          </View>
        )}
      />
    </Container>
  );
};
// create the styles for our page
function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      padding: 10,
    },
    itemContainer: {
      marginBottom: 20,
      backgroundColor: theme.card,
      borderRadius: 10,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 5,
    },
    image: {
      width: '100%',
      height: 150,
      borderRadius: 8,
      resizeMode: 'cover',
    },
  });
}

