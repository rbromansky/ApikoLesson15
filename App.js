import React from 'react';
import { View, Button } from 'react-native';
import counterStore from './stores/CounterStore';
import Counter from './components/Counter';
import s from './styles';

function App() {
  return (
    <View style={s.container}>
      <Counter />
      <Button
        title="Increment "
        onPress={() => counterStore.increment()}
      />
      <Button
        title="Decrement"
        onPress={() => counterStore.decrement()}
      />
    </View>
  );
}

export default App;
