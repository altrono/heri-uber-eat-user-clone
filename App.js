import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import RestaurantItem  from './components/RestaurantItem';
import restaurants from './assets/data/restaurants.json';



export default function App() {
  return (
    <View style={styles.container}>
        <RestaurantItem restaurant={restaurants[0]} />
        <RestaurantItem restaurant={restaurants[1]} />
        
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
