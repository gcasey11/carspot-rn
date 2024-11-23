import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CarComponent({ carModel }: { carModel: string }) {
    return (
      <View style={styles.carContainer}>
        <Text style={styles.carText}>{carModel}</Text>
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
    carText: {
      fontSize: 18,
      textAlign: 'center',
    },
  });