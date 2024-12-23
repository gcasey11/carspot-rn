import * as ImagePicker from 'expo-image-picker';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import React, { useState } from 'react';
import { storage } from '../firebaseConfig';  // Import storage from the config file
import { ref, uploadBytes } from 'firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../App'; // Adjust the path accordingly



export default function AddCarScreen() {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [photo, setPhoto] = useState<string | null>(null);
  const navigation = useNavigation<BottomTabNavigationProp<BottomTabParamList>>();

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const selectedPhotoUri = result.assets[0].uri;
      setPhoto(selectedPhotoUri);
    } else {
      console.log('Photo selection was canceled');
    }
  };

  const handleSubmit = async () => {
    const newCar = {
      make,
      model,
      photo,
    };
  
    if (newCar.photo !== null) {
      const selectedPhotoUri = newCar.photo;
      setMake('');
      setModel('');
      setPhoto(null);
      navigation.navigate('Garage', { newCar } as { newCar: { make: string; model: string; photo: string | null } });
      // try {
      //   // Extract file name from the URI
      //   const fileName = selectedPhotoUri.split('/').pop();
      //   const storageRef = ref(storage, 'car_photos/' + fileName);
  
      //   // Convert the URI to a blob for uploading
      //   const response = await fetch(selectedPhotoUri);
      //   const blob = await response.blob();
  
      //   // Upload the blob to Firebase Storage
      //   await uploadBytes(storageRef, blob);
  
      //   console.log('Image uploaded to Firebase successfully');
  
      //   // Now navigate to the "Garage" (HomeScreen) tab and pass the newCar object
      //   // Explicitly typing the navigation call
      //   navigation.navigate('Garage', { newCar } as { newCar: { make: string; model: string; photo: string | null } });
      // } catch (error) {
      //   console.error('Error uploading image to Firebase Storage:', error);
        
      // }
    }
  };

  return (
    <View style={styles.container}>
      {photo ? (
        // If photo is not null, show this TouchableOpacity
        <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
          <Image source={{ uri: photo }} style={styles.image} />
        </TouchableOpacity>
      ) : (
        // If photo is null, show this TouchableOpacity
        <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
          <Text style={styles.photoButtonText}>Choose Photo</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.label}>Make:</Text>
      <TextInput
        style={styles.input}
        value={make}
        onChangeText={setMake}
        placeholder="Enter car make"
      />

      <Text style={styles.label}>Model:</Text>
      <TextInput
        style={styles.input}
        value={model}
        onChangeText={setModel}
        placeholder="Enter car model"
      />

      <Button title="Add Car" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    marginBottom: 20,
    borderRadius: 5,
  },
  photoButton: {
    backgroundColor: '#a3a3a3',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    height: '50%',
  },
  photoButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    margin: 'auto',
  },
});
