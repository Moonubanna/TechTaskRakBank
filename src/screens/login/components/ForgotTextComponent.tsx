import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
import {WIDTH} from '../../../constants';
const ForgotTextComponent = () => {
  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable>
          <Text
            style={[
              styles.txtSubHeading,
              {color: 'black'},
            ]}>{`Forgot User ID`}</Text>
        </Pressable>
        <Text style={[styles.txtSubHeading, {color: 'black'}]}>{` | `}</Text>
        <Pressable>
          <Text
            style={[
              styles.txtSubHeading,
              {color: 'black'},
            ]}>{`Forgot Password`}</Text>
        </Pressable>
      </View>
      <Pressable>
        <Text
          style={[
            styles.txtSubHeading,
            {alignSelf: 'center', marginTop: 7.5, color: 'black'},
          ]}>{`Enable User ID`}</Text>
      </Pressable>
    </View>
  );
};
export default ForgotTextComponent;

const styles = StyleSheet.create({
    txtSubHeading: {
        color: 'white',
        fontSize: 14,
      },
});
