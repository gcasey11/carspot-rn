import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ProfileScreen() {
    return (
        <View style={styles.mainContainer}>
            {/*Name / Username Box*/}
            <View style={styles.topContainer}>
                <Image source={{
                    uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }} style={styles.profilePic}/>
                <View style={styles.namesContainer}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.username}>Username</Text>
                </View>
            </View>

            {/*Groups Box and Num Total Spotted Box (horizontal)*/}
            <View style={styles.middleContainer}>
                <View style={styles.groupsContainer}>
                    <Text style={styles.text}>Part of</Text>
                    <Text style={styles.highlightedNumText}>N</Text>
                    <Text style={styles.text}>Groups</Text>
                </View>
                <View style={styles.totalsContainer}>
                    <Text style={styles.highlightedNumText}>N</Text>
                    <Text style={styles.text}>Total Spotted</Text>
                </View>
            </View>

            {/*Spotting Streak Box*/}
            <View style={styles.streakContainer}>
                <Text style={styles.streakText}>N Day Spotting Streak!</Text>
            </View>

            {/*Latest Spots Section*/}
            <View style={styles.latestSpotsContainer}>
                <Text style={styles.latestSpotsTitleText}>Favourite Cars</Text>
                <View>
                    <Text style={styles.text}>Favourite Cars Horizontal List</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20
    },
    topContainer: {
        padding: 10,
        flexDirection: "row",
        borderStyle: 'solid',
        borderRadius: 10,
        alignSelf: 'stretch',
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: "white",
        marginBottom: 30,
        alignItems: "center"
    },
    profilePic: {
        width: 75,
        height: 75,
        marginEnd: 10
    },
    namesContainer: {

    },
    name: {
        fontSize: 22
    },
    username: {
        fontSize: 15,
        color: "#AAAAAA"
    },
    middleContainer: {
        flexDirection: "row",
        alignItems: 'stretch',
        marginBottom: 30,
        alignSelf: "stretch",
        justifyContent: 'space-between'
    },
    groupsContainer: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginEnd: 20
    },
    totalsContainer: {
        backgroundColor: "white",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderStyle: 'solid',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginStart: 20
    },
    highlightedNumText: {
        textAlign: "center",
        fontSize: 30
    },
    streakContainer: {
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 20,
        alignSelf: 'stretch',
        backgroundColor: "white",
        marginBottom: 30
    },
    streakText: {
        fontSize: 20
    },
    text: {
        fontSize: 20,
        textAlign: "center"
    },
    latestSpotsContainer: {
        alignSelf: "stretch",
    },
    latestSpotsTitleText: {
        fontSize: 25,
    }
});
