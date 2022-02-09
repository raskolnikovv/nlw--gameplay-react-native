import React from 'react';

import {
  View, 
  ActivityIndicator
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

export function Load(){
  return (
    <View>
      <ActivityIndicator style={styles.container}
        size='large'
        color={theme.colors.primary}
      />
    </View>
  );
}