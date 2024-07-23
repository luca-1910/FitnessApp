/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WorkoutPlansScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Workout Plans</Text>
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

export default WorkoutPlansScreen;
