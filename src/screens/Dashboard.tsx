/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '../types/navigation';

type Props = {
    navigation: NavigationProp;
};

const Dashboard: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Dashboard!</Text>
            <Button title="View Workout Plans" onPress={() => navigation.navigate('WorkoutPlans')} />
            <Button title="View Meal Prep" onPress={() => navigation.navigate('MealPrep')} />
            <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Dashboard;
