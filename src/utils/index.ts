import {CommonActions} from '@react-navigation/native';
/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export const navigate = (navigation: any, screen: any) => {
  navigation.navigate(screen);
};

/**
 * Navigate to route
 * @param {NavigationNavigateActionPayload} params
 */
export const navigateWithParams = (
  navigation: any,
  screen: any,
  params: any,
) => {
  navigation.navigate(screen, params);
};

/**
 * Navigate back to previous route in history
 */
export const back = (navigation: any) => {
  navigation.goBack();
};

/* Clear Stack */
export const clearStack = (navigation: any, screenName: any) => {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: screenName}],
  });
  navigation.dispatch(resetAction);
};
