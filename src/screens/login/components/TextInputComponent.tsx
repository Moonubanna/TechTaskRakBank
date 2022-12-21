import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
import {TextInput} from 'react-native-element-textinput';
const TextInputComponent = (heading: string, value: string, setValue: any) => {
  return (
    <View style={styles.txtInputComponent}>
      <TextInput
        value={value}
        style={styles.input}
        inputStyle={styles.inputStyle}
        labelStyle={styles.labelStyle}
        placeholderStyle={styles.placeholderStyle}
        showIcon={false}
        label={heading}
        focusColor="orange"
        onChangeText={text => {
          setValue(text);
        }}
        autoFocus={heading === 'User ID' ? true : false}
        //underlineColorAndroid={'orange'}
      />
    </View>
  );
};
export default TextInputComponent;

const styles = StyleSheet.create({
  txtInputComponent: {
    width: '100%',
    height: 70,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 25,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'white',
    shadowOpacity: .5,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: 15
  },
    input: {
        height:40,
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
      },
      inputStyle: { fontSize: 14, color: 'black',  },
      labelStyle: {
      color: 'black',
      fontSize: 12,
      position: 'absolute',
      top: -5,
      },
      placeholderStyle: { fontSize: 14, color: 'grey' },
});
