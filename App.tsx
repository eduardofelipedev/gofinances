import React from 'react';
import AppLoading from 'expo-app-loading';
import { Dashboard } from './src/screens/Dashboard';
import { Register } from './src/screens/Register';
import { CategoriesSelect } from './src/screens/CategorySelect';
import { ThemeProvider } from 'styled-components';
import SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';


export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontLoaded){
    return <AppLoading />
  }
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" backgroundColor="#5636D3" />
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
        
      </ThemeProvider>
      </GestureHandlerRootView>
     
   
    
    
  );
}


