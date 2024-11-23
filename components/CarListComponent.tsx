import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import CarComponent from './CarComponent';

export default function CarListComponent({
  carMake,
  carList,
}: {
  carMake: string;
  carList: string[];
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{carMake}</Text>
      <FlatList
        data={carList}
        keyExtractor={(item, index) => `${carMake}-${index}`}
        renderItem={({ item }) => <CarComponent carModel={item} />}
        horizontal // Enables horizontal scrolling
        showsHorizontalScrollIndicator={false} // Hides the scroll bar
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  horizontalList: {
    alignItems: 'center',
    gap: 50
  },
});
