import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AboutView from './Component/Views/AboutView';

const Home = ({navigation}) => {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>Probando</Text>
      <Text>{text}</Text>
      <TextInput
        placeholder="Text input"
        onChangeText={(text) => setText(text)}
      />
      <Button
        title="Ir a acerca de..."
        onPress={() => navigation.push('About', {name: 'daniel', age: 26})}
      />
    </View>
  );
};

const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="About" component={AboutView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
