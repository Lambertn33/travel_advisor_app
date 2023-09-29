import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';

const PlacesList = () => {
  // Sample data for the cards
  const menus = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
  ];

  // Function to render the cards
  const renderMenus = () => {
    return menus.map((menu) => (
      <View key={menu.id} style={styles.card}>
        <Text>{menu.title}</Text>
      </View>
    ));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.row}>{renderMenus()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});

export default PlacesList;