import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../common/resources/theme';
import {WIDTH} from '../../constants';

const {height, width} = Dimensions.get('window');
export default StyleSheet.create({
  container: {
  },
  topComponent: {
  },
  topChildComponent: {
    flex: 1,
    flexDirection: 'column', 
    padding: 15,
  },
  bottomComponent: {
    marginTop: height / 2.5,
  },
  txtHeading: {
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
  },
  txtSubHeading: {
    color: 'white',
    fontSize: 17,
  },
  txtInputText:{
    color:'black',
    fontSize: 14
  },
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
