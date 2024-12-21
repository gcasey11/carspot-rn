import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function CarComponent({ carModel, carPhoto }: { carModel: string, carPhoto: string | null }) {
    return (
      <View style={styles.carContainer}>
      {carPhoto ? (
        <Image source={{ uri: carPhoto }} style={styles.carPhoto} />
      ) : (
        <View>
          <Text>No Photo</Text>
        </View>
      )}
      <Text style={styles.carModel}>{carModel}</Text>
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
      textAlign: 'center',
    },
    carContainer: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#f9f9f9',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    carModel: {
      fontSize: 18,
      textAlign: 'center',
    },
    placeholder: {
      textAlign: 'center',
    },
    carPhoto: {
      width: 100,
      height: 100,
      borderRadius: 10,
      marginBottom: 10,
    },


  });