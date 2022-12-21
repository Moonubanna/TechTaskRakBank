import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
const HeaderComponent = (onBackPress: any) => {
  return (
    <View style={styles.topHeaderComponent}>
        <View>
            <Pressable onPress={() => onBackPress()}>
              <Image
                source={require('../../../common/resources/assets/images/back.png')}
                style={{width: 24, height: 24, tintColor: 'white'}}
                resizeMode={'contain'}
              />
            </Pressable>
        </View>
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
    paddingVertical: 10,
  },
});
