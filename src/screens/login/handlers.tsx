import {PermissionsAndroid} from 'react-native';
import GetLocation from 'react-native-get-location';
import {
  getSystemName,
  getDeviceName,
  getMacAddress,
  getIpAddress,
} from 'react-native-device-info';

export const getSystemName_ = (setSystemName) => {
  setSystemName(getSystemName());
}
export const getDeviceName_ = (setDeviceName) => {
  
  getDeviceName().then((deviceName) => {
    setDeviceName(deviceName);
  });
}
export const getMacAddress_ = async (setMacAddress) => {
  await getMacAddress().then((mac) => {
    setMacAddress(mac);
  });
}
export const getIpAddress_ = (setIpAddress) => {
  getIpAddress().then((ip) => {
    setIpAddress(ip);
  });
}
// Calling api's
export const callLoginApi = (
  requestObj: object,
  dispatch: any,
  postLoginRequestDataAction: any,
) => {
  let requestData = requestObj;
  dispatch(postLoginRequestDataAction(requestData));
};

export const getLocation = (setLatLng: any) => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      console.log(location);
      setLatLng(`${location?.latitude}, ${location?.longitude}`)
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
};

export const androidLocationPermission = async () => {
  try{

    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }

  } catch (err) {

    return false;

  }
}