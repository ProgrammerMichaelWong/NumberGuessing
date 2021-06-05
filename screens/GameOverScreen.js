import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Colors from '../constants/colors';
import BodyText from '../components/BodyText';
const GameOverScreen = (props) => {
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get('window').height
  );
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get('window').width
  );

  useEffect(() => {
    const updatelayout = () => {
      setAvailableDeviceHeight(Dimensions.get('window').height);
      setAvailableDeviceWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', updatelayout);

    return () => {
      Dimensions.removeEventListener('change', updatelayout);
    };
  });

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View
          style={{
            ...styles.imageContainer,
            width: availableDeviceWidth * 0.7,
            height: availableDeviceWidth * 0.7,
            borderRadius: (availableDeviceWidth * 0.7) / 2,
            marginVertical: availableDeviceHeight / 30,
          }}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://static01.nyt.com/images/2021/01/20/sports/19ALTsummit-k2-2-print/19summit-k2-2-articleLarge.jpg',
            }}
            fadeDuration={300}
          />
        </View>
        <BodyText
          style={{
            ...styles.resultContainer,
            marginVertical: availableDeviceHeight / 60,
            fontSize: availableDeviceHeight < 400 ? 16 : 20,
          }}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
        <View style={styles.buttonContainer}>
          <Button title="NEW GAME" onPress={props.onRestart} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: '100%', height: '100%' },
  imageContainer: {
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  highlight: { color: Colors.primary, fontFamily: 'open-sans-bold' },
  resultContainer: {
    marginHorizontal: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    margin: 10,
  },
});

export default GameOverScreen;
