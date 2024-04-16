import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: 'relative',
      overflow: 'hidden',
    },
    rainbowBorder: {
      position: 'absolute',
      bottom: 0,
      height: 5, 
      left: 0,
      right: 0,
    },
    red: { backgroundColor: 'red', width: '16.66%' },
    orange: { backgroundColor: 'orange', width: '16.66%' },
    yellow: { backgroundColor: 'yellow', width: '16.66%' },
    green: { backgroundColor: 'green', width: '16.66%' },
    blue: { backgroundColor: 'blue', width: '16.66%' },
    purple: { backgroundColor: 'purple', width: '16.66%' },
  });
  

const RainbowBottomBorder = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.rainbowBorder, styles.red]} />
      <View style={[styles.rainbowBorder, styles.orange]} />
      <View style={[styles.rainbowBorder, styles.yellow]} />
      <View style={[styles.rainbowBorder, styles.green]} />
      <View style={[styles.rainbowBorder, styles.blue]} />
      <View style={[styles.rainbowBorder, styles.purple]} />
    </View>
  );
};


export default RainbowBottomBorder;
