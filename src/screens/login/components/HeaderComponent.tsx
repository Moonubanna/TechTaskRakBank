import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
const HeaderComponent = (isLoginVisible: boolean, onRegister: any, onBackPress: any) => {
  return (
    <View style={styles.topHeaderComponent}>
        <View>
          {isLoginVisible && (
            <Pressable onPress={() => onBackPress()}>
              <Image
                source={require('../../../common/resources/assets/images/back.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}
                resizeMode={'contain'}
              />
            </Pressable>
          )}
        </View>
        <Pressable
          style={styles.registerComponent}
          onPress={() => onRegister()}>
          <Text style={[styles.txtRegister, {fontSize: 12, color: 'white'}]}>
            {'Register'}
          </Text>
        </Pressable>
      </View>
  );
};
export default HeaderComponent;

const styles = StyleSheet.create({
  topHeaderComponent: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  registerComponent: {
    backgroundColor: colors.color_primary_dark ,
    borderRadius: 25 / 2,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 7.5,
  },
  txtRegister: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  },
});
