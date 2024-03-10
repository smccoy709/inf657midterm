import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import ShoppingList from './components/ShoppingList';
import store from './components/ItemList';

export default function App() {
  return (
    <Provider store={store}>
       <ShoppingList />
    </Provider>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
