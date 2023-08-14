import { useCurrentUser } from './app/hooks';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/navigation';

export default function App() {
  const { currentUser } = useCurrentUser();
  console.log('Currently loggedin as : ', currentUser);
  return (
    <NavigationContainer>
      <AppNavigator currentUser={currentUser} />
    </NavigationContainer>
  );
}
