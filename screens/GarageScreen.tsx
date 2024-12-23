import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import CarListComponent from "../components/CarListComponent";
import { useRoute, RouteProp } from "@react-navigation/native";
import { BottomTabParamList } from "../App";

type Route = RouteProp<BottomTabParamList, "Garage">;

// Filters the CarMap based on both Make and Model
const filterCarMap = (
  carMap: {
    [key: string]: { model: string; photo: string | null }[];
  },
  query: string
) => {
  if (!query) return carMap;

  const queryLower = query.toLowerCase();
  const filteredCarMap: typeof carMap = {};

  Object.entries(carMap).forEach(([make, cars]) => {
    const makeMatches = make.toLowerCase().includes(queryLower);
    const filteredCars = cars.filter((car) =>
      car.model.toLowerCase().includes(queryLower)
    );

    if (makeMatches) {
      filteredCarMap[make] = cars;
    } else if (filteredCars.length > 0) {
      filteredCarMap[make] = filteredCars;
    }
  });

  return filteredCarMap;
};

export default function HomeScreen() {
  const route = useRoute<Route>();
  const { newCar } = route.params || {};
  const [searchQuery, setSearchQuery] = useState("");

  // CarMap is the map of all the user's cars
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

  // DisplayMap is a duplicate of carMap used for displaying the filtered search
  const [displayMap, setDisplayMap] = useState(carMap);

  // When a new car is added, it is sent to this method which adds it to the carMap
  useEffect(() => {
    if (newCar) {
      const { make, model, photo } = newCar;

      setCarMap((prevCarMap) => {
        const updatedMake = prevCarMap[make] || [];
        return {
          ...prevCarMap,
          [make]: [...updatedMake, { model, photo }],
        };
      });
    }
  }, [newCar]);


  // When the search query changes, the carmap is filterd
  useEffect(() => {
    setDisplayMap(filterCarMap(carMap, searchQuery));
  }, [searchQuery, carMap]);

  // Sets the search bar text with the current search query
  const handleSearchQueryChange = (text: string) => setSearchQuery(text);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search cars..."
        value={searchQuery}
        onChangeText={handleSearchQueryChange}
      />
      <ScrollView>
        {Object.entries(displayMap).map(([make, models]) => (
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
    backgroundColor: "#fff",
  },
  searchBar: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
