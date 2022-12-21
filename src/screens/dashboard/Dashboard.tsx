import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  Pressable,
  Dimensions,
  Animated,
  Platform,
  Easing,
  ScrollView,
} from 'react-native';
import {DIMENS, SCREEN, WIDTH} from '../../constants';
import {colors} from '../../common/resources/theme';
import {BookContext} from '../../contexts';
import styles from './styles';
import Loader from '../../common/components/Loader';
const {width, height} = Dimensions.get('window');
// Libraries
import LinearGradient from 'react-native-linear-gradient';
// Components
import headerComponent from './components/HeaderComponent';
// {"device_mac_location": "02:00:00:00:00:00", "device_name": "iPhone 11 Pro", 
// "device_token": "tech_task_rak_bank", "device_type": "ios", "gps_location": "37.785834, -122.406417", 
// "imei": "", "mobile_number": "8504017575", "operating_system": "iOS", "public_ip_address": "192.168.1.151"} 
const Dashboard = ({}) => {
  const {navigation, route} = useContext(BookContext);

  const [previousSucessObj, setPreviousSucessObj] = useState(route?.params?.data);

  // Setup initial state
  useEffect(() => {
  }, []);

  const onBackPress = () => {
    navigation.goBack();
    return;
  };

  return (
    <LinearGradient
      colors={[
        colors.color_primary,
        colors.color_primary,
        colors.color_primary,
        colors.color_accent,
      ]}
      style={{flex: 1, padding: 10}}>
        <View style={styles.container}>
        {headerComponent(onBackPress)}
        {infoComponent('Mobile No', previousSucessObj?.mobile_number)}
        {infoComponent('Device Name', previousSucessObj?.device_name)}
        {infoComponent('Device Type', previousSucessObj?.device_type)}
        {infoComponent('Device Token', previousSucessObj?.device_token)}
        {infoComponent('Operating System', previousSucessObj?.operating_system)}
        {infoComponent('Device Mac Location', previousSucessObj?.device_mac_location)}
        {infoComponent('GPS Location', previousSucessObj?.gps_location)}
        {infoComponent('Public IP Address', previousSucessObj?.public_ip_address)}
        {infoComponent('IMEI', previousSucessObj?.imei)}
        </View>
      </LinearGradient>
  );
};

const infoComponent = (key, value) => {
  return(
    <Text style={styles.txtName}>{`${key} : ${value}`}</Text>
  )
}

export default Dashboard;
