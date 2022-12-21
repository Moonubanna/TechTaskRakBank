import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  Animated,
  Platform,
  Easing,
  ScrollView,
  Pressable,
} from 'react-native';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {SCREEN, WIDTH} from '../../constants';
import {colors} from '../../common/resources/theme';
import {BookContext} from '../../contexts';
import * as Utils from '../../utils';
import * as Handlers from './handlers';
import styles from './styles';
import Loader from '../../common/components/Loader';
// Libraries
import LinearGradient from 'react-native-linear-gradient';
import {
  postLoginRequestDataAction,
  postClearLoginRequestDataAction,
} from '../../redux/actions';

// Components
import headerComponent from './components/HeaderComponent';
import textInputComponent from './components/TextInputComponent';
import buttonComponent from './components/ButtonComponent';
import forgotTextComponent from './components/ForgotTextComponent';
import quickBalanceComponent from './components/QuickBalanceComponent';
const Login = ({}) => {
  const {navigation, route} = useContext(BookContext);
  const dispatch = useDispatch();
  const {loginResponse, loading} = useSelector(
    state => ({
      loginResponse: state.postLoginRequestCasesReducer.response,
      loading: state.postLoginRequestCasesReducer.loading,
    }),
    shallowEqual,
  );

  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [latLng, setLatLng] = useState('');

  const [systemName, setSystemName] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [macAddress, setMacAddress] = useState('');
  const [ipAddress, setIpAddress] = useState('');

  const [animationLogin, setAnimationLogin] = useState(new Animated.Value(400));
  const [animationMessage, setAnimationMessage] = useState(
    new Animated.Value(-250),
  );
  const timing = Animated.timing;

  // Setup initial state
  useEffect(() => {
    initilizeData();
  }, []);

  /* Handle login response  */
  useEffect(() => {
    if (loginResponse && loginResponse.error === false) {
      // Clear after api sucess User ID and Password 
      setUserId('');
      setPassword('');
      // Navigate Dashboard screen with request object.
      Utils.navigateWithParams(navigation, SCREEN.SCREEN_DASHBOARD, {
        data: {
          mobile_number: loginResponse?.data?.mobile_number,
          device_type: Platform.OS === 'android' ? 'android' : 'ios',
          device_token: 'tech_task_rak_bank',
          operating_system: systemName,
          device_name: deviceName,
          device_mac_location: macAddress,
          imei: '', //I had find one library for fetching imei number for android side but facing some issues so i remove it.
          gps_location: latLng || '',
          public_ip_address: ipAddress,
        },
      });
    } else if (loginResponse && loginResponse.error === true) {
      alert('fail');
    }
  }, [loginResponse]);

  const initilizeData = () => {
    Handlers.getSystemName_(setSystemName);
    Handlers.getDeviceName_(setDeviceName);
    Handlers.getMacAddress_(setMacAddress);
    Handlers.getIpAddress_(setIpAddress);
    // Fetching location
    if (Platform.OS === 'android') {
      Handlers.androidLocationPermission();
    }
    Handlers.getLocation(setLatLng);
    dispatch(postClearLoginRequestDataAction(undefined));
    Animated.parallel([
      timing(animationMessage, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start();
  };

  // Call test login api
  function callLoginApi() {
    let requestObj = {
      mobile_number: '8504017575',
      country_code: '+91',
      device_type: Platform.OS === 'android' ? 'android' : 'ios',
      device_token: 'tech_task_rak_bank',
      operating_system: systemName,
      device_name: deviceName,
      device_mac_location: macAddress,
      imei: '', //I had find one library for fetching imei number for android side but facing some issues so i remove it.
      gps_location: latLng || '',
      public_ip_address: ipAddress,
    };
    Handlers.callLoginApi(requestObj, dispatch, postLoginRequestDataAction);
  }
  const onBackPress = () => {
    setIsLoginVisible(false);
    Animated.parallel([
      timing(animationMessage, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }),
    ]).start();
    setAnimationLogin(new Animated.Value(400));
  };
  const onRegister = () => {};
  const onPressButton = (type: string) => {
    if (type === 'Submit') {
      // Call api here
      callLoginApi();
    } else {
      setAnimationMessage(new Animated.Value(-148));
      setIsLoginVisible(true);
      Animated.parallel([
        timing(animationLogin, {
          toValue: 0,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  return (
    <LinearGradient
      colors={[
        colors.color_primary,
        colors.color_primary,
        colors.color_primary,
        colors.color_accent,
      ]}
      style={{flex: 1}}>
      <ScrollView scrollEnabled={true}>
        <Animated.View style={styles.container}>
          {/* {Top View Component} */}
          <Animated.View style={styles.topComponent}>
            {/* Top header component */}
            <>{headerComponent(isLoginVisible, onRegister, onBackPress)}</>
            {!isLoginVisible ? (
              <Animated.View
                style={[
                  styles.topChildComponent,
                  {marginTop: 15, position: 'relative', top: animationMessage},
                ]}>
                <Text style={styles.txtHeading}>{`RAKBANK`}</Text>
                <Text
                  style={[
                    styles.txtSubHeading,
                    {marginTop: 15, marginRight: 60},
                  ]}>{`Everything you love about \nDigital Banking in a smarter, \nsimpler design`}</Text>
              </Animated.View>
            ) : (
              <Animated.View
                style={[
                  styles.topChildComponent,
                  {marginTop: 15, position: 'relative', top: animationLogin},
                ]}>
                {textInputComponent('User ID', userId, setUserId)}
                {textInputComponent('Password', password, setPassword)}
                {
                  <Pressable
                    onPress={() => {
                      if (userId !== '' && password !== '')
                        onPressButton('Submit');
                    }}
                    style={[
                      styles.buttonComponent,
                      {
                        width: WIDTH - 100,
                        backgroundColor:
                          userId !== '' && password !== ''
                            ? colors.grey900
                            : colors.grey600,
                      },
                    ]}>
                    <Text style={styles.buttonText}>{'Submit'}</Text>
                  </Pressable>
                }
                {forgotTextComponent()}
              </Animated.View>
            )}
          </Animated.View>
          {/* Bottom View Component */}
          <Animated.View style={styles.bottomComponent}>
            {!isLoginVisible &&
              buttonComponent('Login with User ID', onPressButton)}
            {!isLoginVisible && quickBalanceComponent()}
          </Animated.View>
        </Animated.View>
      </ScrollView>
      {loading != undefined && loading && <Loader />}
    </LinearGradient>
  );
};

export default Login;
