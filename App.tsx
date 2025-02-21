import { SafeAreaProvider } from 'react-native-safe-area-context';
import Lesson from './facebook/ui_demock/Lesson';

export default function App() {
  return (
    <SafeAreaProvider>
      <Lesson />
    </SafeAreaProvider>
  );
}