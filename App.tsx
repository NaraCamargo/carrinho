import { SafeAreaView, StatusBar, View } from 'react-native';
import Carrinho from './src/pages/Carrinho';

export default function App() {
  return (
    <SafeAreaView>
       <StatusBar/>
      <Carrinho/>
    </SafeAreaView>
  );
}
