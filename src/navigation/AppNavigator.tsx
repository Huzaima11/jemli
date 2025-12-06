import { useEffect, useState } from "react";
import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome/Welcome";
import Login from "../screens/Login/Login";
import SignIn from "../screens/SignIn/SignIn";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "../components/Header/Header";
import { Screen } from "../utils/enums";
import PhoneNumber from "../screens/PhoneNumber/PhoneNumber";
import Success from "../screens/Success/Success";
import OverView from "../screens/OverView/OverView";
import Location from "../screens/Location/Location";
import FavoriteSport from "../screens/FavoriteSport/FavoriteSport";
import TabNavigation from "./TabNavigation";
import BusinessPartner from "../screens/Partner";
import PersonalizeStore from "../screens/PersonalizeStore";
import AddLocation from "../screens/AddLocation";
import BusinessLocation from "../screens/BusinessLocation";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {
          backgroundColor: "#ffff"
        }
      }} initialRouteName="Welcome" >
        <Stack.Screen options={{ headerShown: false }} name={Screen.Welcome} component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.Partner} component={BusinessPartner} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.Store} component={PersonalizeStore} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.AddLocation} component={AddLocation} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.BusinessLocation} component={BusinessLocation} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.Login} component={Login} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.Success} component={Success} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.OverView} component={OverView} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.Location} component={Location} />
        <Stack.Screen options={{ headerShown: false }} name={Screen.Favorite} component={FavoriteSport} />
        <Stack.Screen options={{ headerShown: false }} name="MainTabs" component={TabNavigation} />
        <Stack.Screen
          name={Screen.SignUp}
          component={SignIn}
          options={{
            header: () => <Header title="Create An Account" />
          }}
        />
        <Stack.Screen
          name={Screen.PhoneNumber}
          component={PhoneNumber}
          options={{
            header: () => <Header />
          }}
        />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
