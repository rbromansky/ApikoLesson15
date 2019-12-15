import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import counterStore from '../stores/CounterStore';
import s from './styles';

const Counter = observer(() => {
  return (
    <View style={s.container}>
      <Text>Current Count: {counterStore.count}</Text>
    </View>
  );
});

export default Counter;
