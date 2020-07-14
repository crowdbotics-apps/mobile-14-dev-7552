import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen48893Navigator from '../features/BlankScreen48893/navigator';
import BlankScreen38892Navigator from '../features/BlankScreen38892/navigator';
import EmailAuth28887Navigator from '../features/EmailAuth28887/navigator';
import EmailAuth18886Navigator from '../features/EmailAuth18886/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen48893: { screen: BlankScreen48893Navigator },
BlankScreen38892: { screen: BlankScreen38892Navigator },
EmailAuth28887: { screen: EmailAuth28887Navigator },
EmailAuth18886: { screen: EmailAuth18886Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
