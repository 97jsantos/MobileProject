import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Regioes } from './src/screens/Regioes'
import { Estados } from './src/screens/Estados'
import { Municipios } from './src/screens/Municipios'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Regioes do Brasil">
			<Stack.Screen name="Regioes do Brasil" component={Regioes} />
			<Stack.Screen name="Estados" component={Estados} />
			<Stack.Screen name="Municipios" component={Municipios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;