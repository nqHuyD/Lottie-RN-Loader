import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const App = () => {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(true);
  };

  return (
    <View style={styles.container}>
      <AnimatedLoader
        style={styles.lottie}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={styles.lottie}
        speed={1}
        visible={visible}
      />
      <Button tilte="Press Me" onPress={() => handlePress()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lottie: {
    width: 100,
    height: 100,
  },
});

export default App;
