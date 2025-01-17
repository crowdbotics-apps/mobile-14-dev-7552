import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen38904Navigator from '../features/BlankScreen38904/navigator';
import BlankScreen18898Navigator from '../features/BlankScreen18898/navigator';
import BlankScreen28897Navigator from '../features/BlankScreen28897/navigator';
import BlankScreen18895Navigator from '../features/BlankScreen18895/navigator';
import BlankScreen38892Navigator from '../features/BlankScreen38892/navigator';
import EmailAuth18886Navigator from '../features/EmailAuth18886/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen38904: { screen: BlankScreen38904Navigator },
BlankScreen18898: { screen: BlankScreen18898Navigator },
BlankScreen28897: { screen: BlankScreen28897Navigator },
BlankScreen18895: { screen: BlankScreen18895Navigator },
BlankScreen38892: { screen: BlankScreen38892Navigator },
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
