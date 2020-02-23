import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import Navigation from './scenes/navigation';
import Colors from './helpers/Colors';
import {store, persist} from './reducers';
import {NavigationContainer} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    persist(() => {
      setReady(true);
    });
  });

  const loading = (
    <NavigationContainer>
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </NavigationContainer>
  );

  const loaded = (
    <NavigationContainer>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </NavigationContainer>
  );

  return ready ? loaded : loading;
}
