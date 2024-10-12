import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Navigator from './NavigationService';
import SCREEN_NAME from './ScreenName';
import RootScreen from '../screens/Root';
import {
  AddNewTopicScreen,
  ChooseIconScreen,
  FlashcardListScreen,
  FlashcardScreen,
} from '../screens';
import AddNewCardScreen from '../screens/AddNewCardScreen';
import {TTopic} from '../types/Topic';
export type StackParamList = {
  HOME_SCREEN: undefined;
  ADD_CARD_SCREEN: undefined;
  ACCOUNT_SCREEN: undefined;
};

export interface NavigationStackParamList
  extends Record<string, object | undefined> {
  ROOT: NavigatorScreenParams<StackParamList>;
  CHOOSE_ICON: {
    callback: (iconName: string, iconColor: string) => void;
  };
  ADD_NEW_CARD: {topic: TTopic};
  FLASHCARD_LIST: {topic: TTopic};
}

export type ScreenNameKeys = keyof NavigationStackParamList;
export type NavigationParams = {
  [K in keyof NavigationStackParamList]: NavigationStackParamList[K] extends NavigatorScreenParams<
    infer P
  >
    ? NavigatorScreenParams<P>
    : undefined;
};

const Stack = createNativeStackNavigator<NavigationStackParamList>();

function StackScreens() {
  return (
    <NavigationContainer ref={Navigator.navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={SCREEN_NAME.MANUAL.ROOT}>
        <Stack.Screen name={SCREEN_NAME.MANUAL.ROOT} component={RootScreen} />
        <Stack.Screen
          name={SCREEN_NAME.MANUAL.ADD_NEW_TOPIC}
          component={AddNewTopicScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.MANUAL.ADD_NEW_CARD}
          component={AddNewCardScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.MANUAL.CHOOSE_ICON}
          component={ChooseIconScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.MANUAL.FLASHCARD_LIST}
          component={FlashcardListScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.MANUAL.FLASHCARD}
          component={FlashcardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreens;
