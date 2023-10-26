import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './Trang/AppNavigation';
import React from 'react';
import TrangHome from './Trang/TrangHome';

export default function App() {
  return (
   <AppNavigation></AppNavigation>
   //(<TrangHome></TrangHome>)
  );
}


