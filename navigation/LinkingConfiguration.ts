import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import ClientScreen from "../screens/Client";
import GamePanelScreen from "../screens/Game";
import HelpScreen from "../screens/Help";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
              NewsScreen: 'News',
            },
          },
          TabTwo: {
            screens: {
              ClientScreen: 'Client Area',
            },
          },
          TabThree: {
            screens: {
              GamePanelScreen: 'Game Panel',
            },
          },
          TabFour: {
            screens: {
              HelpScreen: 'Help Center',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
