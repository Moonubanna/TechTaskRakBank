import React from 'react';
import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import {colors} from '../../../common/resources/theme';
import {WIDTH} from '../../../constants';
const QuickBalanceComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContiner}
        source={require('../../../common/resources/assets/images/fingerprint.png')}
        resizeMode={'contain'}
      />
      <Text
        style={[
          styles.txtSubHeading,
          {color: 'black'},
        ]}>{`Quick Balance`}</Text>
    </View>
  );
};
export default QuickBalanceComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  imageContiner: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  txtSubHeading: {
    color: 'white',
    fontSize: 14,
  },
});
