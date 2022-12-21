import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../common/resources/theme';
import {WIDTH} from '../../constants';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  txtName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10
  },
});
