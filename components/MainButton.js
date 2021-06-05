import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  View,
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = (props) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: { color: 'white', fontFamily: 'open-sans', fontSize: 10 },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default MainButton;
