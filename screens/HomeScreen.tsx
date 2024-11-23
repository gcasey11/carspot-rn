import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CarListComponent from '../components/CarListComponent';

export default function HomeScreen() {
  const [carMap, setCarMap] = useState({
    Lamborghini: ["Aventador", "Huracán", "Urus"],
    Porsche: ["911", "Cayenne", "Taycan"],
    Ferrari: ["488", "Roma", "SF90"],
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {Object.entries(carMap).map(([make, models]) => (
          <CarListComponent key={make} carMake={make} carList={models} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
