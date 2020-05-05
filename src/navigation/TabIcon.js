import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={32}
      style={{ marginBottom: 0, marginTop: 10 }}
      color={props.focused ? Colors.primaryColor : Colors.secondaryColor}
    />
  );
}
