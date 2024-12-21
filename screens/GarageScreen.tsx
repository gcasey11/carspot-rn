import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import CarListComponent from '../components/CarListComponent';
import { useRoute, RouteProp } from '@react-navigation/native';
import { BottomTabParamList } from '../App';  

type Route = RouteProp<BottomTabParamList, 'Garage'>;

export default function HomeScreen() {
  const route = useRoute<Route>();
  const { newCar } = route.params || {};

  const [carMap, setCarMap] = React.useState<{
    [key: string]: { model: string; photo: string | null }[];
  }>({
    Lamborghini: [
      { model: "Aventador", photo: null },
      { model: "Huracán", photo: null },
      { model: "Urus", photo: null },
    ],
    Porsche: [
      { model: "911", photo: null },
      { model: "Cayenne", photo: null },
      { model: "Taycan", photo: null },
    ],
    Ferrari: [
      { model: "488", photo: null },
      { model: "Roma", photo: null },
      { model: "SF90", photo: null },
    ],
  });
  
  React.useEffect(() => {
    if (newCar) {
      const { make, model, photo } = newCar;
  
      setCarMap((prevCarMap) => {
        // If the make already exists, add the new car to the list
        if (prevCarMap[make]) {
          return {
            ...prevCarMap,
            [make]: [
              ...prevCarMap[make],
              { model, photo }, // Add model and photo to the existing list
            ],
          };
        } else {
          // If the make doesn't exist, create a new list for the make
          return {
            ...prevCarMap,
            [make]: [{ model, photo }],
          };
        }
      });
  
      console.log("New car added:", newCar);
    }
  }, [newCar]);
  

  return (
    <View style={styles.container}>
      {/* Removed ScrollView and used FlatList for the entire list */}
      <ScrollView>
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
});
