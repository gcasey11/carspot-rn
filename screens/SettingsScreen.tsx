// TODO: Remove copied template for forms and sign up actions and replace with actual Settings Page content

import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import create = StyleSheet.create;
import {firebaseConfig} from "../firebaseConfig";

export default function SettingsScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  useEffect(() => {

    // Trigger form validation when name,
    // email, or password changes
    validateForm();
  }, [name, email, password]);

  const validateForm = () => {
    let errors = {};

    // Validate name field
    if (!name) {
      errors.name = 'Name is required.';
    }

    // Validate email field
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    // Validate password field
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (isFormValid) {
      createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            // Form is valid, perform the submission logic
            console.log('Form submitted successfully!');
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    } else {

      // Form is invalid, display error messages
      console.log('Form has errors. Please correct them.');
    }
  };

  return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        <TouchableOpacity
            style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
            disabled={!isFormValid}
            onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

        {/* Display error messages */}
        {Object.values(errors).map((error, index) => (
            <Text key={index} style={styles.error}>
              {error}
            </Text>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 20,
    marginBottom: 12,
  },
});