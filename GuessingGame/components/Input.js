import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const Input = props => {
  return <TextInput {...props} style={{...styles.input, ...props.style}} />;
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;