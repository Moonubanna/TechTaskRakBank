import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
import {WIDTH} from '../../../constants';
const ButtonComponent = (name: string, onPressButton: any) => {
  return (
    <Pressable
      onPress={() => onPressButton(name === 'Submit' ? 'Submit' : 'Login')}
      style={[
        styles.buttonComponent,
        {
          width: WIDTH - 100,
          backgroundColor: name === 'Submit' ? colors.grey600 : colors.grey900,
        },
      ]}>
      <Text style={styles.buttonText}>{name}</Text>
    </Pressable>
  );
};
export default ButtonComponent;

const styles = StyleSheet.create({
  buttonComponent: {
    height: 45,
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
