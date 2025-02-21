import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Facebook from './facebook/Facebook';

const App = () => {

  return (
    <SafeAreaProvider>
      <Facebook />
    </SafeAreaProvider>
  );
};

export default App;