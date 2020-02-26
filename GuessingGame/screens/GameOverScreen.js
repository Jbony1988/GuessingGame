import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import BodyText from '../components/TitleText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText> The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>

        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber} </Text> rounds
            to guess the number <Text>{props.userNumber}</Text>{' '}
          </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
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
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'OpenSans-Bold',
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
