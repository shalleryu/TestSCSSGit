import React from 'react';
import { View } from 'react-native';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <View
      name={props.name}
      size={26}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
