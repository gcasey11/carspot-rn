import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            {/*Name / Username Box*/}
            <View>
                <Text style={styles.text}>Name / Username / Pfp</Text>
            </View>

            {/*Groups Box and Num Total Spotted Box (horizontal)*/}
            <View>
                <View>
                    <Text style={styles.text}>Groups</Text>
                </View>
                <View>
                    <Text style={styles.text}>Total Spotted</Text>
                </View>
            </View>

            {/*Spotting Streak Box*/}
            <View>
                <Text style={styles.text}>Spotting Streak</Text>
            </View>

            {/*Favourite Cars Section*/}
            <View>
                <Text style={styles.text}>Favourite Cars</Text>
                <View>
                    <Text style={styles.text}>Favourite Cars Horizontal List</Text>
                </View>
            </View>
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
