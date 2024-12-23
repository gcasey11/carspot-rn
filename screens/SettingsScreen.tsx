// TODO: Remove copied template for forms and sign up actions and replace with actual Settings Page content

import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Settings page features Coming Soon!</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});