import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.background}>
        <View>
            <Text>HomePage</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#B5EAD7",
    },
});

export default HomePage;